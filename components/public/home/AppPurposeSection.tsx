import Link from "next/link";

export default function AppPurposeSection() {
  return (
    <section className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <div className="glass-panel rounded-xl p-8 md:p-10 border border-glass-border">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-surface-container-low mb-4">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
            Verification Info
          </span>
        </div>

        <h2 className="font-headline-md text-headline-md text-on-background mb-4">
          Purpose of this app
        </h2>

        <p className="font-label-md text-label-md text-primary uppercase tracking-wider mb-4">
          Official app name: techdevshimul
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl mb-4">
          This is the official homepage of techdevshimul. The app is a
          portfolio and service platform used to showcase software engineering
          work, publish technical case studies, and let visitors contact Shimul
          Hossain for project collaboration.
        </p>

        <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl mb-6">
          Google Sign-In is requested only for secure authentication and
          account-based interactions on techdevshimul. Google user data is not
          used for unrelated data access, resale, or advertising.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/privacy-policy"
            className="bg-transparent border border-outline-variant hover:border-outline text-on-background px-5 py-2.5 rounded-xl font-label-md text-label-md font-bold transition-all"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="bg-transparent border border-outline-variant hover:border-outline text-on-background px-5 py-2.5 rounded-xl font-label-md text-label-md font-bold transition-all"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </section>
  );
}
