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
  postalCode: string;
  hours: string;
  openingHoursSpecification: {
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  features: string[];
  feedback?: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  mapEmbedUrl: string;
  trainers: Trainer[];
}

export const PHONE_NUMBER = "+918410411868";
export const DISPLAY_PHONE = "8410411868";
export const DOMAIN_URL = "https://eddyfitnessclub.com";

export const BRANCHES_DATA: Branch[] = [
  {
    id: "dobhal",
    name: "Eddy Fitness Club – Dobhal Complex, Amitgram",
    city: "Rishikesh",
    rating: 5.0,
    reviewsCount: 32,
    address: "Dobhal complex, Amitgram, Rishikesh, Uttarakhand",
    postalCode: "249204",
    hours: "Open 24 hours",
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    features: ["24/7 Access", "Functional Turf", "Heavy Strength Zone"],
    feedback: "Gym is clean, well-maintained. 24/7 access is a game changer.",
    geo: {
      latitude: 30.0869,
      longitude: 78.2676,
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.8!2d78.2676!3d30.0869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA1JzEyLjgiTiA3OMKwMTYnMDMuNCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
    trainers: [
      {
        name: "Coach Eddy",
        role: "Founder & Head Fitness Coach",
        experience: "10+ Years Exp.",
        specialty: "Body Recomposition, Hypertrophy & Powerlifting",
        certification: "Certified Fitness & Sports Nutrition Coach",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400",
      },
      {
        name: "Aman Rawat",
        role: "Senior Strength Trainer",
        experience: "5 Years Exp.",
        specialty: "Powerlifting Mechanics & Posture Correction",
        certification: "K11 Certified Fitness Coach",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    id: "boys-inter-college",
    name: "Eddy Fitness Club – Opp. Boys Inter College",
    city: "Rishikesh",
    rating: 4.9,
    reviewsCount: 44,
    address: "Opp. Boys Inter College, Rishikesh, Uttarakhand",
    postalCode: "249201",
    hours: "Opens 5:00 AM Daily",
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "05:00",
        closes: "22:00",
      },
    ],
    features: ["Online Classes Available", "HIIT & Cardio Deck"],
    feedback: "High energy batches with very supportive trainers.",
    geo: {
      latitude: 30.1033,
      longitude: 78.2948,
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.2!2d78.2948!3d30.1033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA2JzExLjkiTiA3OMKwMTcnNDEuMyJF!5e0!3m2!1sen!2sin!4v1600000000001!5m2!1sen!2sin",
    trainers: [
      {
        name: "Vikram Rawat",
        role: "Functional & Hybrid Coach",
        experience: "6 Years Exp.",
        specialty: "Mobility, Fat Loss & Virtual Coaching",
        certification: "ACE Certified Personal Trainer",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=400",
      },
      {
        name: "Pooja Negi",
        role: "Women's Fitness & Calisthenics",
        experience: "4 Years Exp.",
        specialty: "Core Conditioning & High-Intensity Circuits",
        certification: "CPT Nutrition Specialist",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    id: "dudhli-road",
    name: "Eddy Fitness Club – Dudhli Road",
    city: "Rishikesh",
    rating: 4.8,
    reviewsCount: 110,
    address: "Ward No. 18, Kalpatru Art Street, Dudhli Rd, Near HP Petrol Pump, Rishikesh, Uttarakhand",
    postalCode: "249201",
    hours: "Opens 5:00 AM Daily",
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "05:00",
        closes: "22:00",
      },
    ],
    features: ["Free-Weight Deck", "Diet Planning & Lockers"],
    feedback: "Gym is clean, well-maintained. Coaching staff is professional.",
    geo: {
      latitude: 30.1158,
      longitude: 78.2912,
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.8!2d78.2912!3d30.1158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA2JzU2LjkiTiA3OMKwMTcnMjguMyJF!5e0!3m2!1sen!2sin!4v1600000000002!5m2!1sen!2sin",
    trainers: [
      {
        name: "Rohan Bhatt",
        role: "Strength & Conditioning Specialist",
        experience: "5+ Years Exp.",
        specialty: "Hypertrophy & Olympic Lifting Mechanics",
        certification: "ISSA Certified Coach",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400",
      },
      {
        name: "Deepak Bisht",
        role: "Floor Coach & Diet Consultant",
        experience: "3 Years Exp.",
        specialty: "Beginner Transformations & Calorie Tracking",
        certification: "Gold's Gym Fitness Institute (GGFI)",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    id: "jolly-grant",
    name: "Eddy Fitness Club – Jolly Grant",
    city: "Rishikesh",
    rating: 4.9,
    reviewsCount: 103,
    address: "No. 15, Jolly Grant, Adarsh Nagar Lane, Rishikesh, Uttarakhand",
    postalCode: "248140",
    hours: "Opens 5:00 AM Daily",
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "05:00",
        closes: "22:00",
      },
    ],
    features: ["Biomechanical Equipment", "Athlete Recovery Zone"],
    feedback: "Top quality equipment, neat & clean environment.",
    geo: {
      latitude: 30.1882,
      longitude: 78.1824,
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.9!2d78.1824!3d30.1882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDExJzE3LjUiTiA3OMKwMTAnNTYuNiJF!5e0!3m2!1sen!2sin!4v1600000000003!5m2!1sen!2sin",
    trainers: [
      {
        name: "Karan Panwar",
        role: "Performance Conditioning Coach",
        experience: "7 Years Exp.",
        specialty: "Functional Strength & Endurance",
        certification: "CrossFit L1 & Sports Nutritionist",
        image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    id: "doiwala-road",
    name: "Eddy Fitness Club – Doiwala Road",
    city: "Dehradun",
    rating: 5.0,
    reviewsCount: 10,
    address: "Doiwala Rd, Opp. Maruti Suzuki Showroom, Dehradun, Uttarakhand",
    postalCode: "248140",
    hours: "Opens 5:00 AM Daily",
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "05:00",
        closes: "22:00",
      },
    ],
    features: ["Custom Machine Deck", "Clinical Diet Consultancy"],
    feedback: "The trainers are motivating, and the facilities are excellent.",
    geo: {
      latitude: 30.1611,
      longitude: 78.1258,
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.6!2d78.1258!3d30.1611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA5JzQwLjAiTiA3OMKwMDcnMzIuOSJF!5e0!3m2!1sen!2sin!4v1600000000004!5m2!1sen!2sin",
    trainers: [
      {
        name: "Sameer Joshi",
        role: "Head Fitness Coach",
        experience: "6 Years Exp.",
        specialty: "Lean Muscle Gain & Sports Nutrition",
        certification: "Clinical Nutritionist & Certified Master Trainer",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
];

export const MEMBERSHIP_PLANS = [
  {
    name: "Monthly Starter",
    duration: "1 Month",
    price: "₹1,499",
    startingFrom: "₹1,499",
    isPopular: false,
    perks: [
      "Access to primary home branch",
      "Full gym floor & cardio equipment",
      "Fitness baseline & posture induction",
      "Lockers and shower access",
    ],
  },
  {
    name: "Quarterly Pro",
    duration: "3 Months",
    price: "₹3,799",
    startingFrom: "₹1,266 / mo",
    isPopular: true,
    perks: [
      "Multi-branch access privileges",
      "Personalized Diet & Nutrition Plan",
      "Monthly body composition assessment",
      "Free access to HYROX / Plank challenges",
      "Continuous trainer guidance",
    ],
  },
  {
    name: "Annual Elite + PT",
    duration: "12 Months",
    price: "₹11,999",
    startingFrom: "₹999 / mo",
    isPopular: false,
    perks: [
      "All 5 branches all-access passport",
      "Dedicated 1-on-1 Personal Training guidance",
      "Continuous custom macro adjustments",
      "Priority equipment & induction slots",
      "Complimentary Eddy Gym Kit",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Google Verified Member",
    branch: "Dudhli Road (110 Reviews)",
    quote: "Gym is clean, well-maintained. Coaching staff is professional.",
    rating: 5,
  },
  {
    name: "Google Verified Member",
    branch: "Jolly Grant (103 Reviews)",
    quote: "Top quality equipment, neat & clean environment.",
    rating: 5,
  },
  {
    name: "Google Verified Member",
    branch: "Doiwala Road (5.0 ★)",
    quote: "The trainers are motivating, and the facilities are excellent.",
    rating: 5,
  },
];