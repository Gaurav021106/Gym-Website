"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  Flame,
  User,
  Salad,
  Star,
  Clock,
  Users,
  Trophy,
  MapPin,
} from "lucide-react";

export default function Home() {
  // Animation Variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const services = [
    {
      title: "Strength Training",
      desc: "Build lean muscle and maximize your strength with expert, form-focused training programs.",
      icon: <Dumbbell className="w-10 h-10" />,
    },
    {
      title: "Fat Loss & Conditioning",
      desc: "Burn fat efficiently with our high-intensity X-Training and customized cardio schedules.",
      icon: <Flame className="w-10 h-10" />,
    },
    {
      title: "Personal Training",
      desc: "1-on-1 coaching tailored specifically to your body type, limitations, and fitness goals.",
      icon: <User className="w-10 h-10" />,
    },
    {
      title: "Nutrition & Online Coaching",
      desc: "Certified nutritionist-backed diet plans and remote workout schedules to keep you on track anywhere.",
      icon: <Salad className="w-10 h-10" />,
    },
  ];

  const reviews = [
    {
      name: "Siddharth N.",
      branch: "Doiwala Branch",
      quote:
        "The best gym environment I've experienced in Uttarakhand. The trainers are incredibly knowledgeable, and the diet plans actually work. Highly recommend the late-night sessions!",
      rating: 5,
    },
    {
      name: "Priya R.",
      branch: "Bhaniawala Branch",
      quote:
        "Eddy completely changed my lifestyle. The personalized coaching and constant motivation helped me lose 12kg safely. It's more than a gym; it's a community.",
      rating: 5,
    },
    {
      name: "Amit S.",
      branch: "Rishikesh Branch",
      quote:
        "State-of-the-art equipment and a fantastic CrossFit setup. The trainers pay attention to everyone, whether you are a beginner or a pro bodybuilder.",
      rating: 5,
    },
  ];

  const locations = [
    { name: "Rishikesh (Main)", address: "Dobhal Complex, Amitgram, Gumaniwala" },
    { name: "Doiwala", address: "Kalpatru Art Street, Dudhli Rd" },
    { name: "Bhaniawala", address: "Main Market, Bhaniawala, Dehradun" },
    { name: "Listrabad", address: "Listrabad, Dehradun" },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        {/* Background Image with subtle zoom */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <Image
            src="/hero.png"
            alt="Intense workout at Eddy Fitness Club"
            fill
            priority
            className="object-cover opacity-40"
          />
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 blur-[150px] rounded-full z-0" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="uppercase tracking-widest text-red-500 font-semibold mb-4 text-sm md:text-base"
            >
              Fit, Fitter, Fittest!
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            >
              Unlock Your <br />
              <span className="text-red-500">True Potential</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed"
            >
              Join Eddy Fitness Club for certified nutrition planning, intense X-training, and expert coaching across Dehradun and Rishikesh. 
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center gap-2 transition-all shadow-lg shadow-red-600/20 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#services"
                className="px-8 py-3.5 rounded-full border border-zinc-700 hover:border-red-500 hover:bg-zinc-900 text-white font-semibold transition-all"
              >
                Explore Programs
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-zinc-800"
            >
              <Image
                src="/rope.png"
                alt="Eddy Fitness Coach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 right-6 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 p-6 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-black text-red-500 mb-1">4.9/5</h3>
                <p className="text-sm text-zinc-400 font-medium">Top Rated on JustDial</p>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                More Than Just A Gym. <br />
                <span className="text-red-500">It's A Lifestyle.</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                Led by certified nutritionists and fitness experts, Eddy Fitness Club is dedicated to delivering science-backed results. Whether you are aiming for severe fat loss, bodybuilding, or general wellness, we provide the environment, equipment, and expertise you need to succeed.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Certified Nutritionist Diet Plans",
                  "High-Intensity X-Training",
                  "Premium State-of-the-Art Equipment",
                  "Online Remote Coaching Available",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-red-500 w-5 h-5 shrink-0" />
                    <span className="text-zinc-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="text-red-500 font-semibold flex items-center gap-2 hover:text-red-400 transition-colors group w-fit"
              >
                Meet Coach Eddy
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Training Services</h2>
            <p className="text-zinc-400">
              From late-night leg sessions to personalized nutrition, we offer comprehensive programs to fit your schedule and goals.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((srv, idx) => (
              <motion.article
                key={idx}
                variants={itemVariants}
                className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl hover:border-red-500/50 transition-colors group"
              >
                <div className="text-red-500 mb-6 bg-red-500/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3">{srv.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{srv.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Members, <span className="text-red-500">Real Results</span></h2>
            <p className="text-zinc-400">Don't just take our word for it. See what our community has to say.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                <p className="text-zinc-300 italic mb-8 flex-1 text-sm leading-relaxed">
                  "{review.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-zinc-100">{review.name}</h4>
                  <p className="text-xs text-red-500 mt-1">{review.branch}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- LOCATIONS & CTA SECTION --- */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-zinc-950 rounded-3xl p-8 md:p-12 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Nearest <br/> Eddy Fitness Club</h2>
              <p className="text-zinc-400 mb-8 max-w-md">
                We are rapidly growing across Uttarakhand to bring premium fitness closer to you. Drop by for a tour of our facilities.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {locations.map((loc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <MapPin className="text-red-500 w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-zinc-200 text-sm">{loc.name}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 font-bold flex items-center gap-2 transition-all w-fit"
              >
                View All Locations
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="lg:w-5/12 grid grid-cols-2 gap-4 w-full">
              {[
                { num: "4+", label: "Locations", icon: <MapPin /> },
                { num: "3K+", label: "Community", icon: <Users /> },
                { num: "500+", label: "Results", icon: <Trophy /> },
                { num: "24/7", label: "Dedication", icon: <Clock /> },
              ].map((stat, idx) => (
                <div key={idx} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
                  <div className="text-red-500 flex justify-center mb-3 opacity-80">{stat.icon}</div>
                  <h4 className="text-2xl md:text-3xl font-black text-white mb-1">{stat.num}</h4>
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}