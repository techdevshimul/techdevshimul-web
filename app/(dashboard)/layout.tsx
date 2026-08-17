"use client";

import configs from "@/utils/configs";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAuthenicateUser = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${configs.apiBaseUrl}/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        credentials: "include",
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        throw new Error("Failed to authenticate user");
      }

      return res.json();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const authenticateUser = async () => {
      const userData = await fetchAuthenicateUser();
      console.log("User data:", userData);
      if (!userData) {
        console.log("User is not authenticated. Redirecting to login page...");
        // window.location.href = "/login";
      } else {
        setIsAuthenticated(true);
      }
    };
    authenticateUser();
  }, []);

  if (isLoading) {
    return (
      <main className="pt-16 flex flex-col items-center justify-center min-h-screen">
        <h1>Loading...</h1>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="pt-16">
        <h1>Access Denied</h1>
        <p>You are not authorized to view this page.</p>
      </main>
    );
  }

  return <main className="pt-16">{children}</main>;
}
