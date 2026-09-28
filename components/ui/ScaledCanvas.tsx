import { cn } from "@/lib/cn";

type ScaledCanvasProps = {
  /** Design size of the composition in px. */
  width: number;
  height: number;
  /** Tailwind classes that set `--s` (the scale) per breakpoint, e.g. "[--s:.55] sm:[--s:1]". */
  scaleClassName: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Renders an absolutely-positioned design composition at its exact Figma size
 * and scales it down uniformly on smaller screens.
 */
export function ScaledCanvas({ width, height, scaleClassName, className, children }: ScaledCanvasProps) {
  return (
    <div
      className={cn("relative shrink-0", scaleClassName, className)}
      style={{ width: `calc(${width}px * var(--s))`, height: `calc(${height}px * var(--s))` }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{ width, height, transform: "scale(var(--s))" }}
      >
        {children}
      </div>
    </div>
  );
}
