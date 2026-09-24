"use client";

import React, { useState } from "react";
import { BRANCHES_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Star, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    branch: BRANCHES_DATA[0].name,
    goal: "Fat Loss & Conditioning",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*NEW MEMBERSHIP INQUIRY - EDDY FITNESS CLUB*
---------------------------------------
👤 *Name:* ${formData.name.trim()}
📞 *Phone:* ${formData.phone.trim()}
📍 *Selected Branch:* ${formData.branch}
🎯 *Primary Goal:* ${formData.goal}
${formData.notes.trim() ? `📝 *Notes/Questions:* ${formData.notes.trim()}` : ""}
---------------------------------------
_Sent via Eddy Fitness Club Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918410411868?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="text-red-400 border-red-800 uppercase font-extrabold tracking-widest text-[11px] mb-3">
            Get In Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black uppercase text-white">
            Contact Eddy Fitness Club
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-4">
            Fill out the inquiry form below to send your details directly to the owner&apos;s WhatsApp, or reach out to us by phone.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 px-6 py-6"
            >
              <a
                href="https://wa.me/918410411868?text=JOIN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                aria-label="Send message to Eddy Fitness Club on WhatsApp: 8410411868"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Quick WhatsApp: 8410411868</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800 text-white border-neutral-700 font-bold text-xs uppercase tracking-wider rounded-xl px-6 py-6"
            >
              <a 
                href="tel:8410411868" 
                className="inline-flex items-center gap-2"
                aria-label="Call Eddy Fitness Club at 8410411868"
              >
                <Phone className="w-4 h-4 text-red-400" aria-hidden="true" />
                <span>Call Directly</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Direct Owner WhatsApp Booking Form */}
        <div className="max-w-2xl mx-auto mb-20">
          <Card className="bg-neutral-900/60 border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 blur-[90px] rounded-full pointer-events-none" />

            <div className="mb-8">
              <h2 className="text-2xl font-black uppercase text-white tracking-wide flex items-center gap-2.5">
                <MessageCircle className="w-6 h-6 text-red-500" aria-hidden="true" />
                Book Your Trial & Consultation
              </h2>
              <p className="text-sm text-neutral-300 mt-1">
                Select your branch and fitness target. Your details will be formatted and forwarded to the owner&apos;s DM immediately.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label 
                  htmlFor="contact-name" 
                  className="block text-xs uppercase tracking-wider font-bold text-neutral-200 mb-2"
                >
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-name"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Gaurav Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-red-500 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label 
                  htmlFor="contact-phone" 
                  className="block text-xs uppercase tracking-wider font-bold text-neutral-200 mb-2"
                >
                  WhatsApp Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-red-500 transition"
                />
              </div>

              {/* Branch Selector (Accessibility Fixed with ID & htmlFor) */}
              <div>
                <label 
                  htmlFor="contact-branch-select" 
                  className="block text-xs uppercase tracking-wider font-bold text-neutral-200 mb-2"
                >
                  Preferred Branch Location <span className="text-red-400">*</span>
                </label>
                <select
                  id="contact-branch-select"
                  name="branch"
                  aria-label="Preferred Branch Location"
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full px-4 py-3.5 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-red-500 transition cursor-pointer"
                >
                  {BRANCHES_DATA.map((b) => (
                    <option key={b.id} value={b.name} className="bg-neutral-950 text-white">
                      {b.name} ({b.city})
                    </option>
                  ))}
                </select>
              </div>

              {/* Primary Goal Selector (Accessibility Fixed with ID & htmlFor) */}
              <div>
                <label 
                  htmlFor="contact-goal-select" 
                  className="block text-xs uppercase tracking-wider font-bold text-neutral-200 mb-2"
                >
                  Primary Fitness Goal
                </label>
                <select
                  id="contact-goal-select"
                  name="goal"
                  aria-label="Primary Fitness Goal"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-3.5 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-red-500 transition cursor-pointer"
                >
                  <option value="Fat Loss & Conditioning" className="bg-neutral-950 text-white">Fat Loss & Conditioning</option>
                  <option value="Muscle Building & Hypertrophy" className="bg-neutral-950 text-white">Muscle Building & Hypertrophy</option>
                  <option value="1-on-1 Personal Training (PT)" className="bg-neutral-950 text-white">1-on-1 Personal Training (PT)</option>
                  <option value="Diet & Sports Nutrition Plan" className="bg-neutral-950 text-white">Diet & Sports Nutrition Plan</option>
                  <option value="24/7 Access Membership" className="bg-neutral-950 text-white">24/7 Access Membership (Amitgram)</option>
                  <option value="Online Virtual Coaching" className="bg-neutral-950 text-white">Online Virtual Coaching</option>
                </select>
              </div>

              {/* Optional Notes */}
              <div>
                <label 
                  htmlFor="contact-notes" 
                  className="block text-xs uppercase tracking-wider font-bold text-neutral-200 mb-2"
                >
                  Additional Note / Question (Optional)
                </label>
                <textarea
                  id="contact-notes"
                  name="notes"
                  rows={3}
                  placeholder="Ask about timings, workout induction, or trainer availability..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3.5 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-red-500 transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-xs sm:text-sm tracking-wider py-6 rounded-xl shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Send to Owner on WhatsApp</span>
              </Button>

              <p className="text-xs text-neutral-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" aria-hidden="true" />
                Direct line to Coach Eddy (8410411868). No spam guaranteed.
              </p>
            </form>
          </Card>
        </div>

        {/* 5 Branches Direct Inquiries Cards */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white">
            Or Inquire By Branch Directly
          </h2>
          <p className="text-sm text-neutral-300 mt-1">
            Prefer a specific location? Choose any branch card below to initiate a pre-filled WhatsApp chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCHES_DATA.map((branch) => (
            <Card
              key={branch.id}
              className="bg-neutral-900/40 border-neutral-800 rounded-2xl flex flex-col justify-between hover:border-neutral-700 transition"
            >
              <CardHeader className="p-6 pb-2">
                <div className="flex items-center justify-between">
                  <Badge className="bg-red-600/20 text-red-400 hover:bg-red-600/20 border-0 font-bold text-xs uppercase">
                    {branch.city}
                  </Badge>
                  <span className="text-amber-400 font-semibold text-xs inline-flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                    {branch.rating.toFixed(1)} ({branch.reviewsCount})
                  </span>
                </div>
                <CardTitle className="text-xl font-bold uppercase text-white mt-3">{branch.name}</CardTitle>
              </CardHeader>

              <CardContent className="p-6 pt-2">
                <p className="text-sm text-neutral-300 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{branch.address}</span>
                </p>
                <p className="text-xs text-neutral-300 mt-3 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" aria-hidden="true" />
                  <span>{branch.hours}</span>
                </p>
              </CardContent>

              <CardFooter className="p-6 pt-0 border-t border-neutral-800/80">
                <Button
                  asChild
                  variant="link"
                  className="w-full text-center text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 p-0 h-auto mt-4"
                >
                  <a
                    href={`https://wa.me/918410411868?text=Hello,%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(
                      branch.name
                    )}%20branch.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Inquire about ${branch.name} branch on WhatsApp`}
                  >
                    Inquire For {branch.name} →
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}