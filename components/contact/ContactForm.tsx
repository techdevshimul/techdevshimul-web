"use client";

import configs from "@/utils/configs";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "web_app",
    message: "",
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch(`${configs.apiBaseUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setFormData({
        name: "",
        email: "",
        projectType: "web_app",
        message: "",
      });

      setStatus({
        loading: false,
        success: true,
        message: "Message transmitted successfully!",
      });

      console.log(response);
    } catch (error: any) {
      setStatus({
        loading: false,
        success: false,
        message: error.message || "An unexpected error occurred.",
      });
    }
  };

  return (
    <div className="relative">
      <div className="absolute -inset-2 bg-linear-to-r from-primary/10 to-secondary/10 rounded-[2.5rem] blur-2xl"></div>
      <form
        onSubmit={handleSubmit}
        className="relative high-gloss p-10 md:p-12 rounded-3xl space-y-8 bg-surface-container-low"
      >
        <div className="space-y-3">
          <label className="font-label-sm text-[10px] text-outline uppercase">
            User_Name
          </label>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/5 border border-outline-variant rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder-white/20"
            placeholder="John Doe"
            type="text"
          />
        </div>
        <div className="space-y-3">
          <label className="font-label-sm text-[10px] text-outline uppercase">
            Email_Address
          </label>
          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/5 border border-outline-variant rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder-white/20"
            placeholder="john@example.com"
            type="email"
          />
        </div>
        <div className="space-y-3">
          <label className="font-label-sm text-[10px] text-outline uppercase">
            Project_Type
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full bg-surface-container border border-outline-variant rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white appearance-none"
          >
            <option className="bg-surface-container" value="web_app">
              Web Application
            </option>
            <option className="bg-surface-container" value="ecommerce">
              E-Commerce
            </option>
            <option className="bg-surface-container" value="saas">
              SaaS Platform
            </option>
            <option className="bg-surface-container" value="consulting">
              Technical Consulting
            </option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="font-label-sm text-[10px] text-outline uppercase">
            Project_Manifesto
          </label>
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white/5 border border-outline-variant rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder-white/20"
            placeholder="Tell me about your project..."
            rows={4}
          ></textarea>
        </div>

        {status.message && (
          <div
            className={`p-4 rounded-xl font-label-sm text-xs text-center ${
              status.success
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          disabled={status.loading}
          className="w-full bg-primary text-on-primary py-5 rounded-2xl font-label-sm text-label-sm font-bold uppercase transition-all hover:scale-[1.02] active:scale-95 glow-hover disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          {status.loading ? "Transmitting..." : "Transmit_Message"}
        </button>
      </form>
    </div>
  );
}
