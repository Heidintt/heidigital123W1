
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
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
      console.log("Sending homepage contact form data:", contactData);
      
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
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Start Your
              <br />
              <span className="text-blue-600">Digital Journey</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to revolutionize your marketing? Our experts are standing by to craft your personalized digital transformation strategy.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-blue-600">contact@heidigital.info</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your name" 
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="your@email.com" 
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="How can we help you?" 
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  placeholder="Your message here..." 
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                ></textarea>
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
