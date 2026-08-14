import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Shimul Hossain",
  description:
    "Privacy Policy for Tech Dev Shimul website and Google Sign-In integration.",
};

const lastUpdated = "August 14, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative pt-32 pb-stack-lg">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-12%] left-[-8%] w-125 h-125 rounded-full bg-primary/10 blur-[120px]"></div>
        <div className="absolute bottom-[-15%] right-[-8%] w-100 h-100 rounded-full bg-secondary/10 blur-[100px]"></div>
      </div>

      <article className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <header className="mb-stack-lg text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-surface-container-low mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
              Legal
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">
            Privacy Policy
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            This Privacy Policy explains how Tech Dev Shimul collects, uses, and
            protects your information when you use this website and authenticate
            using Google Sign-In.
          </p>
          <p className="mt-4 font-label-md text-label-md text-outline">
            Last updated: {lastUpdated}
          </p>
        </header>

        <section className="space-y-6">
          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              1. Information We Collect
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              When you use Google Sign-In, we may collect limited account
              information provided by Google, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-body-md text-body-md text-on-surface-variant">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your Google profile image (if available)</li>
              <li>Your Google account unique identifier</li>
            </ul>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 font-body-md text-body-md text-on-surface-variant">
              <li>To authenticate your account securely</li>
              <li>To provide personalized access to site features</li>
              <li>To communicate account-related updates when required</li>
              <li>To improve service quality, reliability, and security</li>
            </ul>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              3. Google User Data and OAuth Compliance
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Google user data obtained through OAuth is used only for
              authentication and core account functionality. We do not sell
              Google user data and we do not use it for advertising profiling.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We do not request access to your Google password. You can revoke
              access at any time from your Google account permissions page.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              4. Data Sharing
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We do not sell, rent, or trade your personal data. Information may
              be shared only with trusted service providers strictly for
              operating the service or when required by law.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              5. Data Retention and Deletion
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              We retain personal data only as long as needed to provide the
              service, comply with legal obligations, and resolve disputes.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              You may request deletion of your account data by contacting us at
              <a
                href="mailto:info@techdevshimul.com"
                className="ml-1 text-primary hover:text-secondary transition-colors"
              >
                info@techdevshimul.com
              </a>
              .
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              6. Security
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We implement reasonable technical and organizational measures to
              protect your data. No internet-based service can be fully secure,
              but we continuously work to safeguard user information.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              7. Your Rights
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Depending on your location, you may have rights to access, correct,
              delete, or limit processing of your personal data.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              To submit a request, contact
              <a
                href="mailto:info@techdevshimul.com"
                className="ml-1 text-primary hover:text-secondary transition-colors"
              >
                info@techdevshimul.com
              </a>
              .
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              8. Changes to This Policy
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We may update this Privacy Policy from time to time. Material
              changes will be reflected on this page with an updated &quot;Last
              updated&quot; date.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-4">
              9. Contact
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-3">
              For privacy-related inquiries, email us at
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
                href="/terms-of-service"
                className="ml-1 text-primary hover:text-secondary transition-colors"
              >
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
