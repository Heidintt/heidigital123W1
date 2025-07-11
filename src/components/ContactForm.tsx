
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const contactData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      console.log("Sending contact form data:", contactData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: contactData,
      });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      console.log("Email sent successfully:", data);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible. Please check your email for confirmation.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error sending contact form:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly at contact@heidigital.info",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="How can we help you?"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          rows={5}
          required
          disabled={isSubmitting}
          className="resize-none"
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
