import Image from "next/image";
import Link from "next/link";
import { User, Dumbbell, Users, Phone, Mail, Clock, Send, MapPin, Car, ShowerHead, Lock, Droplets, Wifi, ChevronDown, CalendarDays, Salad, Flame, Trophy } from "lucide-react";

export default function ContactPage() {
  const InstagramIcon = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      ry="5"
    />

    <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z" />

    <line
      x1="17.5"
      y1="6.5"
      x2="17.51"
      y2="6.5"
    />
  </svg>
);
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* HERO + MEMBERSHIP */}

<section className="relative min-h-screen bg-black overflow-hidden">

  {/* Red Glow */}

  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[180px]" />

  <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT SIDE */}

      <div>

        <p className="
        uppercase
        tracking-[0.4em]
        text-red-500
        font-semibold
        mb-6
        ">

          EDDY FITNESS CLUB

        </p>



        <h1 className="
        text-6xl
        md:text-7xl
        font-black
        text-white
        leading-[0.95]
        ">

          BECOME THE

          <span className="text-red-500">

            {" "}BEST

          </span>

          <br />

          VERSION OF

          <br />

          YOURSELF

        </h1>



        <p className="
        text-gray-400
        text-xl
        mt-8
        leading-loose
        max-w-xl
        ">

          Join Eddy Fitness Club and start your transformation journey with expert coaching, premium training and real results.

        </p>




        {/* Stats */}



        <div className="grid grid-cols-3 gap-10 mt-16">

          <div>

            <h2 className="text-5xl font-black text-red-500">

              500+

            </h2>

            <p className="text-gray-400 mt-2">

              Transformations

            </p>

          </div>



          <div>

            <h2 className="text-5xl font-black text-red-500">

              3K+

            </h2>

            <p className="text-gray-400 mt-2">

              Instagram Family

            </p>

          </div>



          <div>

            <h2 className="text-5xl font-black text-red-500">

              5+

            </h2>

            <p className="text-gray-400 mt-2">

              Years Experience

            </p>

          </div>

        </div>




        {/* Features */}



        <div className="grid grid-cols-3 gap-8 mt-20">

          <div className="text-center">

            <User className="mx-auto text-red-500 w-10 h-10 mb-4" />

            <h4 className="font-bold text-white">

              Expert Trainers

            </h4>

          </div>



          <div className="text-center">

            <Dumbbell className="mx-auto text-red-500 w-10 h-10 mb-4" />

            <h4 className="font-bold text-white">

              Premium Equipment

            </h4>

          </div>



          <div className="text-center">

            <Users className="mx-auto text-red-500 w-10 h-10 mb-4" />

            <h4 className="font-bold text-white">

              Strong Community

            </h4>

          </div>

        </div>

      </div>





      {/* RIGHT FORM */}



      <div className="

      rounded-[35px]

      bg-white/[0.03]

      backdrop-blur-xl

      border

      border-white/10

      p-10

      shadow-[0_0_60px_rgba(239,68,68,0.15)]

      ">

        <h2 className="

        text-3xl

        font-black

        text-white

        mb-2

        ">

          Join Eddy Fitness

        </h2>



        <p className="

        text-gray-400

        mb-8

        ">

          Fill the form and start your transformation.

        </p>




        <form className="space-y-5">

          <input

          type="text"

          placeholder="Full Name"

          className="

          w-full

          bg-black/40

          border

          border-white/10

          rounded-xl

          px-5

          py-4

          text-white

          outline-none

          focus:border-red-500

          "

          />



          <input

          type="email"

          placeholder="Email Address"

          className="

          w-full

          bg-black/40

          border

          border-white/10

          rounded-xl

          px-5

          py-4

          text-white

          outline-none

          focus:border-red-500

          "

          />



          <input

          type="tel"

          placeholder="Phone Number"

          className="

          w-full

          bg-black/40

          border

          border-white/10

          rounded-xl

          px-5

          py-4

          text-white

          outline-none

          focus:border-red-500

          "

          />



          <select

          className="

          w-full

          bg-black/40

          border

          border-white/10

          rounded-xl

          px-5

          py-4

          text-white

          outline-none

          focus:border-red-500

          "

          >

            <option>Choose Goal</option>

            <option>Fat Loss</option>

            <option>Muscle Gain</option>

            <option>Body Transformation</option>

            <option>General Fitness</option>

          </select>



          <textarea

          rows={4}

          placeholder="Tell us about your goals"

          className="

          w-full

          bg-black/40

          border

          border-white/10

          rounded-xl

          px-5

          py-4

          text-white

          outline-none

          resize-none

          focus:border-red-500

          "

          />



          <button

          className="

          w-full

          bg-red-600

          hover:bg-red-700

          py-4

          rounded-xl

          font-bold

          text-white

          text-lg

          transition

          hover:scale-[1.02]

          "

          >

            Start Your Journey

          </button>

        </form>

      </div>

    </div>

  </div>

</section>

      {/* Info, Form & Map Section */}
      {/* CONTACT SECTION */}

