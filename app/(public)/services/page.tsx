import { Dumbbell, Salad, Laptop, Activity, Users, Flame } from "lucide-react"

export const metadata = {
  title: "Our Services | Eddy Fitness Club",
  description: "Explore our paid diet plans, workout schedules, online training, and intense X Training sessions.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific body building or weight loss goals.",
      icon: <Users className="w-10 h-10 mb-4 text-primary" />
    },
    {
      title: "Certified Nutrition Plans",
      description: "Customized paid diet plans crafted by our Certified Nutritionist to fuel your workouts and recovery.",
      icon: <Salad className="w-10 h-10 mb-4 text-primary" />
    },
    {
      title: "Online Training",
      description: "Remote coaching capabilities so you can train with the best from anywhere.",
      icon: <Laptop className="w-10 h-10 mb-4 text-primary" />
    },
    {
      title: "X Training",
      description: "High-intensity, CrossFit-style workouts designed to push your limits. Join our late-night sessions!",
      icon: <Flame className="w-10 h-10 mb-4 text-primary" />
    },
    {
      title: "Body Building",
      description: "Structured workout schedules focused on muscle hypertrophy and strength conditioning.",
      icon: <Dumbbell className="w-10 h-10 mb-4 text-primary" />
    },
    {
      title: "General Fitness",
      description: "Comprehensive programs designed to improve overall cardiovascular health, flexibility, and stamina.",
      icon: <Activity className="w-10 h-10 mb-4 text-primary" />
    }
  ]

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Transform Your Life</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Fit, Fitter, Fittest! From customized nutrition to intense X Training, we have everything you need to reach your peak.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm bg-card">
            {service.icon}
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}