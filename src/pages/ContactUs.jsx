import ContactForm from "../components/ContactForm";
import OurMapSection from "../components/OurMapSection";
import PageCover from "../components/shared/PageCover";

const ContactUs = () => {
  return (
    <div>
      <PageCover title={"Contact Us"}></PageCover>
      <OurMapSection></OurMapSection>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ContactUs;
