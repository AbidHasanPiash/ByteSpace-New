import { cn } from "@/lib/cn";

type OrnamentProps = {
  /** 3D render in /public/images/ornaments. */
  src: string;
  /** Tint blended over the render (Figma: hard-light fill masked to the shape). */
  tint: "lime" | "white";
  flip?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const tints = { lime: "#d4fb20", white: "#f5f5f6" };

/** Decorative 3D shape (coil, cone, torus...). Purely presentational. */
export function Ornament({ src, tint, flip, className, style }: OrnamentProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute aspect-square select-none", flip && "-scale-x-100", className)}
      style={style}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="absolute inset-0 size-full object-cover" loading="lazy" />
      <span
        className="absolute inset-0 mix-blend-hard-light"
        style={{
          backgroundColor: tints[tint],
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />
    </div>
  );
}
