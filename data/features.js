import { BrainCircuit, Briefcase, LineChart, ScrollText } from "lucide-react";

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