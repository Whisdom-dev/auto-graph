import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "./Footer";

const faqs = [
  {
    question: "How do I place an order on Autograph?",
    answer:
      "Browse our collections, add your favorite items to the cart, and proceed to checkout. Follow the prompts to enter your shipping and payment details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit/debit cards, PayPal, and secure online payment options. All transactions are encrypted for your safety.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email. You can also view your order status in your account dashboard.",
  },
  {
    question: "What is your return and exchange policy?",
    answer:
      "We offer hassle-free returns and exchanges within 14 days of delivery. Please visit our Returns page or contact support for assistance.",
  },
  {
    question: "How do I contact Autograph support?",
    answer:
      "You can reach our support team at support@autograph.com or by phone at +234 903 123-4567. We're available Mon–Fri, 9AM–6PM (WAT).",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Help Center
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Need assistance? Our Autograph team is here to help you with your shopping experience.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid gap-6 sm:grid-cols-2 mb-20">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h2>
              <p className="text-gray-600 mb-4">Get in touch with our customer care team:</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@autograph.com" className="text-red-600 hover:underline">
                    support@autograph.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> +234 903 123-4567
                </li>
                <li>
                  <strong>Hours:</strong> Mon–Fri, 9AM–6PM (WAT)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h2>
              <p className="text-gray-600 mb-4">Talk to our support team in real time for quick answers.</p>
              <button className="bg-red-600 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded transition">
                Start Live Chat
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-5 transition-shadow hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <span className="text-gray-500">
                      {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4 text-gray-600 text-sm sm:text-base"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
