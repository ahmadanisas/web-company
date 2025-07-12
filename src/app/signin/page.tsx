"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRef, useState } from "react";
import axios from "axios";

export default function SignInPage() {
  const inEmailRef = useRef<HTMLInputElement>(null);
  const inPasswordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  async function onBtSignin(e: React.FormEvent) {
    e.preventDefault();
    const email = inEmailRef.current?.value ?? "";
    const password = inPasswordRef.current?.value ?? "";

    if (!email || !password) {
      alert("Form wajib diisi");
      return;
    }

    try {
      setLoading(true);
      // Endpoint login Backendless yang benar
      const response = await axios.post(
        "https://ruggedlaugh-us.backendless.app/api/users/login",
        {
          login: email,
          password,
        }
      );
      alert("Signin berhasil!");
      // Reset form jika perlu
      if (inEmailRef.current) inEmailRef.current.value = "";
      if (inPasswordRef.current) inPasswordRef.current.value = "";
      // TODO: handle token/session di sini
    } catch (error: any) {
      alert(error?.response?.data?.message || "Signin gagal");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-6 min-h-screen justify-center items-center bg-cover bg-center"
      )}
      style={{ backgroundImage: "url('/slide-health.webp')" }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-50 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <Card className="overflow-hidden">
          <CardContent className="w-96 flex flex-col justify-center h-full">
            <form
              className="p-6 md:p-8 flex flex-col gap-6"
              onSubmit={onBtSignin}
            >
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Sign In to your Maximus account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  ref={inEmailRef}
                  disabled={loading}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Masukkan Password"
                  required
                  ref={inPasswordRef}
                  disabled={loading}
                />
              </div>
              <Button
                type="submit"
                className="w-full font-bold text-white bg-black hover:bg-blue-500 cursor-pointer"
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </Button>

              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="font-bold text-blue-500">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
