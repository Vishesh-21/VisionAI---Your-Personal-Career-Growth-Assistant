import { BrainCircuit, Briefcase, FileEdit, LineChart, ScrollText, UserPlus, Users } from "lucide-react";

export const features = [
    {
        icon : <BrainCircuit className="w-10 h-10 mb-4 text-primary"/>,
        title : "AI PowerEd Guidance",
        desc : 'Get personalized career advice and insights powered by advanced AI technology.'
    },
    {
        icon : <LineChart className="w-10 h-10 mb-4 text-primary"/>,
        title : "Industry Insights",
        desc : "Stay updated with the latest market trends, job analytics, and expert career advice."
    },
    {
        icon : <ScrollText className="w-10 h-10 mb-4 text-primary"/>,
        title : "Resume Builder Tool",
        desc : "Create professional, ATS-friendly resumes with AI-powered suggestions for better job opportunities."
    },
    {
        icon : <Briefcase className="w-10 h-10 mb-4 text-primary"/>,
        title : "Mock Interview",
        desc : "AI-driven interview simulations with real-time feedback to boost confidence and improve performance."
    }
]

export const statsticsData = [
    {
        state : "50+",
        desc : "Industries Covered"
    },
    {
        state : "1000+",
        desc : "Interview Questions"
    },
    {
        state : "95%",
        desc : "Success Rate"
    },
    {
        state : "24/7",
        desc : "AI Support"
    },
]

export const howItWorks = [
    {
        title : "Mock Interview Practice",
        icon : <Users className="w-8 h-8 text-primary"/>,
        points: [
            {
                one : 'Get real-time AI-driven mock interviews.',
                two : "Receive instant feedback on your responses.",
                three : 'Improve your confidence and interview skills.'
            }
        ]
    },
    {
        title : "Industry Insights & Career Guidance",
        icon : <UserPlus className="w-8 h-8 text-primary"/>,
        points: [
            {
                one : 'Stay updated with the latest industry trends.',
                two : "Get expert-level guidance for career growth.",
                three : 'AI-powered reports on emerging job opportunities.'
            }
        ]
    },
    {
        title : "Smart Resume Builder",
        icon : <FileEdit className="w-8 h-8 text-primary"/>,
        points: [
            {
                one : ' Generate professional resumes with AI.',
                two : "Get ATS-friendly templates for better job visibility.",
                three : 'Tailor your resume for different job roles effortlessly.'
            }
        ]
    },
    {
        title : "Continuous Learning & Growth",
        icon : <LineChart className="w-8 h-8 text-primary"/>,
        points: [
            {
                one : 'Access AI-driven career coaching.',
                two : "Track your improvement over time.",
                three : 'Stay ahead in your career with Vision AI’s smart tools.'
            }
        ]
    },
]


export const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Software Engineer at Google",
      feedback:
        "Vision AI helped me ace my interview with its amazing mock interview feature. The AI-driven insights were truly a game-changer!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sanya Verma",
      role: "Data Analyst at Microsoft",
      feedback:
        "I landed my dream job thanks to Vision AI's resume builder and industry insights. It gave me the confidence I needed!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rajesh Kumar",
      role: "Product Manager at Amazon",
      feedback:
        "The AI-powered career guidance was incredibly helpful! Vision AI’s personalized suggestions improved my resume and job applications significantly.",
      image: "https://randomuser.me/api/portraits/men/57.jpg",
    },
  ];

  export const faqs = [
    {
      question: "What is Vision AI, and how can it help me?",
      answer: "Vision AI is a personal AI-powered career assistant designed to help individuals grow professionally. It offers tools like mock interviews, industry insights, and a resume builder to prepare you for job opportunities and career success."
    },
    {
      question: "How does the mock interview feature work?",
      answer: "Our AI-powered Mock Interview feature simulates real-world interview scenarios by asking industry-specific questions. It provides instant feedback on your answers, helping you refine your communication skills and improve your performance."
    },
    {
      question: "What kind of industry insights does Vision AI provide?",
      answer: "Vision AI keeps you updated with the latest trends in various industries, including job market trends, required skill sets, salary expectations, and hiring patterns. This ensures you stay ahead in your career planning."
    },
    {
      question: "Can Vision AI help me create a professional resume?",
      answer: "Yes! Vision AI’s Resume Builder helps you craft an ATS-friendly resume with industry-standard formats, personalized suggestions, and real-time feedback to make your resume stand out."
    },
    {
      question: "Is Vision AI free to use?",
      answer: "Vision AI offers both free and premium plans. The free version provides essential features, while the premium plan unlocks advanced AI-driven career insights, detailed mock interview analysis, and resume customization."
    },
    {
      question: "How secure is my personal data on Vision AI?",
      answer: "We take security seriously. Vision AI follows strict data privacy policies and uses end-to-end encryption to protect your personal information. We do not share your data with third parties."
    },
    {
      question: "How do I get started with Vision AI?",
      answer: "Getting started is easy! Simply sign up on our platform, set up your profile, and explore the features like mock interviews, resume building, and career insights to kickstart your career growth."
    }
  ];
  
  