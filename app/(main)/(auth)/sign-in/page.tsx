"use client";

//shadcn ui
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";

//react icons
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { TriangleAlert } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) {
      router.push("/dashboard"); // Redirect to the dashboard after successful login
      toast.success("Login successful");
    } else if (res?.status === 401) {
      setError("Invalid Credentials");
      setPending(false);
    } else {
      setError("Something went wrong");
      setPending(false);
    }
  };

  const handleProvider = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: "github" | "google"
  ) => {
    event.preventDefault();
    signIn(value, { callbackUrl: "/dashboard" }); // Redirect to dashboard after provider sign-in
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8 bg-white rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold text-gray-800">Sign in</CardTitle>
          <CardDescription className="text-sm text-center text-gray-600">
            Use email or service to sign in
          </CardDescription>
        </CardHeader>
        {!!error && (
          <div className="bg-red-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-600 mb-6">
            <TriangleAlert />
            <p>{error}</p>
          </div>
        )}
        <CardContent className="px-2 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              disabled={pending}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 border rounded-md"
            />
            <Input
              type="password"
              disabled={pending}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 border rounded-md"
            />
            <Button className="w-full" size="lg" disabled={pending}>
              {pending ? "Signing In..." : "Continue"}
            </Button>
          </form>

          <Separator className="my-4" />
          <div className="flex my-2 justify-evenly mx-auto items-center">
            <Button
              onClick={() => {}}
              variant="outline"
              size="lg"
              className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
            >
              <FcGoogle className="size-8 left-2.5 top-2.5" />
            </Button>
            <Button
              onClick={(e) => handleProvider(e, "github")}
              variant="outline"
              size="lg"
              className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
            >
              <FaGithub className="size-8 left-2.5 top-2.5" />
            </Button>
          </div>
          <p className="text-center text-sm mt-2 text-gray-600">
            Create new account
            <Link
              className="text-sky-700 ml-4 hover:underline cursor-pointer"
              href="/sign-up"
            >
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
