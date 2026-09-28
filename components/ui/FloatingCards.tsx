import { AvatarStack } from "@/components/ui/AvatarStack";
import { Icon } from "@/components/icons/Icon";
import { studentAvatars } from "@/data/home";
import { cn } from "@/lib/cn";

type CardProps = { className?: string };

const glass = "rounded-2xl bg-white p-4 backdrop-blur-[10px]";

function ProgressBar({ value, track = "bg-[#f6f6f6]" }: { value: number; track?: string }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-[200px] overflow-hidden rounded-3xl", track)}
    >
      {/* 112px of 200px in the design */}
      <div className="h-full w-[56%] rounded-3xl bg-lime-400" />
    </div>
  );
}

/** "Learning Progress 55%" card. */
export function ProgressCard({ className }: CardProps) {
  return (
    <div className={cn(glass, "flex flex-col gap-2", className)}>
      <p className="text-label-s text-gray-950">Learning Progress</p>
      <p className="w-[200px] font-poppins text-5xl leading-[1.2] font-semibold tracking-[-0.48px] text-gray-950">
        55%
      </p>
      <ProgressBar value={55} />
    </div>
  );
}

/** "Happy Students 4.5 (240) ★" card with avatar stack. The lime tone is used on the auth pages. */
type HappyStudentsCardProps = CardProps & {
  /** "lime" background is used on the auth pages. */
  tone?: "white" | "lime";
  /** "feature" = Growth section / auth pages: 24px title line and a 10px bold rating. */
  variant?: "hero" | "feature";
};

export function HappyStudentsCard({ tone = "white", variant = "hero", className }: HappyStudentsCardProps) {
  const lime = tone === "lime";
  const feature = variant === "feature";
  return (
    <div
      className={cn(
        "flex w-[258px] flex-col justify-center gap-2 rounded-2xl p-4 backdrop-blur-[10px]",
        lime ? "bg-lime-400" : "bg-white",
        className,
      )}
    >
      <div>
        <p className={cn("text-label-m text-gray-950", feature && "leading-6")}>Happy Students</p>
        <div className="flex items-center">
          {feature ? (
            <p className="font-satoshi text-[10px] leading-[1.5] text-gray-400">
              <span className="font-bold text-gray-950">4.5 </span>(240)
            </p>
          ) : (
            <p className="text-body-xs text-gray-400">
              <span className="text-gray-950">4.5 </span>(240)
            </p>
          )}
          <Icon name="star" size={16} className={lime ? "text-blue-800" : "text-lime-400"} />
        </div>
      </div>
      <AvatarStack
        avatars={studentAvatars}
        count="2K+"
        size="md"
        countClassName={lime ? "bg-gray-950 text-gray-50" : undefined}
      />
    </div>
  );
}

/** "UI/UX Design · 200 Courses · 1000+ Students" card. */
export function TopicStatCard({ className }: CardProps) {
  return (
    <div className={cn(glass, "flex flex-col justify-center", className)}>
      <p className="text-label-m text-gray-950">UI/UX Design</p>
      <p className="flex items-start gap-2 whitespace-nowrap text-gray-400">
        <span className="text-body-xs">200 Courses</span>
        <span className="font-satoshi text-[10px] leading-[1.5]">•</span>
        <span className="text-body-xs">1000+ Students</span>
      </p>
    </div>
  );
}

type RevenueCardProps = CardProps & {
  title: string;
  period: string;
  amount: string;
  /** Wide variant shows the progress bar and puts the badge next to the amount. */
  wide?: boolean;
};

/** Blue revenue cards in the "Create & Manage Courses" section. */
export function RevenueCard({ title, period, amount, wide, className }: RevenueCardProps) {
  const badge = (
    <span className="rounded-3xl bg-lime-500 px-2 py-0.5 font-satoshi text-[10px] leading-5 font-medium text-gray-950">
      +12$
    </span>
  );
  return (
    <div className={cn("flex flex-col items-start gap-2 rounded-2xl bg-blue-800 p-4 backdrop-blur-[10px]", className)}>
      <div className="whitespace-nowrap text-gray-50">
        <p className="text-label-m">{title}</p>
        <p className="font-satoshi text-[10px] leading-[1.2]">{period}</p>
      </div>
      {wide ? (
        <>
          <div className="flex w-[200px] items-center justify-between">
            <p className="font-poppins text-2xl leading-8 font-semibold tracking-[-0.24px] text-gray-50">{amount}</p>
            {badge}
          </div>
          <ProgressBar value={55} track="bg-white" />
        </>
      ) : (
        <>
          <p className="font-poppins text-2xl leading-8 font-semibold tracking-[-0.24px] whitespace-nowrap text-gray-50">
            {amount}
          </p>
          {badge}
        </>
      )}
    </div>
  );
}
