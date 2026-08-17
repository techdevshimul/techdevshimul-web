"use client";

import configs from "@/utils/configs";
import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch(`${configs.apiBaseUrl}/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe. Please try again.");
      }

      setEmail("");
      setStatus({
        loading: false,
        success: true,
        message: "Thank you for subscribing!",
      });
    } catch (error: any) {
      setStatus({
        loading: false,
        success: false,
        message: error.message || "An unexpected error occurred.",
      });
    }
  };

  return (
    <section className="mt-stack-lg glass-card-blogs rounded-2xl p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Get Fresh Insights
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Join 2,000+ engineers receiving my monthly digest on software
            architecture, career growth, and the latest tech trends. No spam,
            just technical precision.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="grow bg-deep-navy border border-glass-border rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-on-background"
              placeholder="Enter your email"
              type="email"
            />
            <button
              disabled={status.loading}
              className="bg-primary-container text-on-primary-container font-bold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-glow-electric/20 transition-all active:scale-95 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
            >
              {status.loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {status.message && (
            <div
              className={`p-3 rounded-lg font-label-sm text-xs text-center ${
                status.success
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
              }`}
            >
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
