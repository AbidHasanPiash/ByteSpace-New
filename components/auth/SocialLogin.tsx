/** "or" divider + social sign-in buttons (icons exported from the design). */
const socials = [
  {
    label: "Continue with Facebook",
    paths: [
      "M36.667 20 C36.667 10.795 29.205 3.333 20 3.333 C10.795 3.333 3.333 10.795 3.333 20 C3.333 28.319 9.428 35.214 17.396 36.464 L17.396 24.818 L13.164 24.818 L13.164 20 L17.396 20 L17.396 16.328 C17.396 12.151 19.884 9.844 23.691 9.844 C25.515 9.844 27.422 10.169 27.422 10.169 L27.422 14.271 L25.32 14.271 C23.25 14.271 22.604 15.555 22.604 16.874 L22.604 20 L27.227 20 L26.488 24.818 L22.604 24.818 L22.604 36.464 C30.572 35.214 36.667 28.319 36.667 20",
    ],
  },
  {
    label: "Continue with Google",
    paths: [
      "M35.958 20.375 C35.958 19.278 35.861 18.236 35.695 17.222 L20 17.222 L20 23.486 L28.986 23.486 C28.583 25.542 27.403 27.278 25.653 28.458 L25.653 32.625 L31.014 32.625 C34.153 29.722 35.958 25.444 35.958 20.375",
      "M20 9.93 C22.458 9.93 24.653 10.778 26.389 12.43 L31.139 7.68 C28.264 4.986 24.5 3.333 20 3.333 C13.486 3.333 7.861 7.083 5.125 12.528 L10.653 16.819 C11.972 12.861 15.653 9.93 20 9.93",
      "M20 36.667 C13.486 36.667 7.861 32.917 5.125 27.472 L10.653 23.18 C11.972 27.139 15.653 30.069 20 30.069 C22.25 30.069 24.153 29.458 25.653 28.458 L31.014 32.625 C28.264 35.167 24.5 36.667 20 36.667 M10.653 16.819 L10.653 12.528 L5.125 12.528 L10.653 16.819",
      "M5.125 23.18 L10.653 23.18 C10.306 22.18 10.125 21.111 10.125 20 C10.125 18.889 10.32 17.819 10.653 16.819 L5.125 12.528 C3.986 14.778 3.333 17.305 3.333 20 C3.333 22.694 3.986 25.222 5.125 27.472 L5.125 23.18 M10.653 23.18 L5.125 23.18 L5.125 27.472 L10.653 23.18",
    ],
  },
];

export function SocialLogin() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-full items-center gap-[11px] sm:w-auto sm:self-start">
        <span className="h-px flex-1 bg-[#d1d1d1] sm:w-[200px] sm:flex-none" />
        <span className="text-body-l text-[#888888]">or</span>
        <span className="h-px flex-1 bg-[#d1d1d1] sm:w-[200px] sm:flex-none" />
      </div>
      <div className="flex gap-[14px]">
        {socials.map((social) => (
          <button
            key={social.label}
            type="button"
            aria-label={social.label}
            className="flex size-[74px] items-center justify-center rounded-3xl border border-[#d1d1d1] bg-white transition-colors hover:bg-gray-50"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
              {social.paths.map((d) => (
                <path key={d} d={d} fill="#000" />
              ))}
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
