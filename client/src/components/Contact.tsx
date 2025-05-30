import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone } from "lucide-react";
import ContactModal from "./ContactModal"; // Adjust path as needed
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ModalState {
  isOpen: boolean;
  isSuccess: boolean;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    isSuccess: false,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,  // Changed from userEmail to email to match backend
        message: formData.message,
        ...(formData.subject && { subject: formData.subject }) // Include subject only if it exists
      };

      // Single API call to the new endpoint
      const response = await axios.post(
        `${apiUrl}/api/v1/contact-form/contact`, // Updated endpoint
        payload
      );

      const isSuccess = response.data?.success;
      const message = response.data?.message ||
                      (isSuccess
                        ? "Message sent successfully!"
                        : "Something went wrong.");

      setModal({
        isOpen: true,
        isSuccess,
        message,
        ...(response.data?.submissionId && { submissionId: response.data.submissionId }),
        ...(response.data?.acknowledgmentId && { acknowledgmentId: response.data.acknowledgmentId })
      });

      if (isSuccess) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      const fallbackMessage =
        error?.response?.data?.error || // Changed to match backend error response
        error?.response?.data?.message ||
        "Network error. Please check your connection and try again.";

      setModal({
        isOpen: true,
        isSuccess: false,
        message: fallbackMessage,
        ...(error?.response?.data?.details && { details: error.response.data.details })
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <>
      <section id="contact">
        <div className="container mx-auto p-[0.5rem] md:p-[2rem]">
          <h2 className="section-title">Get In Touch</h2>

          <div className="max-w-3xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/15">
                  <div className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:gitere.dev@gmail.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base break-all"
                      >
                        gitere.dev@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/15">
                  <div className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+254714584667"
                        className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200 text-sm sm:text-base"
                      >
                        +254714584667
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="md:col-span-2 glass">
                <CardHeader>
                  <h3 className="text-xl font-bold">Send me a message</h3>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm mb-1">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          disabled={isLoading}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm mb-1">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        disabled={isLoading}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full sm:w-auto gap-2"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={modal.isOpen}
        onClose={closeModal}
        isSuccess={modal.isSuccess}
        message={modal.message}
      />
    </>
  );
};

export default Contact;
