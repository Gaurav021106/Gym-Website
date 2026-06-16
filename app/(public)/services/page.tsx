import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Dumbbell, User, Salad, Flame, Activity, Users, Settings, Clock, Heart, ShieldCheck, HeartPulse, HelpCircle, CalendarDays } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section (Dark) */}
      <section className="relative w-full min-h-[70vh] flex items-center pt-20 overflow-hidden border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h4 className="text-primary font-bold tracking-wider text-sm">OUR SERVICES</h4>
              <h2 className="text-5xl md:text-7xl font-black leading-tight text-foreground">
                Everything You Need<br />
                to <span className="text-primary">Achieve More</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                From expert coaching to premium facilities, we provide everything you need to train smarter, stay consistent, and reach your goals.
              </p>
              
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3">
                   <User className="h-8 w-8 text-primary" />
                   <div>
                     <h4 className="font-bold text-foreground text-sm">Expert Trainers</h4>
                     <p className="text-xs text-muted-foreground">Certified & experienced</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <Dumbbell className="h-8 w-8 text-primary" />
                   <div>
                     <h4 className="font-bold text-foreground text-sm">Premium Equipment</h4>
                     <p className="text-xs text-muted-foreground">Modern & well-maintained</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <ShieldCheck className="h-8 w-8 text-primary" />
                   <div>
                     <h4 className="font-bold text-foreground text-sm">Safe & Clean</h4>
                     <p className="text-xs text-muted-foreground">Hygienic environment</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Center Placeholder for Bodybuilder Cutout */}
            <div className="hidden lg:flex justify-center items-end h-[500px] relative">
              {/* Image goes here */}
              <Image 
                   src="/about.png" 
                   alt="About EDDY FITNESS CLUB" 
                   fill 
                   className="object-cover object-center" 
                 />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-secondary text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h4 className="text-primary font-bold tracking-wider text-sm uppercase">What We Offer</h4>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A complete fitness experience designed for every goal, every body, every level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Strength Training", desc: "Build muscle, increase strength and improve overall performance with expert guidance.", icon: <Dumbbell /> },
              { title: "Cardio Training", desc: "Boost endurance, burn calories and improve heart health with effective cardio workouts.", icon: <Heart /> },
              { title: "Personal Training", desc: "One-on-one coaching customized to your goals and fitness level.", icon: <User /> },
              { title: "Group Classes", desc: "Fun and motivating classes including HIIT, Zumba, Yoga, Spinning and more.", icon: <Users /> },
              { title: "Nutrition Guidance", desc: "Personalized nutrition plans to fuel your workouts and support your goals.", icon: <Salad /> },
              { title: "Weight Loss Program", desc: "Structured programs designed to help you lose weight and build healthy habits.", icon: <Settings /> },
              { title: "Muscle Building Program", desc: "Targeted training and nutrition plans to help you build lean muscle and strength.", icon: <Activity /> },
              { title: "Flexibility & Mobility", desc: "Improve flexibility, posture and reduce injury risk with mobility-focused sessions.", icon: <User /> },
              { title: "Functional Training", desc: "Improve everyday strength, movement and agility with functional exercises.", icon: <Activity /> },
              { title: "Sports Conditioning", desc: "Enhance performance with sport-specific training and conditioning programs.", icon: <Settings /> },
              { title: "Rehabilitation Support", desc: "Safe and effective rehab programs to recover and move better.", icon: <HeartPulse /> },
              { title: "Locker & Amenities", desc: "Clean lockers, showers and premium amenities for a comfortable experience.", icon: <User /> },
            ].map((service, i) => (
              <div key={i} className="bg-card border border-border p-8 rounded-2xl hover:shadow-xl hover:border-primary/50 transition-all group flex flex-col h-full">
                <div className="mb-6 text-primary h-12 w-12 flex items-center justify-center bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="font-bold text-lg mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <div className="flex justify-end mt-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-border grid grid-cols-1 md:grid-cols-4 gap-8">
             <div className="flex items-center gap-4">
                <CheckCircle2 className="h-8 w-8 text-primary shrink-0" />
                <div>
                   <h4 className="font-bold text-sm">Expert Guidance</h4>
                   <p className="text-xs text-muted-foreground">Certified trainers with proven expertise</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <Dumbbell className="h-8 w-8 text-primary shrink-0" />
                <div>
                   <h4 className="font-bold text-sm">Premium Equipment</h4>
                   <p className="text-xs text-muted-foreground">State-of-the-art gym facilities</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <CalendarDays className="h-8 w-8 text-primary shrink-0" />
                <div>
                   <h4 className="font-bold text-sm">Flexible Plans</h4>
                   <p className="text-xs text-muted-foreground">Memberships that fit your lifestyle</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <HelpCircle className="h-8 w-8 text-primary shrink-0" />
                <div>
                   <h4 className="font-bold text-sm">Always Support</h4>
                   <p className="text-xs text-muted-foreground">We're here to help you succeed</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Dark) */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl overflow-hidden border border-border flex flex-col md:flex-row items-center relative">
             <div className="w-full md:w-1/2 h-64 md:h-[400px] relative bg-secondary flex items-center justify-center text-muted-foreground">
                <Image 
                   src="/rope.png" 
                   alt="About EDDY FITNESS CLUB" 
                   fill 
                   className="object-cover object-center" 
                 />
             </div>
             <div className="w-full md:w-1/2 p-12 md:p-16 relative z-10 space-y-6">
                <h4 className="text-primary font-bold tracking-wider text-sm uppercase">Ready to Transform?</h4>
                <h2 className="text-4xl font-black text-foreground leading-tight">
                  Start Your Fitness<br />Journey Today
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                  Join EDDY FITNESS CLUB and get access to expert coaching, premium facilities and a supportive community.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-6 py-3 rounded font-bold text-sm transition-colors">
                    Join Now <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-transparent border border-border hover:border-primary hover:text-primary text-foreground px-6 py-3 rounded font-bold text-sm transition-colors">
                    Book a Free Trial
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
