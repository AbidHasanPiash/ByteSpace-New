import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { footerLinks, legalLinks } from "@/data/home";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-[1232px] flex-col gap-16 px-4 pt-14 pb-8 sm:px-6 lg:h-[524px] lg:gap-[130px] lg:pt-[70px] lg:pb-0 xl:px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[92px]">
          <div className="flex flex-col gap-8 lg:gap-[45px]">
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

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:flex lg:w-[580px] lg:gap-10">
            {footerLinks.map((column, i) => (
              <ul key={i} className="flex flex-col gap-4 lg:w-[167px] lg:pt-12">
                {column.map((label) => (
                  <li key={label}>
                    <Link href="#" className="text-body-s whitespace-nowrap text-gray-950 transition-colors hover:text-blue-800">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-200 pt-4 text-body-xs text-gray-950 sm:flex-row sm:justify-between lg:h-[42px] lg:pt-0 lg:items-end">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((label) => (
              <li key={label}>
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
