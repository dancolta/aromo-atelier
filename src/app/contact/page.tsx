"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n/context";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useI18n();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[9px] tracking-[0.28em] uppercase text-warm-stone font-medium mb-3">
            {t.contact.label}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-wide text-deep-black mb-4">
            {t.contact.heading}
          </h1>
          <p className="text-[14px] text-warm-stone font-light">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact info + Map */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-warm-stone font-medium mb-2">
                {t.contact.address_label}
              </p>
              <p className="text-[14px] text-deep-black font-light">
                {t.contact.address}
              </p>
              <p className="text-[12px] text-amber-gold/70 italic mt-1.5">
                {t.contact.appointment}
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-warm-stone font-medium mb-2">
                {t.contact.email_label}
              </p>
              <a
                href={`mailto:${t.contact.email}`}
                className="text-[14px] text-deep-black font-light hover:text-amber-gold transition-colors"
              >
                {t.contact.email}
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-warm-stone font-medium mb-2">
                {t.contact.phone_label}
              </p>
              <p className="text-[14px] text-deep-black font-light">
                {t.contact.phone}
              </p>
            </div>

            {/* Google Maps */}
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Str.+Alexei+%C8%98ciusev+64,+Chi%C8%99in%C4%83u,+Moldova&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.8) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aromo Atelier — Str. Alexei Șciusev 64, Chișinău"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="py-16 text-center">
                <p className="font-serif text-2xl font-normal text-deep-black mb-3">
                  {t.contact.success_title}
                </p>
                <p className="text-[14px] text-warm-stone font-light">
                  {t.contact.success_text}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[10px] tracking-[0.15em] uppercase text-warm-stone font-medium">
                    {t.contact.form_name}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder={t.contact.form_name_placeholder}
                    className="mt-2 bg-transparent border-dark-oud/15 focus:border-amber-gold focus:ring-amber-gold/20 text-[14px] font-light placeholder:text-warm-stone/40"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[10px] tracking-[0.15em] uppercase text-warm-stone font-medium">
                    {t.contact.form_email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder={t.contact.form_email_placeholder}
                    className="mt-2 bg-transparent border-dark-oud/15 focus:border-amber-gold focus:ring-amber-gold/20 text-[14px] font-light placeholder:text-warm-stone/40"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-[10px] tracking-[0.15em] uppercase text-warm-stone font-medium">
                    {t.contact.form_message}
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    placeholder={t.contact.form_message_placeholder}
                    className="mt-2 bg-transparent border-dark-oud/15 focus:border-amber-gold focus:ring-amber-gold/20 text-[14px] font-light placeholder:text-warm-stone/40 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-dark-oud text-warm-linen text-[11px] tracking-[0.15em] uppercase hover:bg-amber-gold transition-colors duration-300"
                >
                  {t.contact.form_submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
