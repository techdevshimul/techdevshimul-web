import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import configs from "@/utils/configs";
import { queryClient } from "@/utils/queryClient";

const filterFields = ["page", "limit", "search"];

export function useCrudOperations(endpoint: string, isBaseURL = true) {
  const token = localStorage.getItem("token");

  async function handleFetchResponse(response: Response) {
    if (!response.ok) {
      let message = "An unknown error occurred";
      try {
        const errorBody = await response.json();
        if (errorBody && typeof errorBody.message === "string") {
          message = errorBody.message;
        }
      } catch {
        message = await response.text();
      }
      throw new Error(`${message}`);
    }

    return response.json();
  }

  const useFetchEntities = (
    filters: Record<string, string | number>,
    options = {},
  ) => {
    return useQuery({
      queryKey: [
        endpoint,
        ...filterFields.map((fieldName) => filters?.[fieldName]),
      ],
      queryFn: async () => {
        const queryParams = new URLSearchParams();

        filterFields.forEach((fieldName: string) => {
          const value = filters?.[fieldName];
          if (value !== undefined && value !== null && value !== "all") {
            queryParams.append(fieldName, String(value));
          }
        });

        const response = await fetch(
          isBaseURL
            ? `${configs.apiBaseUrl}/${endpoint}?${queryParams.toString()}`
            : `${endpoint}?${queryParams.toString()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          },
        );
        return handleFetchResponse(response);
      },
      placeholderData: keepPreviousData,
      ...options,
    });
  };

  const useEntityById = (id: string) => {
    return useQuery({
      queryKey: [endpoint, id],
      queryFn: async () => {
        const response = await fetch(
          `${configs.apiBaseUrl}/${endpoint}/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          },
        );
        return handleFetchResponse(response);
      },
      enabled: !!id,
      placeholderData: keepPreviousData,
    });
  };

  const createEntity = useMutation({
    mutationFn: async (newEntity) => {
      const response = await fetch(`${configs.apiBaseUrl}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newEntity),
        credentials: "include",
      });
      return handleFetchResponse(response);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint] });
    },
  });

  const updateEntity = useMutation({
    mutationFn: async (updatedEntity: { _id: string }) => {
      const response = await fetch(
        `${configs.apiBaseUrl}/${endpoint}/${updatedEntity._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedEntity),
          credentials: "include",
        },
      );
      return handleFetchResponse(response);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [endpoint] });
      queryClient.invalidateQueries({ queryKey: [endpoint, variables._id] });
    },
  });

  const deleteEntity = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`${configs.apiBaseUrl}/${endpoint}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      return handleFetchResponse(response);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [endpoint] });
      queryClient.invalidateQueries({ queryKey: [endpoint, variables] });
    },
  });

  return {
    useFetchEntities,
    useEntityById,
    createEntity,
    updateEntity,
    deleteEntity,
  };
}
