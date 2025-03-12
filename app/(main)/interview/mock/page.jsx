import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { QuizComponent } from "../_components/QuizComponent";

export default function MockInterviewPage() {
  return (
    <div className="container mx-auto space-y-4">

    {/*button for go back to interview page  */}
      <div className="flex flex-col space-y-2 mb-4">
        <Link href={"/interview"}>
          <Button variant={"link"} className={"gap-2 pl-0 cursor-pointer"}>
            <ArrowLeft className="h-4 w-4" />
            Back to Interview Preparation
          </Button>
        </Link>
      </div>


      {/* heading for for mock interview page  */}
      <div>
        <h1 className="text-6xl font-bold gradient-title">Mock Interview</h1>
        <p className="text-muted-foreground text-sm">
          Enhance your interview skills with AI-powered mock interviews tailored
          to your target job role. Our system simulates real-world technical and
          behavioral interview questions, evaluates your responses, and provides
          detailed feedback.
        </p>
      </div>

      {/* component to show the over interview pursue section  */}
      <div className="px-2">
        <QuizComponent />
      </div>
    </div>
  );
}
