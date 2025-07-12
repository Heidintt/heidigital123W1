
import emailjs from '@emailjs/browser';

// EmailJS configuration - you'll need to update these with your actual values
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_m4172rp', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_ed6ovx9', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'IRgU-g7wqB97Jx4W7', // Replace with your EmailJS public key
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send contact email using EmailJS
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    console.log('Sending email via EmailJS:', formData);
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'contact@heidigital.info',
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('EmailJS response:', response);
    return { success: true, data: response };
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};
