"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Target, 
  HeartPulse, 
  CalendarDays, 
  UserCircle 
} from "lucide-react";

// Note: To use metadata with "use client", you normally have to export it from a separate layout file 
// or a server component that wraps this one. For simplicity in a single file, you can move metadata 
// to `app/(public)/about/layout.tsx` in a real Next.js app.
/*
export const metadata = {
  title: "About Us & Blog | Eddy Fitness Club",
  description: "Learn about Eddy Fitness Club, meet our certified trainers, and read our latest fitness blogs.",
}
*/

export default function AboutPage() {
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

  // Dummy data for the blog. This can later be fetched from your database/API.
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind X-Training",
      excerpt: "Discover why our signature high-intensity X-Training sessions are the most effective way to burn fat and build stamina.",
      date: "Aug 10, 2026",
      readTime: "4 min read",
      author: "Coach Eddy",
      image: "/hero.png",
      category: "Workouts"
    },
    {
      id: 2,
      title: "Why You Can't Out-Train a Bad Diet",
      excerpt: "As certified nutritionists, we break down exactly why customized diet plans are 70% of your transformation journey.",
      date: "Aug 02, 2026",
      readTime: "6 min read",
      author: "Coach Eddy",
      image: "/rope.png",
      category: "Nutrition"
    },
    {
      id: 3,
      title: "Welcome to Our New Kaonli Branch!",
      excerpt: "We are expanding! Check out the state-of-the-art equipment and exclusive opening offers at Eddie's Fitness Club in Kaonli.",
      date: "Jul 25, 2026",
      readTime: "3 min read",
      author: "Eddy Fitness Team",
      image: "/hero.png", // Replace with an actual gym interior image
      category: "Announcements"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-20">
      
      {/* --- PAGE HEADER --- */}
      <section className="relative pt-32 pb-16 border-b border-zinc-800 bg-black overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Our Story & <span className="text-red-500">Mission</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Building a community of strength, discipline, and unstoppable energy across Uttarakhand.
          </motion.p>
        </div>
      </section>

      {/* --- FOUNDER & TRAINERS SECTION --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Owner Image & Stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] rounded-3xl overflow-hidden border border-zinc-800"
            >
              <Image 
                src="/rope.png" // Replace with Eddy's actual photo
                alt="Eddy - Founder & Head Coach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-3xl font-black text-white mb-1">Coach Eddy</h2>
                <p className="text-red-500 font-semibold mb-4">@fitpahaditraveller</p>
                <div className="flex gap-4">
                  <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 px-4 py-2 rounded-lg">
                    <span className="block text-xs text-zinc-400 uppercase tracking-wider">Role</span>
                    <span className="font-bold text-sm">Founder & Head Coach</span>
                  </div>
                  <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 px-4 py-2 rounded-lg">
                    <span className="block text-xs text-zinc-400 uppercase tracking-wider">Expertise</span>
                    <span className="font-bold text-sm">Certified Nutritionist</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Owner Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet The Expert Behind The <span className="text-red-500">Transformations</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                With years of professional experience and a deep passion for human biomechanics, Eddy founded this club to bring premium fitness standards to Rishikesh and Dehradun. 
              </p>
              <p className="text-zinc-400 leading-relaxed mb-10">
                As a Certified Nutritionist and advanced fitness expert, Eddy believes that achieving your dream physique is a science. Whether you are stepping into a gym for the first time or looking for rigorous body-building prep, our coaching team is equipped to guide you every step of the way.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-xl text-red-500 shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100">Our Mission</h4>
                    <p className="text-sm text-zinc-500 mt-1">To make "Fit, Fitter, Fittest" a reality for every single member.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-xl text-red-500 shrink-0">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100">Elite Team</h4>
                    <p className="text-sm text-zinc-500 mt-1">A roster of highly trained professionals dedicated to your safety and growth.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- GYM OWNER'S BLOG SECTION --- */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800 relative">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="uppercase tracking-widest text-red-500 font-semibold mb-3 text-sm">Latest Updates</p>
              <h2 className="text-3xl md:text-4xl font-bold">Eddy's Fitness <span className="text-red-500">Blog</span></h2>
            </div>
            
            {/* This button could later route to a dedicated CMS dashboard or login for the gym owner */}
            <Link 
              href="/contact" 
              className="text-sm font-semibold text-zinc-400 hover:text-red-500 flex items-center gap-2 transition-colors"
            >
              View All Posts <ArrowRight size={16} />
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id}
                variants={itemVariants}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-colors group flex flex-col"
              >
                {/* Blog Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                    <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><UserCircle size={14} /> {post.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-red-500 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/about`} // Placeholder link, change to actual blog post URL later
                    className="mt-auto text-sm font-bold text-white flex items-center gap-2 group-hover:text-red-500 transition-colors w-fit"
                  >
                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>

    </main>
  );
}