"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Label } from "@radix-ui/react-label";

function SignUpPage() {
  const inUsernameRef = useRef<HTMLInputElement>(null);
  const inEmailRef = useRef<HTMLInputElement>(null);
  const inPasswordRef = useRef<HTMLInputElement>(null);
  const inConfirmPasswordRef = useRef<HTMLInputElement>(null);

  async function onBtSignup() {
    const username = inUsernameRef.current?.value ?? "";
    const email = inEmailRef.current?.value ?? "";
    const password = inPasswordRef.current?.value ?? "";
    const confirmPassword = inConfirmPasswordRef.current?.value ?? "";

    if (!username || !email || !password || !confirmPassword) {
      alert("Form wajib diisi");
      return;
    }

    if (password !== confirmPassword) {
      alert("password tidak cocok");
      return;
    }

    try {
      const response = await axios.post(
        "https://ruggedlaugh-us.backendless.app/api/data/account",
        {
          username,
          email,
          password,
        }
      );
      console.log(response.data);
      // You may want to redirect or show a success message here
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/slide-health.webp')" }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-50 z-0" />
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <Card>
          <CardContent 
          className="w-96 flex flex-col gap-2">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Sign Up</h1>
              <p className="text-balance text-muted-foreground">
                Create your Maximus account
              </p>
            </div>
            <div className="grid gap-2">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                placeholder="Type Username"
                ref={inUsernameRef}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                ref={inEmailRef}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Type Password"
                autoComplete="new-password"
                required
              />
            </div>
            <div className="my-4">
              <label>Confirm Password</label>
              <Input
                type="password"
                placeholder="Confirm Password"
                ref={inConfirmPasswordRef}
              />
            </div>
            <Button
              type="button"
              className="w-full font-bold text-white bg-black hover:bg-blue-500 cursor-pointer"
              onClick={onBtSignup}
            >
              Create an account
            </Button>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-blue-600 hover:underline font-semibold"
              >
                Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SignUpPage;
