import { useApp } from '../context/AppContext';

function Contact() {
  const { contactRef } = useApp();
  return (
    <div
      id="contact"
      ref={contactRef}
      className=" gap mt-16 flex w-full flex-col items-start justify-center gap-6"
    >
      <div className="w-full text-xl font-semibold uppercase tracking-wide text-primary-lm dark:text-primary-dm">
        Contact
      </div>
      <div className=" text-xl font-semibold tracking-wider ">
        Don't be shy! Hit me up! 👇
      </div>
      <div className="flex items-center justify-evenly gap-5">
        <div>Email: Kai.balsamo.abat@gmail.com</div>
        <div>Linkedin: Kai.balsamo.abat@gmail.com</div>
      </div>
    </div>
  );
}

export default Contact;
