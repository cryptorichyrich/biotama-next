"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 bg-primary text-white scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind? Let's talk about how we can build it."
          light
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-accent mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-zinc-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-accent mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Phone</p>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-zinc-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-accent mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-zinc-300">{profile.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form (static UI) */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-300 mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200 cursor-text"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200 cursor-text"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-300 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200 resize-none cursor-text"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
