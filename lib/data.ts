export interface Trainer {
  name: string;
  role: string;
  experience: string;
  specialty: string;
  certification: string;
  image: string;
}

export interface Branch {
  id: string;
  name: string;
  city: string;
  rating: number;
  reviewsCount: number;
  address: string;
  hours: string;
  features: string[];
  feedback?: string;
  trainers: Trainer[];
}

export const BRANCHES_DATA: Branch[] = [
  {
    id: "dobhal",
    name: "Dobhal Complex, Amitgram",
    city: "Rishikesh",
    rating: 5.0,
    reviewsCount: 32,
    address: "Dobhal complex, Amitgram, Rishikesh",
    hours: "Open 24 hours",
    features: ["24/7 Access", "Functional Turf", "Heavy Strength Zone"],
    feedback: "Top tier atmosphere with convenient 24/7 access.",
    trainers: [
      {
        name: "Coach Eddy",
        role: "Founder & Head Fitness Coach",
        experience: "10+ Years",
        specialty: "Body Recomposition, Hypertrophy & Powerlifting",
        certification: "Certified Fitness & Sports Nutrition Coach",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Aman Rawat",
        role: "Senior Strength Trainer",
        experience: "5 Years",
        specialty: "Strength Progression & Posture Correction",
        certification: "K11 Certified Fitness Coach",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400"
      }
    ]
  },
  {
    id: "boys-inter-college",
    name: "Opp. Boys Inter College",
    city: "Rishikesh",
    rating: 4.9,
    reviewsCount: 44,
    address: "Opp. Boys Inter College, Rishikesh",
    hours: "Opens 5:00 AM Daily",
    features: ["Online Classes Available", "HIIT & Cardio Deck", "Personal Training"],
    feedback: "High energy batches with very supportive trainers.",
    trainers: [
      {
        name: "Vikram Rawat",
        role: "Functional & Hybrid Coach",
        experience: "6 Years",
        specialty: "Fat Loss, Mobility & Virtual Coaching",
        certification: "ACE Certified Personal Trainer",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Pooja Negi",
        role: "Women's Fitness & Calisthenics",
        experience: "4 Years",
        specialty: "Core Conditioning & High-Intensity Circuits",
        certification: "CPT Nutrition Specialist",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400"
      }
    ]
  },
  {
    id: "dudhli-road",
    name: "Dudhli Road",
    city: "Rishikesh",
    rating: 4.8,
    reviewsCount: 110,
    address: "Ward No. 18, Kalpatru Art Street, Dudhli Rd, Near HP Petrol Pump, Rishikesh",
    hours: "Opens 5:00 AM Daily",
    features: ["Free-Weight Deck", "Locker & Shower", "Diet Planning"],
    feedback: "Gym is clean, well-maintained. Coaching staff is professional.",
    trainers: [
      {
        name: "Rohan Bhatt",
        role: "Strength & Conditioning Specialist",
        experience: "5+ Years",
        specialty: "Hypertrophy & Olympic Lifting Mechanics",
        certification: "ISSA Certified Coach",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400"
      },
      {
        name: "Deepak Bisht",
        role: "Floor Coach & Diet Consultant",
        experience: "3 Years",
        specialty: "Beginner Transformations & Calorie Tracking",
        certification: "Gold's Gym Fitness Institute (GGFI)",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400"
      }
    ]
  },
  {
    id: "jolly-grant",
    name: "Jolly Grant",
    city: "Rishikesh",
    rating: 4.9,
    reviewsCount: 103,
    address: "No. 15, Jolly Grant, Adarsh Nagar Lane, Rishikesh",
    hours: "Opens 5:00 AM Daily",
    features: ["Biomechanical Equipment", "Recovery Zone", "Athlete Conditioning"],
    feedback: "Top quality equipment, neat & clean environment.",
    trainers: [
      {
        name: "Karan Panwar",
        role: "Performance Conditioning Coach",
        experience: "7 Years",
        specialty: "Functional Strength & Endurance",
        certification: "CrossFit L1 & Sports Nutritionist",
        image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=400"
      }
    ]
  },
  {
    id: "doiwala-road",
    name: "Doiwala Road",
    city: "Dehradun",
    rating: 5.0,
    reviewsCount: 10,
    address: "Doiwala Rd, Opp. Maruti Suzuki Showroom, Dehradun",
    hours: "Opens 5:00 AM Daily",
    features: ["Custom Machine Deck", "Diet Consultancy", "Cross-Training"],
    feedback: "The trainers are motivating, and the facilities are excellent.",
    trainers: [
      {
        name: "Sameer Joshi",
        role: "Head Fitness Coach",
        experience: "6 Years",
        specialty: "Lean Muscle Gain, Biomechanics & Weight Management",
        certification: "Clinical Nutritionist & Certified Master Trainer",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=400"
      }
    ]
  }
];

export const MEMBERSHIP_PLANS = [
  {
    name: "Monthly Starter",
    duration: "1 Month",
    price: "₹1,499",
    isPopular: false,
    perks: [
      "Access to primary selected branch",
      "Full gym floor & cardio equipment",
      "Induction & initial assessment",
      "Locker & shower facilities"
    ]
  },
  {
    name: "Quarterly Pro",
    duration: "3 Months",
    price: "₹3,799",
    isPopular: true,
    perks: [
      "Multi-branch access privileges",
      "Personalized Diet & Nutrition Plan",
      "Monthly body composition tracking",
      "Free access to community challenges (HYROX/Plank)",
      "Continuous trainer guidance"
    ]
  },
  {
    name: "Annual Elite + PT",
    duration: "12 Months",
    price: "₹11,999",
    isPopular: false,
    perks: [
      "All 5 branches all-access passport",
      "Dedicated Personal Training sessions",
      "Advanced sports nutrition protocols",
      "Priority equipment booking",
      "Complimentary Eddy Fitness Club gear"
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Gym is clean, well-maintained. Coaching staff is professional and always ready to guide with posture.",
    author: "Google Verified Member",
    branch: "Dudhli Road (110 Reviews)",
    stars: 5
  },
  {
    quote: "Top quality equipment, neat & clean environment. The best workout spot near Jolly Grant.",
    author: "Google Verified Member",
    branch: "Jolly Grant (103 Reviews)",
    stars: 5
  },
  {
    quote: "The trainers are motivating, and the facilities are excellent. Real results if you follow their diet plan.",
    author: "Google Verified Member",
    branch: "Doiwala Road (5.0 ★)",
    stars: 5
  }
];