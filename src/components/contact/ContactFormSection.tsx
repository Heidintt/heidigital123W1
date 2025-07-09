
import React from 'react';
import ContactForm from '@/components/ContactForm';

const ContactFormSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-5">Send Us a Message</h3>
      <ContactForm />
    </div>
  );
};

export default ContactFormSection;
