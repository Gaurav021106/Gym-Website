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
  Award,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Strength Training",
      desc: "Build muscle and maximize strength with expert training programs.",
      icon: <Dumbbell size={55} />,
    },

    {
      title: "Fat Loss",
      desc: "Burn fat efficiently with customized workouts and diet plans.",
      icon: <Flame size={55} />,
    },

    {
      title: "Personal Training",
      desc: "1-on-1 coaching tailored according to your goals.",
      icon: <User size={55} />,
    },

    {
      title: "Online Coaching",
      desc: "Train from anywhere with Eddy's online fitness programs.",
      icon: <Salad size={55} />,
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {/* Forcing dark mode here because the hero image is dark and looks best with dark text/backgrounds */}
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/hero.png"
            alt="Eddy Fitness Club"
            fill
            priority
            className="object-cover opacity-50"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent z-10" />

        {/* Red Glow */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-600 blur-[150px] opacity-30 rounded-full z-0"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="uppercase tracking-[0.4em] text-red-500 font-semibold mb-6"
            >
              Eddy Fitness Club
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white leading-[0.9]"
            >
              BECOME THE
              <br />
              <span className="text-red-500">STRONGEST</span>
              <br />
              VERSION OF YOU
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-xl text-gray-300 max-w-xl"
            >
              Train harder. Transform faster. Join Eddy Fitness Club and unlock
              premium gym training, online coaching, and personalized nutrition
              plans.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-5 mt-10 flex-wrap"
            >
              <Link
                href="/contact"
                className="
              px-8 py-4
              rounded-full
              bg-red-600
              hover:bg-red-700
              text-white
              font-bold
              flex items-center gap-2
              transition-all
              hover:scale-105"
              >
                Join Now
                <ArrowRight />
              </Link>

              <Link
                href="/services"
                className="
              px-8 py-4
              rounded-full
              border border-white/20
              backdrop-blur-xl
              text-white
              hover:border-red-500
              transition-all"
              >
                Online Coaching
              </Link>
            </motion.div>

            {/* Glass Stats Card */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="
          mt-16
          grid
          grid-cols-3
          gap-6

          backdrop-blur-xl

          bg-white/10

          border border-white/10

          rounded-3xl

          p-8

          max-w-2xl

          "
            >
              <div className="text-center">
                <Users className="mx-auto text-red-500 mb-3" />

                <h2 className="text-4xl font-black text-white">3K+</h2>

                <p className="text-gray-400">Instagram Community</p>
              </div>

              <div className="text-center">
                <Trophy className="mx-auto text-red-500 mb-3" />

                <h2 className="text-4xl font-black text-white">500+</h2>

                <p className="text-gray-400">Transformations</p>
              </div>

              <div className="text-center">
                <Dumbbell className="mx-auto text-red-500 mb-3" />

                <h2 className="text-4xl font-black text-white">5+</h2>

                <p className="text-gray-400">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT EDDY */}

      <section id="about" className="relative py-32 bg-black overflow-hidden">
        {/* Red Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image */}

              <div
                className="
        relative
        h-[650px]
        rounded-[40px]
        overflow-hidden
        border border-white/10
        "
              >
                <Image
                  src="/rope.png"
                  alt="Eddy Fitness Coach"
                  fill
                  className="object-cover"
                />

                {/* Overlay */}

                <div
                  className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
          "
                />
              </div>

              {/* Floating Card */}

              <div
                className="
        absolute
        bottom-8
        -right-10

        backdrop-blur-xl

        bg-white/10

        border

        border-white/10

        px-8

        py-6

        rounded-3xl

        shadow-2xl
        "
              >
                <h3 className="text-5xl font-black text-red-500">3K+</h3>

                <p className="text-gray-300">Fitness Community</p>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p
                className="
        uppercase
        tracking-[0.3em]
        text-red-500
        font-semibold
        mb-6
        "
              >
                Meet Eddy
              </p>

              <h2
                className="
        text-6xl

        font-black

        text-white

        leading-tight

        mb-8
        "
              >
                FITNESS IS
                <span className="text-red-500"> MY PASSION,</span>
                <br />
                YOUR TRANSFORMATION IS MY MISSION.
              </h2>

              <p
                className="
        text-gray-400

        text-lg

        leading-loose

        mb-10
        "
              >
                At Eddy Fitness Club, fitness is more than lifting weights. It's
                about building confidence, discipline, and transforming your
                life inside and outside the gym. Whether your goal is fat loss,
                muscle building, or complete body transformation, Eddy provides
                personalized training, nutrition guidance, and online coaching
                to help you achieve real results.
              </p>

              {/* FEATURES */}

              <div className="space-y-6">
                {[
                  "Personalized Workout Plans",

                  "Online Coaching Programs",

                  "Diet & Nutrition Guidance",

                  "Real Body Transformations",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      x: 15,
                    }}
                    className="
            flex

            items-center

            gap-5

            group

            cursor-pointer
            "
                  >
                    <div
                      className="
              h-12

              w-12

              rounded-full

              bg-red-600/20

              flex

              items-center

              justify-center
              "
                    >
                      <CheckCircle2 className="text-red-500" />
                    </div>

                    <p
                      className="
              text-white

              text-lg

              group-hover:text-red-500

              transition
              "
                    >
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <Link
                  href="/contact"
                  className="
          inline-flex

          items-center

          gap-3

          px-8

          py-5

          rounded-full

          bg-red-600

          hover:bg-red-700

          text-white

          font-bold

          transition

          hover:scale-105
          "
                >
                  Start Your Journey
                  <ArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section
      id="services"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-red-600/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-red-500 font-semibold mb-4">
            OUR SERVICES
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white">
            TRANSFORM YOUR
            <span className="text-red-500"> BODY</span>
          </h2>

          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg">
            Personalized coaching, premium training and real transformations.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="h-full group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              viewport={{ once: true }}
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-gradient-to-b
                  from-white/5
                  to-white/[0.02]
                  backdrop-blur-xl

                  p-10

                  h-full
                  min-h-[470px]

                  flex
                  flex-col

                  transition-all
                  duration-500

                  hover:border-red-500
                  hover:shadow-[0_0_45px_rgba(239,68,68,0.25)]
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-40
                    h-40
                    rounded-full
                    bg-red-600/10
                    blur-[90px]

                    group-hover:scale-150
                    transition-all
                    duration-700
                  "
                />

                {/* Icon */}

                <div className="text-red-500 mb-8 relative z-10">
                  {item.icon}
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="text-gray-400 leading-relaxed flex-1 relative z-10">
                  {item.desc}
                </p>

                {/* Button */}

                <button
                  className="
                    mt-10

                    inline-flex
                    items-center
                    justify-center
                    gap-3

                    px-7
                    py-4

                    rounded-full

                    bg-red-600
                    text-white
                    font-semibold
                    text-lg

                    w-fit

                    transition-all
                    duration-300

                    hover:bg-red-500
                    hover:shadow-lg
                    hover:shadow-red-500/40

                    relative
                    z-10
                  "
                >
                  Learn More

                  <ArrowRight
                    size={20}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* TESTIMONIALS */}

<section
id="testimonials"
className="relative py-32 bg-black overflow-hidden"
>

{/* Glow */}

<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/10 blur-[160px]" />

<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-24">

<p className="
uppercase
tracking-[0.4em]
text-red-500
font-semibold
mb-5
">

Real Results

</p>

<h2 className="
text-5xl
md:text-7xl
font-black
text-white
">

MEMBER

<span className="text-red-500">

 TRANSFORMATIONS

</span>

</h2>

<p className="
text-gray-400
mt-8
max-w-2xl
mx-auto
text-lg
">

People don't just join Eddy Fitness Club.

They transform their lives.

</p>

</div>





<div className="grid md:grid-cols-3 gap-8">

{[

{

name:"Rahul",

goal:"Lost 15kg",

quote:

"Eddy completely changed my lifestyle. The workouts, diet and motivation helped me lose 15kg in just a few months.",

},

{

name:"Aman",

goal:"Muscle Gain",

quote:

"I gained confidence along with muscles. The atmosphere and coaching are on another level.",

},

{

name:"Rohit",

goal:"Body Transformation",

quote:

"Eddy doesn't just train your body, he trains your mindset. Best decision I ever made.",

}

].map((item,index)=>(



<motion.div

key={index}

initial={{opacity:0,y:50}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:.6,

delay:index*.15

}}

whileHover={{

y:-10,

scale:1.03

}}

viewport={{once:true}}

className="group"

>

<div className="

relative

overflow-hidden

rounded-[35px]

bg-white/[0.03]

backdrop-blur-xl

border

border-white/10

p-10

h-full

hover:border-red-500

transition-all

duration-500

hover:shadow-[0_0_50px_rgba(239,68,68,0.25)]

">



{/* Glow */}

<div className="

absolute

top-0

right-0

w-40

h-40

bg-red-600/10

blur-[90px]

rounded-full

"/>





<div className="

text-[120px]

absolute

top-0

right-6

font-serif

text-red-500/10

leading-none

">

"

</div>





<div className="relative z-10">

<div className="

w-20

h-20

rounded-full

bg-red-600/20

flex

items-center

justify-center

text-2xl

font-bold

text-red-500

mb-8

">

{item.name[0]}

</div>



<h3 className="

text-3xl

font-bold

text-white

mb-2

">

{item.name}

</h3>



<p className="

text-red-500

font-semibold

mb-8

">

{item.goal}

</p>



<p className="

text-gray-400

leading-loose

text-lg

">

{item.quote}

</p>


<div className="

flex

gap-1

mt-8

">

{

[1,2,3,4,5].map(star=>(

<Star

key={star}

className="

w-5

h-5

fill-red-500

text-red-500

"

/>

))

}

</div>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>
      {/* Call to Action & Stats */}
      {/* Call To Action */}
      {/* CTA SECTION */}

<section className="relative py-32 bg-black overflow-hidden">

  {/* Red Glow */}

  <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-red-600/10 blur-[180px]" />

  <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-red-600/10 blur-[160px]" />



  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* IMAGE */}

      <motion.div

      initial={{opacity:0,x:-100}}

      whileInView={{opacity:1,x:0}}

      transition={{duration:.8}}

      viewport={{once:true}}

      className="relative"

      >

        <div className="

        relative

        h-[650px]

        rounded-[40px]

        overflow-hidden

        border

        border-white/10

        ">

          <Image

          src="/rope.png"

          alt="Eddy Fitness"

          fill

          className="object-cover"

          />



          <div className="

          absolute

          inset-0

          bg-gradient-to-t

          from-black

          via-black/20

          to-transparent

          " />

        </div>



        {/* Floating Badge */}


        <div className="

        absolute

        -bottom-8

        right-10

        bg-red-600

        px-8

        py-6

        rounded-3xl

        shadow-[0_0_60px_rgba(239,68,68,0.4)]

        ">

          <h3 className="

          text-4xl

          font-black

          text-white

          ">

            500+

          </h3>

          <p className="text-white/80">

            Successful Transformations

          </p>

        </div>


      </motion.div>





      {/* CONTENT */}


      <motion.div

      initial={{opacity:0,x:100}}

      whileInView={{opacity:1,x:0}}

      transition={{duration:.8}}

      viewport={{once:true}}

      >


        <p className="

        uppercase

        tracking-[0.4em]

        text-red-500

        font-semibold

        mb-6

        ">

          Ready To Transform?

        </p>



        <h2 className="

        text-6xl

        md:text-7xl

        font-black

        text-white

        leading-[0.95]

        mb-8

        ">

          YOUR

          <span className="text-red-500">

           FITNESS

          </span>

          <br />

          JOURNEY

          STARTS

          TODAY

        </h2>



        <p className="

        text-gray-400

        text-xl

        leading-loose

        max-w-xl

        mb-12

        ">

          Train harder.

          Get stronger.

          Lose fat.

          Build muscle.

          Become the best version of yourself with Eddy Fitness Club.

        </p>



        <div className="flex gap-5 flex-wrap">

          <Link

          href="/contact"

          className="

          px-9

          py-5

          rounded-full

          bg-red-600

          text-white

          font-bold

          shadow-[0_0_40px_rgba(239,68,68,0.4)]

          hover:scale-105

          transition

          "

          >

            Join Now

          </Link>



          <Link

          href="/contact"

          className="

          px-9

          py-5

          rounded-full

          border

          border-white/10

          backdrop-blur-xl

          text-white

          hover:border-red-500

          transition

          "

          >

            Book Free Trial

          </Link>


        </div>

      </motion.div>

    </div>



{/* STATS */}


<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-32">


{[

{

num:"3K+",

label:"Instagram Community",

icon:<Users className="w-8 h-8"/>

},

{

num:"500+",

label:"Transformations",

icon:<Trophy className="w-8 h-8"/>

},

{

num:"5+",

label:"Years Experience",

icon:<Award className="w-8 h-8"/>

},

{

num:"100%",

label:"Dedication",

icon:<Clock className="w-8 h-8"/>

}

].map((item,index)=>(


<motion.div

key={index}

whileHover={{

y:-10,

scale:1.03

}}

className="

bg-white/[0.03]

border

border-white/10

backdrop-blur-xl

rounded-[30px]

p-10

text-center

hover:border-red-500

transition

"

>

<div className="

text-red-500

mb-6

flex

justify-center

">

{item.icon}

</div>



<h3 className="

text-5xl

font-black

text-white

">

{item.num}

</h3>



<p className="

text-gray-400

mt-4

">

{item.label}

</p>

</motion.div>

))

}

</div>

</div>

</section>
    </div>
  );
}
