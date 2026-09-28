"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { AuthHeading } from "@/components/auth/AuthHeading";
import { SocialLogin } from "@/components/auth/SocialLogin";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { isEmail, type FieldErrors } from "@/lib/validation";

type Field = "email" | "password";

export function LoginForm() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<FieldErrors<Field>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: Field) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: FieldErrors<Field> = {};
    if (!isEmail(values.email)) next.email = "Enter a valid email address.";
    if (values.password.length < 8) next.password = "Password must be at least 8 characters.";
    setErrors(next);
    setSubmitted(Object.keys(next).length === 0);
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-10">
        <AuthHeading eyebrow="Sign In" title="Welcome Back" />
        <div className="flex flex-col gap-[23px]">
          <TextField
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            value={values.email}
            onChange={update("email")}
            error={errors.email}
          />
          <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="********"
            value={values.password}
            onChange={update("password")}
            error={errors.password}
          />
          <Button type="submit" className="self-end">
            Sign In
          </Button>
          {submitted && (
            <p role="status" className="text-body-s text-blue-800">
              Signed in successfully (demo).
            </p>
          )}
        </div>
      </form>

      <div className="mt-12 xl:mt-[73px]">
        <SocialLogin />
      </div>

      <p className="mt-12 text-center text-body-l text-[#888888] xl:mt-[73px]">
        New user?{" "}
        <Link href="/signup" className="text-blue-800 hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
