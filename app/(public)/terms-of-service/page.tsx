import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Shimul Hossain",
  description:
    "Terms of Service for Tech Dev Shimul website and Google Sign-In usage.",
};

const lastUpdated = "August 14, 2026";

export default function TermsOfServicePage() {
  return (
    <main className="relative pt-32 pb-stack-lg">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-12%] left-[-8%] w-125 h-125 rounded-full bg-primary/10 blur-[120px]"></div>
        <div className="absolute bottom-[-15%] right-[-8%] w-100 h-100 rounded-full bg-secondary/10 blur-[100px]"></div>
      </div>

      <article className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <header className="mb-stack-lg text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-surface-container-low mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
              Legal
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">
            Terms of Service
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            These Terms of Service govern your use of Tech Dev Shimul,
            including account access via Google Sign-In.
          </p>
          <p className="mt-4 font-label-md text-label-md text-outline">
            Last updated: {lastUpdated}
          </p>
        </header>

        <section className="space-y-6">
          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              By accessing or using this website, you agree to be bound by these
              Terms of Service and all applicable laws. If you do not agree,
              please do not use the service.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              2. Eligibility and Accounts
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              You are responsible for maintaining the security of your account
              and for activity performed through your account.
            </p>
            <ul className="list-disc pl-6 space-y-2 font-body-md text-body-md text-on-surface-variant">
              <li>You must provide accurate account information.</li>
              <li>You must not impersonate another person or entity.</li>
              <li>You may use Google Sign-In to authenticate your access.</li>
            </ul>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              3. Permitted Use
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              You agree to use the service only for lawful purposes and in a way
              that does not harm the platform, other users, or third parties.
            </p>
            <ul className="list-disc pl-6 space-y-2 font-body-md text-body-md text-on-surface-variant">
              <li>No unauthorized access attempts or abuse of infrastructure.</li>
              <li>No malicious code, spam, fraud, or deceptive behavior.</li>
              <li>No violation of applicable privacy or intellectual property laws.</li>
            </ul>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              4. Google Sign-In Terms
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              By using Google Sign-In, you also agree to Google&apos;s applicable
              terms and policies. Access permissions can be revoked from your
              Google account security settings at any time.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              5. Intellectual Property
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Unless otherwise stated, all content, branding, design elements,
              and code on this site are owned by Tech Dev Shimul or licensed for
              use. You may not copy, distribute, or republish site content
              without permission.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              6. Third-Party Links and Services
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              This website may include links to third-party services. We are not
              responsible for third-party content, practices, or terms.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              The service is provided on an &quot;as is&quot; and
              &quot;as available&quot; basis,
              without warranties of any kind, express or implied, to the fullest
              extent permitted by law.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              8. Limitation of Liability
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              To the maximum extent permitted by law, Tech Dev Shimul will not
              be liable for indirect, incidental, special, consequential, or
              punitive damages arising from your use of the service.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              9. Termination
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We reserve the right to suspend or terminate access if these terms
              are violated or misuse is detected.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              10. Changes to Terms
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We may update these Terms of Service from time to time. Continued
              use of the service after updates means you accept the revised
              terms.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              11. Contact
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-3">
              For questions about these terms, contact
              <a
                href="mailto:info@techdevshimul.com"
                className="ml-1 text-primary hover:text-secondary transition-colors"
              >
                info@techdevshimul.com
              </a>
              .
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Please also review our
              <Link
                href="/privacy-policy"
                className="ml-1 text-primary hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
