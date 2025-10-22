import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";
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
        email: formData.email,
        message: formData.message,
        ...(formData.subject && { subject: formData.subject })
      };

      const response = await axios.post(
        `${apiUrl}/api/v1/contact-form/contact`,
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
        error?.response?.data?.error ||
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
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      >
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300">
                  <div className="p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:gitere.dev@gmail.com"
                        className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 text-sm break-all"
                      >
                        gitere.dev@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300">
                  <div className="p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+254714584667"
                        className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 text-sm"
                      >
                        +254714584667
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-2"
              >
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-300">
                  <CardHeader>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      Send me a message
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      I'll get back to you as soon as possible
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                          >
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full border-slate-300 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-emerald-500"
                            disabled={isLoading}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                          >
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full border-slate-300 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-emerald-500"
                            disabled={isLoading}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full border-slate-300 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-emerald-500"
                          disabled={isLoading}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full border-slate-300 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                          disabled={isLoading}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full sm:w-auto gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 px-8"
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending..." : "Send Message"}
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
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