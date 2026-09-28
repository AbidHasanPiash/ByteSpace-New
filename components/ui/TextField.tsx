"use client";

import { useId, useState, type InputHTMLAttributes } from "react";
import { Icon } from "@/components/icons/Icon";
import { cn } from "@/lib/cn";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

/** Labelled input used on the auth forms. Password fields get a show/hide toggle. */
export function TextField({ label, error, type = "text", className, ...props }: TextFieldProps) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-label-s text-gray-950">
        {label}
      </label>
      <div
        className={cn(
          "flex h-[52px] items-center gap-2 rounded-3xl border bg-white px-6 transition-colors focus-within:border-blue-800",
          error ? "border-red-500" : "border-gray-200",
        )}
      >
        <input
          id={id}
          type={isPassword && visible ? "text" : type}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className="w-full min-w-0 bg-transparent text-body-l text-gray-950 outline-none placeholder:text-gray-400"
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide password" : "Show password"}
            className="shrink-0 text-gray-400 transition-colors hover:text-gray-700"
          >
            <Icon name={visible ? "visibilityOff" : "visibility"} size={20} />
          </button>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="text-body-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
