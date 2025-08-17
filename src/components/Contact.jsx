import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socials } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Gmail Popup state + ref
  const [showGmailBox, setShowGmailBox] = useState(false);
  const emailAddress = "espressoelysium@gmail.com";
  const gmailBoxRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    const onDown = (e) => {
      if (gmailBoxRef.current && !gmailBoxRef.current.contains(e.target)) {
        setShowGmailBox(false);
      }
    };
    if (showGmailBox) document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [showGmailBox]);

  // Copy email to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

  emailjs.send(
  import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  {
    from_name: form.name,
    from_email: form.email,
    to_name: "JavaScript Mastery",
    to_email: "sujata@jsmastery.pro",
    reply_to: form.email,   // 👈 this lets you reply directly
    message: form.message,
  },
  import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
)

      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative w-full xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
                required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
                required
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      {/* Floating Social Icons + Gmail Popup */}
      <div className="fixed bottom-5 right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 z-[60] flex flex-col gap-4">
        {socials.map((social, index) => {
          const isGmail = social.name === "Gmail";
          return (
            <div key={index} className="relative">
              {isGmail ? (
                <button
                  type="button"
                  onClick={() => setShowGmailBox((s) => !s)}
                  className="transition-transform duration-300 hover:scale-110"
                  aria-label="Show email"
                >
                  <img
                    src={social.img}
                    alt="Gmail"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain animate-bounce rounded-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                </button>
              ) : (
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={social.img}
                    alt={social.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain animate-bounce"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                </a>
              )}

              {/* 📩 Popup next to Gmail icon */}
              {isGmail && showGmailBox && (
                <motion.div
                  ref={gmailBoxRef}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-1 right-full mr-3 w-64 bg-black-200/90 backdrop-blur rounded-xl shadow-lg p-4"
                >
                  <div className="text-xs text-secondary mb-2">Email</div>
                  <div className="flex items-center gap-2">
                    <input
                      readOnly
                      value={emailAddress}
                      className="flex-1 bg-transparent text-white border border-white/10 rounded-md px-2 py-1 text-sm outline-none"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="text-xs bg-primary text-white px-3 py-1 rounded-md"
                    >
                      Copy
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
