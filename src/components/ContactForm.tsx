
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { trackContactForm } = useGoogleAnalytics();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      console.log("Submitting contact form:", data);

      // Call the Supabase Edge Function
      const { data: response, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          subject: data.subject,
          message: data.message,
        },
      });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      console.log("Contact form response:", response);

      // Track successful submission
      trackContactForm('Contact Form');

      // Success state
      setSubmitStatus('success');
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
        icon: <CheckCircle className="h-4 w-4" />,
      });
      
      // Reset form
      reset();
      
    } catch (error: any) {
      console.error("Contact form submission error:", error);
      
      setSubmitStatus('error');
      toast.error("Failed to send message!", {
        description: error.message || "Please try again or contact us directly.",
        duration: 5000,
        icon: <AlertCircle className="h-4 w-4" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name *
            </Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Your full name"
              autoComplete="name"
              className={`transition-colors ${
                errors.name 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-gray-300 focus:border-heidigital-blue focus:ring-heidigital-blue"
              }`}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="your@email.com"
              autoComplete="email"
              className={`transition-colors ${
                errors.email 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-gray-300 focus:border-heidigital-blue focus:ring-heidigital-blue"
              }`}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number (Optional)
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="Your phone number"
              autoComplete="tel"
              className="transition-colors border-gray-300 focus:border-heidigital-blue focus:ring-heidigital-blue"
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
              Subject *
            </Label>
            <Input
              id="subject"
              {...register("subject")}
              placeholder="How can we help you?"
              autoComplete="off"
              className={`transition-colors ${
                errors.subject 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-gray-300 focus:border-heidigital-blue focus:ring-heidigital-blue"
              }`}
              disabled={isSubmitting}
            />
            {errors.subject && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message *
          </Label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Tell us about your project or how we can help..."
            rows={5}
            autoComplete="off"
            className={`resize-none transition-colors ${
              errors.message 
                ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                : "border-gray-300 focus:border-heidigital-blue focus:ring-heidigital-blue"
            }`}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.message.message}
            </p>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-heidigital-blue hover:bg-heidigital-blue/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Message...
            </>
          ) : submitStatus === 'success' ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Message Sent!
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-sm text-green-800">
                Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
