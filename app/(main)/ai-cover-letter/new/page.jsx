import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import CoverLetterGenerator from "../_components/CoverLetterGenerator";

const CreateNewCoverLetter = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col space-y-2">
        {/* button to go back to the previous page  */}
        <Link href="/ai-cover-letter">
          <Button className={"gap-2 pl-0 cursor-pointer"} variant={"link"}>
            <ArrowLeft className="h-4 w-4" />
            back to Cover Letters
          </Button>
        </Link>

        <div className="pb-6">
          <h1 className="text-6xl font-bold gradient-title">
            Create Cover Letter
          </h1>
          <p className="text-muted-foreground">
            Generate a tailored cover letter for your job application
          </p>
        </div>
      </div>

      <CoverLetterGenerator />
    </div>
  );
};

export default CreateNewCoverLetter;
