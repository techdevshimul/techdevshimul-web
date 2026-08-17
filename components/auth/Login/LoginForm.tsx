import configs from "@/utils/configs";
import Link from "next/link";

export default function LoginForm() {
  return (
    <>
      <form className="pt-16">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Login
        </button>
      </form>

      <Link href="/(auth)/register" className="text-blue-500 mt-4 block">
        Don't have an account? Register here.
      </Link>

      <Link
        href={`${configs.apiBaseUrl}/auth/oauth2/redirect/google`}
        className="text-blue-500 mt-4 block"
      >
        Sign in with Google
      </Link>
    </>
  );
}
