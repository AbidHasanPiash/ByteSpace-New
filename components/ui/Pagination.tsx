import { Icon } from "@/components/icons/Icon";
import { cn } from "@/lib/cn";

type PaginationProps = {
  page: number;
  total: number;
  onChange: (page: number) => void;
};

export function Pagination({ page, total, onChange }: PaginationProps) {
  const arrow =
    "flex h-[50px] w-[58px] items-center justify-center rounded-3xl border border-gray-200 bg-white transition-colors hover:border-gray-300 disabled:cursor-not-allowed disabled:hover:border-gray-200";

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-6">
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={cn(arrow, page === 1 ? "text-gray-700" : "text-gray-950")}
      >
        <Icon name="arrowBack" />
      </button>
      <ol className="flex items-center gap-6">
        {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            <button
              type="button"
              aria-label={`Page ${n}`}
              aria-current={n === page ? "page" : undefined}
              onClick={() => onChange(n)}
              className={cn(
                "font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px] transition-colors",
                n === page ? "text-gray-200" : "text-gray-950 hover:text-blue-800",
              )}
            >
              {n}
            </button>
          </li>
        ))}
      </ol>
      <button
        type="button"
        aria-label="Next page"
        disabled={page === total}
        onClick={() => onChange(page + 1)}
        className={cn(arrow, page === total ? "text-gray-700" : "text-gray-950")}
      >
        <Icon name="arrowForward" />
      </button>
    </nav>
  );
}
