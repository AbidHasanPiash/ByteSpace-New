"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { AuthHeading } from "@/components/auth/AuthHeading";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { isEmail, type FieldErrors } from "@/lib/validation";

type Field = "name" | "email" | "password";

export function SignupForm() {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<FieldErrors<Field>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: Field) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: FieldErrors<Field> = {};
    if (values.name.trim().length < 2) next.name = "Enter your full name.";
    if (!isEmail(values.email)) next.email = "Enter a valid email address.";
    if (values.password.length < 8) next.password = "Password must be at least 8 characters.";
    setErrors(next);
    setSubmitted(Object.keys(next).length === 0);
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-10">
        <AuthHeading eyebrow="Create an Account" title="Welcome to ByteSpace" />
        <div className="flex flex-col gap-6">
          <TextField
            label="Full Name"
            autoComplete="name"
            placeholder="Jamie Davis"
            value={values.name}
            onChange={update("name")}
            error={errors.name}
          />
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
            autoComplete="new-password"
            placeholder="********"
            value={values.password}
            onChange={update("password")}
            error={errors.password}
          />
          <Button type="submit" className="self-end">
            Continue
          </Button>
          {submitted && (
            <p role="status" className="text-body-s text-blue-800">
              Account created successfully (demo).
            </p>
          )}
        </div>
      </form>

      <p className="mt-10 text-center text-body-l text-gray-700 xl:mt-[122px]">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-blue-800 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
