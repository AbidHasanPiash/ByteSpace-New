import Link from "next/link";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { footerLinks, legalLinks } from "@/data/home";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t border-gray-200 bg-white", className)}>
      <div className="mx-auto flex max-w-[1232px] flex-col gap-16 px-4 pt-14 pb-8 sm:px-6 xl:h-[524px] xl:gap-[130px] xl:pt-[70px] xl:pb-0 xl:px-4">
        <div className="flex flex-col gap-12 xl:flex-row xl:gap-[92px]">
          <div className="flex flex-col gap-8 xl:gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo />
              <p className="max-w-[528px] text-body-s text-gray-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <NewsletterForm />
              <p className="max-w-[504px] text-body-xs text-gray-950">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 xl:flex xl:w-[580px] xl:gap-10">
            {footerLinks.map((column, i) => (
              <ul key={i} className="flex flex-col gap-4 xl:w-[167px] xl:pt-12">
                {column.map((label) => (
                  <li key={label} className="text-body-s">
                    <Link href="#" className="whitespace-nowrap text-gray-950 transition-colors hover:text-blue-800">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-200 pt-4 text-body-xs text-gray-950 sm:flex-row sm:justify-between xl:h-[42px] xl:pt-0 xl:items-end">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((label) => (
              <li key={label} className="text-body-xs">
                <Link href="#" className="whitespace-nowrap transition-colors hover:text-blue-800">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
