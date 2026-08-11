import { MapPin, Phone, AtSign, Send, Dumbbell } from "lucide-react"

export const metadata = {
  title: "Contact Us & Locations | Eddy Fitness Club",
  description: "Find an Eddy Fitness Club near you in Rishikesh and Dehradun. Get in touch for membership and training inquiries.",
}

export default function ContactPage() {
  // Added the 5th branch (Kaonli) based on previous data
  const locations = [
    {
      name: "Main Branch (Rishikesh)",
      address: "Dobhal complex, Amitgram, Gumaniwala, Rishikesh, Uttarakhand 249204",
      rating: "Top Rated",
      phone: "+91 8410411868"
    },
    {
      name: "Doiwala Branch",
      address: "Kalpatru Art street, Dudhli Rd, near Hp Petrol Pump, Doiwala, Uttarakhand 248140",
      rating: "4.9/5",
      phone: "+91 8410411868"
    },
    {
      name: "Bhaniawala Branch",
      address: "Bhaniawala, Dehradun, Uttarakhand",
      rating: "4.8/5",
      phone: "+91 8410411868"
    },
    {
      name: "Listrabad Branch",
      address: "Listrabad, Dehradun, Uttarakhand",
      rating: "4.8/5",
      phone: "+91 8410411868"
    },
    {
      name: "Kaonli Branch (Eddie's)",
      address: "Kaonli, Dehradun, Uttarakhand",
      rating: "4.8/5",
      phone: "+91 9897106297"
    }
  ]

  return (
    <div className="container mx-auto py-16 px-4 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to become the strongest version of yourself? Reach out to us for membership details, personal training, or online coaching.
        </p>
      </div>
      
      {/* Top Section: Lead Gen Form & Direct Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        
        {/* Lead Generation Form */}
        <div className="bg-card border rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Start Your Transformation</h2>
          <p className="text-muted-foreground mb-6">Fill out the form below and our team will get back to you shortly.</p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                <input id="firstName" type="text" placeholder="John" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                <input id="lastName" type="text" placeholder="Doe" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <input id="email" type="email" placeholder="john@example.com" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                <input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="goal" className="text-sm font-medium">Primary Fitness Goal</label>
              <select id="goal" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <option value="">Select a goal...</option>
                <option value="weight-loss">Weight / Fat Loss</option>
                <option value="muscle-gain">Muscle Gain / Bodybuilding</option>
                <option value="personal-training">1-on-1 Personal Training</option>
                <option value="online-coaching">Online Coaching</option>
                <option value="general-fitness">General Fitness</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message (Optional)</label>
              <textarea id="message" rows={4} placeholder="Tell us more about your fitness journey..." className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"></textarea>
            </div>

            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 mt-2">
              Submit Inquiry
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Direct Contact Info */}
        <div className="flex flex-col justify-center space-y-8 lg:pl-8">
          <div>
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-4">
              <Dumbbell className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Fit, Fitter, Fittest!</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Have a quick question about our diet plans, X-Training, or operating hours? Reach out to us directly through phone or our social channels.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Call Us Directly</p>
                  <span className="text-lg font-bold">+91 8410411868</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border">
                <div className="bg-primary/10 p-3 rounded-full">
                  <AtSign className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Official Instagram</p>
                  <a href="https://instagram.com/eddyfitnessclub" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-primary transition-colors">
                    @eddyfitnessclub
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border">
                <div className="bg-primary/10 p-3 rounded-full">
                  <AtSign className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Founder & Head Coach</p>
                  <a href="https://instagram.com/fitpahaditraveller" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-primary transition-colors">
                    @fitpahaditraveller
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-border my-16" />

      {/* Bottom Section: Locations & Map */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
          <p className="text-muted-foreground">Find us across Dehradun and Rishikesh.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-full">
          
          {/* Location Cards (Takes up 2/5 of the grid on desktop) */}
          <div className="lg:col-span-2 space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {locations.map((loc, i) => (
              <div key={i} className="p-5 border rounded-xl bg-card hover:border-primary transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1 shrink-0">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{loc.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-3 leading-relaxed">{loc.address}</p>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-semibold text-yellow-600 ring-1 ring-inset ring-yellow-400/20">
                        ★ {loc.rating}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {loc.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps Embed (Takes up 3/5 of the grid on desktop) */}
          <div className="lg:col-span-3 h-[400px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden border bg-muted relative">
            {/* Note: Standard iframe centered on the Dehradun/Rishikesh region. 
                For specific multi-pin maps without using the Maps JS API, a custom 'Google My Maps' embed link is recommended. */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.7463725838!2d77.93483321524357!3d30.325409794015694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>

        </div>
      </div>
      
    </div>
  )
}