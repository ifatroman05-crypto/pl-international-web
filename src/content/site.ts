export const siteConfig = {
  name: "PL INTERNATIONAL",
  tagline: "Study Abroad",
  shortName: "PL International",
  description:
    "PL International is a trusted study abroad consultancy in Bangladesh offering university admission, visa processing, embassy appointment, and travel support for students planning to study in Malaysia and Australia.",
  url: "https://prolinkinternational.odoo.com",
  domain: "prolinkinternational.odoo.com",
  ogImage: "/og-image.jpg",
  phone: "+880 1950-217088",
  phoneRaw: "+8801950217088",
  email: "prolinkinternational2@gmail.com",
  address: "99, Karim Chamber, Motijheel, Dhaka 1000, Bangladesh",
  languages: ["Bangla", "English"],
  ceo: {
    name: "Sa'ad Nazrul",
    role: "Founder & Chief Executive Officer",
    shortBio:
      "Sa'ad Nazrul is the Founder & CEO of PL International. He is committed to helping Bangladeshi students achieve their dream of studying abroad through transparent counseling, professional admission guidance, and complete visa and travel support.",
    fullBio:
      "Sa'ad Nazrul is the Founder and Chief Executive Officer of PL International, a Bangladesh-based international education consultancy dedicated to helping students pursue higher education opportunities abroad. Under his leadership, PL International focuses on making the study abroad journey simple, transparent, and stress-free through end-to-end admission, visa, and travel assistance.",
    image: "/ceo/saad-nazrul.jpg",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Study in Malaysia", href: "/study-in-malaysia" },
    { label: "Study in Australia", href: "/study-in-australia" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    {
      title: "Study Abroad Counseling",
      description:
        "Get expert guidance on choosing the right country, university, and program that matches your academic profile and career goals.",
      icon: "graduation-cap",
    },
    {
      title: "University Admission",
      description:
        "End-to-end support for university applications, document submission, and follow-ups to secure your admission offer.",
      icon: "university",
    },
    {
      title: "Visa Processing",
      description:
        "Complete visa application assistance including document preparation, form filling, and submission to ensure a smooth process.",
      icon: "passport",
    },
    {
      title: "Embassy Appointment",
      description:
        "We help schedule and prepare you for embassy interviews with mock sessions and guidance on required documentation.",
      icon: "building",
    },
    {
      title: "Air Ticket Booking",
      description:
        "Affordable flight booking services for students with special discounts and flexible travel arrangements.",
      icon: "plane",
    },
    {
      title: "Bank Support",
      description:
        "Assistance with bank statement preparation, education loan guidance, and financial documentation for visa applications.",
      icon: "landmark",
    },
    {
      title: "Scholarship Guidance",
      description:
        "Information and support for available scholarships, eligibility criteria, and application procedures.",
      icon: "award",
    },
    {
      title: "Pre-Departure Support",
      description:
        "Comprehensive pre-departure briefing, accommodation arrangements, and travel tips for a smooth transition.",
      icon: "backpack",
    },
  ],
  destinations: {
    malaysia: {
      name: "Malaysia",
      slug: "study-in-malaysia",
      subtitle: "Study in Malaysia",
      description:
        "Malaysia offers world-class education at affordable costs, making it a top destination for Bangladeshi students seeking quality higher education.",
      whyStudy: [
        "Affordable tuition fees compared to Western countries",
        "Internationally recognized degrees from top universities",
        "Multicultural environment with diverse student community",
        "English-medium instruction at most universities",
        "Safe and politically stable country",
        "Strong Bangladeshi student community",
        "Proximity to Bangladesh with short flight duration",
        "High-quality campus facilities and accommodation",
      ],
      topUniversities: [
        {
          name: "University of Malaya (UM)",
          ranking: "#1 in Malaysia, QS World Ranking 65",
        },
        {
          name: "Universiti Kebangsaan Malaysia (UKM)",
          ranking: "#2 in Malaysia, QS World Ranking 129",
        },
        {
          name: "Universiti Putra Malaysia (UPM)",
          ranking: "#3 in Malaysia, QS World Ranking 148",
        },
        {
          name: "Universiti Sains Malaysia (USM)",
          ranking: "#4 in Malaysia, QS World Ranking 146",
        },
        {
          name: "Universiti Teknologi Malaysia (UTM)",
          ranking: "#5 in Malaysia, QS World Ranking 181",
        },
        {
          name: "Taylor's University",
          ranking: "Top Private University, QS World Ranking 284",
        },
        {
          name: "UCSI University",
          ranking: "Top Private University, QS World Ranking 265",
        },
        {
          name: "INTI International University",
          ranking: "Leading Private University in Malaysia",
        },
      ],
      tuitionFees: [
        {
          program: "Foundation / Diploma",
          range: "RM 15,000 – RM 35,000 per year",
        },
        {
          program: "Undergraduate (Bachelor)",
          range: "RM 25,000 – RM 55,000 per year",
        },
        {
          program: "Postgraduate (Master)",
          range: "RM 30,000 – RM 65,000 per year",
        },
        {
          program: "PhD / Doctoral",
          range: "RM 35,000 – RM 80,000 per year",
        },
      ],
      visaProcess: [
        {
          step: 1,
          title: "Receive Offer Letter",
          description:
            "Apply and receive an official offer letter from a recognized Malaysian university.",
        },
        {
          step: 2,
          title: "EMGS Application",
          description:
            "Your university applies for your visa approval through EMGS (Education Malaysia Global Services).",
        },
        {
          step: 3,
          title: "Visa Approval Letter (VAL)",
          description:
            "Once approved, you receive a Visa Approval Letter (VAL) from the Malaysian Immigration Department.",
        },
        {
          step: 4,
          title: "Single Entry Visa (SEV)",
          description:
            "Apply for a Single Entry Visa at the Malaysian Embassy in Dhaka using your VAL.",
        },
        {
          step: 5,
          title: "Travel to Malaysia",
          description:
            "After receiving SEV, you can travel to Malaysia to begin your studies.",
        },
      ],
      faqs: [
        {
          question: "What is the minimum CGPA required to study in Malaysia?",
          answer:
            "Most universities require a minimum CGPA of 2.5 out of 4.0 for undergraduate programs. However, requirements vary by university and program.",
        },
        {
          question: "Do I need IELTS/TOEFL to study in Malaysia?",
          answer:
            "Most Malaysian universities require IELTS (minimum 5.5-6.0) or TOEFL (minimum 550 PBT) scores. Some universities offer English proficiency tests or foundation programs if you don't have these scores.",
        },
        {
          question: "How long does the Malaysian student visa take?",
          answer:
            "The visa process typically takes 6 to 10 weeks from EMGS submission to VAL issuance. The timeline depends on document completeness and application volume.",
        },
        {
          question: "Can I work while studying in Malaysia?",
          answer:
            "International students in Malaysia are allowed to work part-time for a maximum of 20 hours per week during semester breaks only.",
        },
        {
          question: "What is EMGS and why is it important?",
          answer:
            "Education Malaysia Global Services (EMGS) is the central body that processes all international student visa applications for Malaysia. It handles the application from submission to approval.",
        },
        {
          question: "Is Malaysia safe for Bangladeshi students?",
          answer:
            "Yes, Malaysia is considered one of the safest countries in Southeast Asia with low crime rates, political stability, and a welcoming multicultural society.",
        },
      ],
    },
    australia: {
      name: "Australia",
      slug: "study-in-australia",
      subtitle: "Study in Australia",
      description:
        "Australia is home to some of the world's top universities, offering high-quality education and excellent post-study work opportunities.",
      whyStudy: [
        "World-class education system with globally ranked universities",
        "Generous post-study work rights (up to 3-4 years)",
        "Multicultural and inclusive society",
        "High standard of living and excellent student support",
        "Pathways to permanent residency for graduates",
        "Strong research opportunities and funding",
        "Beautiful environment and vibrant student cities",
        "English-speaking country with global career prospects",
      ],
      topUniversities: [
        {
          name: "University of Melbourne",
          ranking: "#1 in Australia, QS World Ranking 14",
        },
        {
          name: "University of Sydney",
          ranking: "#2 in Australia, QS World Ranking 19",
        },
        {
          name: "University of New South Wales (UNSW)",
          ranking: "#3 in Australia, QS World Ranking 19",
        },
        {
          name: "Monash University",
          ranking: "#5 in Australia, QS World Ranking 37",
        },
        {
          name: "University of Queensland (UQ)",
          ranking: "#6 in Australia, QS World Ranking 40",
        },
        {
          name: "University of Technology Sydney (UTS)",
          ranking: "#1 Young University in Australia",
        },
      ],
      tuitionFees: [
        {
          program: "Foundation / Diploma",
          range: "AUD 15,000 – AUD 25,000 per year",
        },
        {
          program: "Undergraduate (Bachelor)",
          range: "AUD 30,000 – AUD 50,000 per year",
        },
        {
          program: "Postgraduate (Master)",
          range: "AUD 32,000 – AUD 55,000 per year",
        },
        {
          program: "PhD / Doctoral",
          range: "AUD 35,000 – AUD 60,000 per year",
        },
      ],
      visaProcess: [
        {
          step: 1,
          title: "Receive Offer Letter",
          description:
            "Apply and receive an offer letter from an Australian educational institution.",
        },
        {
          step: 2,
          title: "Accept Offer & Pay Fees",
          description:
            "Accept the offer and pay the required tuition fees and OSHC (health cover).",
        },
        {
          step: 3,
          title: "Receive eCOE",
          description:
            "Your institution issues an electronic Confirmation of Enrolment (eCOE).",
        },
        {
          step: 4,
          title: "Submit Visa Application",
          description:
            "Apply for a Student Visa (Subclass 500) online through the Department of Home Affairs.",
        },
        {
          step: 5,
          title: "Biometrics & Health Check",
          description:
            "Complete biometrics collection at the visa application center and undergo a health examination.",
        },
      ],
    },
  },
  stats: [
    { label: "Students Guided", value: "500+" },
    { label: "Visa Success Rate", value: "98%" },
    { label: "Partner Universities", value: "50+" },
    { label: "Countries Served", value: "2+" },
  ],
  processSteps: [
    { step: 1, title: "Free Counseling", description: "Discuss your goals and get personalized study abroad advice." },
    { step: 2, title: "University Selection", description: "Choose the best university and program for your profile." },
    { step: 3, title: "Document Preparation", description: "We help prepare all required documents for admission." },
    { step: 4, title: "Visa Processing", description: "Complete visa application support from start to finish." },
    { step: 5, title: "Travel & Pre-Departure", description: "Get ready for your journey with our pre-departure guidance." },
  ],
  whyChooseUs: [
    {
      title: "Transparent Process",
      description: "No hidden fees or surprises. We maintain complete transparency in every step.",
      icon: "shield-check",
    },
    {
      title: "Personalized Counseling",
      description: "One-on-one counseling tailored to your academic background and career aspirations.",
      icon: "users",
    },
    {
      title: "End-to-End Support",
      description: "From university selection to airport pickup, we're with you every step of the way.",
      icon: "handshake",
    },
    {
      title: "Fast Response",
      description: "Quick replies to your queries and timely updates on your application status.",
      icon: "zap",
    },
    {
      title: "Experienced Team",
      description: "Our team has years of experience in international education and visa processing.",
      icon: "star",
    },
  ],
  testimonials: [
    {
      name: "Rahim Hossain",
      program: "University of Malaya",
      quote:
        "PL International made my dream of studying in Malaysia a reality. Their team guided me through every step of the application and visa process.",
    },
    {
      name: "Fatima Khan",
      program: "Monash University",
      quote:
        "I was worried about the visa process, but PL International's expert team handled everything professionally. Highly recommended!",
    },
    {
      name: "Kabir Ahmed",
      program: "Taylor's University",
      quote:
        "The counseling I received was exceptional. They helped me choose the right university and program that matched my career goals perfectly.",
    },
  ],
  socialLinks: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
}
