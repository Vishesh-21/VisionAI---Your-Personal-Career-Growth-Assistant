"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { QuizResult } from "./QuizResult";

export const QuizList = ({ assessments }) => {
  const router = useRouter();
  const [selectQuiz, setSelectQuiz] = useState(null);

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className={"gradient-title text-3xl md:text-4xl"}>
              Recent Quizzes
            </CardTitle>
            <CardDescription>Review your past quiz performance</CardDescription>
          </div>
          <Button
            className={"cursor-pointer"}
            onClick={() => router.push("/interview/mock")}
          >
            Start new Quiz
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assessments.map((assessment, index) => {
              return (
                <div key={index}>
                  <Card
                    key={assessment.id}
                    className={
                      "cursor-pointer hover:bg-muted/50 transition-all duration-300 scale-[0.98] hover:scale-[1]"
                    }
                    onClick={() => setSelectQuiz(assessment)}
                  >
                    <CardHeader>
                      <CardTitle>Quiz {index + 1}</CardTitle>
                      <CardDescription
                        className={"flex justify-between w-full"}
                      >
                        <div>Score : {assessment.quizScore.toFixed(1)}%</div>
                        <div>
                          {format(
                            new Date(assessment.createdAt),
                            "MMM dd, yyyy HH:mm"
                          )}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {assessment.improvementTip}
                      </p>
                    </CardContent>
                  </Card>

                  {/* dialog box for specific assessment data  */}
                  <Dialog
                    open={!!selectQuiz}
                    onOpenChange={() => setSelectQuiz(null)}
                  >
                    <DialogContent className={'max-w-3xl max-h-[90vh] overflow-y-auto'}>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                      </DialogHeader>
                      <QuizResult result={selectQuiz} onStartNew={() => router.push('/interview/mock')}/>
                    </DialogContent>
                  </Dialog>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
};
