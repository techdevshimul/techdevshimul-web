import ContactForm from "../contact/ContactForm";

export default function ContactSection() {
  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop relative bg-surface"
      id="contact"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-10">
          <header className="space-y-4">
            <h2 className="font-label-md text-label-md text-primary uppercase">
              Contact_Interface
            </h2>
            <h3 className="font-headline-lg text-headline-lg text-white">
              Let&apos;s build something visionary.
            </h3>
          </header>
          <p className="font-body-lg text-body-lg text-outline leading-relaxed">
            Currently looking for new opportunities and collaborations. Whether
            you have a question or just want to say hi, I&apos;ll try my best to
            get back to you!
          </p>
          <address className="space-y-6 pt-6 not-italic">
            <div className="flex items-center gap-6 p-4 glass-card rounded-2xl border-white/5 bg-surface-container-low">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <div>
                <p className="font-label-sm text-[10px] text-outline uppercase">
                  Email_Channel
                </p>
                <p className="font-body-md text-body-md text-white">
                  info@techdevshimul.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-4 glass-card rounded-2xl border-white/5 bg-surface-container-low">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">
                  location_on
                </span>
              </div>
              <div>
                <p className="font-label-sm text-[10px] text-outline uppercase">
                  Geo_Location
                </p>
                <p className="font-body-md text-body-md text-white">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </address>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