<section className="relative py-32 bg-black overflow-hidden">

  {/* Glow */}

  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/10 blur-[150px]" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.4em] text-red-500 font-semibold mb-4">
        Contact Eddy
      </p>

      <h2 className="text-5xl md:text-7xl font-black text-white">

        LET'S START

        <span className="text-red-500">
          {" "}YOUR JOURNEY
        </span>

      </h2>

      <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto">

        Have questions? Want to join?

        Fill the form and our team will contact you.

      </p>

    </div>



    <div className="grid lg:grid-cols-3 gap-10">



      {/* LEFT INFO */}


      <div className="space-y-8">

        <div className="bg-white/[0.03] border border-white/10 rounded-[30px] p-8">

          <Phone className="text-red-500 mb-5 w-8 h-8" />

          <h3 className="text-white text-2xl font-bold mb-3">

            Call Us

          </h3>

          <p className="text-gray-400">

            +91 8410411868

          </p>

        </div>




        <div className="bg-white/[0.03] border border-white/10 rounded-[30px] p-8">

          <Clock className="text-red-500 mb-5 w-8 h-8" />

          <h3 className="text-white text-2xl font-bold mb-3">

            Opening Hours

          </h3>

          <p className="text-gray-400">

            Mon - Sat

          </p>

          <p className="text-white font-semibold">

            5:00 AM - 10:00 PM

          </p>

        </div>




        <div className="bg-white/[0.03] border border-white/10 rounded-[30px] p-8">

          <InstagramIcon className="text-red-500 w-8 h-8 mb-5" />

          <h3 className="text-white text-2xl font-bold mb-3">

            Instagram

          </h3>

          <p className="text-gray-400">

            @eddyfitnessclub

          </p>

        </div>

      </div>





      {/* FORM */}



      <div className="lg:col-span-2">

        <div className="

        rounded-[35px]

        bg-white/[0.03]

        backdrop-blur-xl

        border

        border-white/10

        p-10

        ">

          <h2 className="text-3xl font-black text-white mb-10">

            Send A Message

          </h2>



          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-5">

              <input

              type="text"

              placeholder="Full Name"

              className="

              w-full

              bg-black/40

              border

              border-white/10

              rounded-xl

              px-5

              py-4

              text-white

              outline-none

              focus:border-red-500

              "

              />



              <input

              type="email"

              placeholder="Email"

              className="

              w-full

              bg-black/40

              border

              border-white/10

              rounded-xl

              px-5

              py-4

              text-white

              outline-none

              focus:border-red-500

              "

              />

            </div>




            <input

            type="tel"

            placeholder="Phone Number"

            className="

            w-full

            bg-black/40

            border

            border-white/10

            rounded-xl

            px-5

            py-4

            text-white

            outline-none

            focus:border-red-500

            "

            />





            <select

            className="

            w-full

            bg-black/40

            border

            border-white/10

            rounded-xl

            px-5

            py-4

            text-white

            outline-none

            focus:border-red-500

            "

            >

              <option>Membership Inquiry</option>

              <option>Personal Training</option>

              <option>Online Coaching</option>

              <option>General Inquiry</option>

            </select>





            <textarea

            rows={5}

            placeholder="Tell us about your goals..."

            className="

            w-full

            bg-black/40

            border

            border-white/10

            rounded-xl

            px-5

            py-4

            text-white

            outline-none

            resize-none

            focus:border-red-500

            "

            />





            <button

            className="

            w-full

            bg-red-600

            hover:bg-red-700

            py-5

            rounded-xl

            text-white

            font-bold

            text-lg

            transition

            hover:scale-[1.02]

            "

            >

              Start Your Transformation

            </button>

          </form>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Features Banner */}
      {/* FEATURES SECTION */}

<section className="relative py-24 bg-black border-y border-white/10 overflow-hidden">

  {/* Glow */}

  <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-red-600/10 blur-[120px]" />

  <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-red-600/10 blur-[120px]" />



  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

      {[
        {
          icon: <Dumbbell className="w-10 h-10" />,
          title: "Personal Training",
          desc: "Customized workout programs for every fitness goal.",
        },

        {
          icon: <Users className="w-10 h-10" />,
          title: "Online Coaching",
          desc: "Train anywhere with Eddy's expert guidance.",
        },

        {
          icon: <Salad className="w-10 h-10" />,
          title: "Nutrition Plans",
          desc: "Diet plans designed to maximize results.",
        },

        {
          icon: <Flame className="w-10 h-10" />,
          title: "Fat Loss",
          desc: "Burn fat effectively with proven programs.",
        },

        {
          icon: <Trophy className="w-10 h-10" />,
          title: "Transformation",
          desc: "Real people. Real results. Real transformations.",
        },

      ].map((item, index) => (

        <div

          key={index}

          className="

          group

          bg-white/[0.03]

          border

          border-white/10

          rounded-[30px]

          p-8

          text-center

          hover:border-red-500

          hover:-translate-y-3

          transition-all

          duration-500

          "

        >

          <div

          className="

          flex

          justify-center

          text-red-500

          mb-6

          group-hover:scale-110

          transition

          "

          >

            {item.icon}

          </div>



          <h3

          className="

          text-white

          font-bold

          text-xl

          mb-4

          "

          >

            {item.title}

          </h3>



          <p

          className="

          text-gray-400

          text-sm

          leading-relaxed

          "

          >

            {item.desc}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>
    </div>
  );
}
