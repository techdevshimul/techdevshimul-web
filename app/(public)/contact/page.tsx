import ContactForm from "@/components/public/contact/ContactForm";
import ContactHeader from "@/components/public/contact/ContactHeader";
import ContactInfoAndSocial from "@/components/public/contact/ContactInfoAndSocial";
import ContactLocationMap from "@/components/public/contact/ContactLocationMap";

export default function Contact() {
  return (
    <>
      <main className="relative z-10 pt-32 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ContactHeader />
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <ContactForm />
          <ContactInfoAndSocial />
        </div>
      </main>

      <ContactLocationMap />
    </>
  );
}
