export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export type FieldErrors<T extends string> = Partial<Record<T, string>>;
