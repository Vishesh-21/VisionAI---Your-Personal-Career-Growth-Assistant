"use client";

import { generateQuiz, savedQuizResult } from "@/actions/interview";
import useFetch from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarLoader } from "react-spinners";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { QuizResult } from "./QuizResult";

export const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

  //actions for generating the quiz
  const {
    loading: generatingQuiz,
    fn: generateQuizFn,
    data: quizData,
  } = useFetch(generateQuiz);

  //action for saving the result
  const {
    loading: savingResult,
    fn: savedQuizResultFn,
    data: resultData,
    setData: setResultData,
  } = useFetch(savedQuizResult);

  // useEffect to create an answer array of specific quiz length
  useEffect(() => {
    if (quizData) {
      setAnswers(new Array(quizData.length).fill(null));
    }
  }, [quizData]);

  const handleAnswer = (answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestion] = answer;
      return newAnswers;
    });
  };

  // show an loader until our quiz is not generate
  if (generatingQuiz) {
    return <BarLoader className="mt-10" width={"100%"} color="gray" />;
  }

  //ui for initially generating quiz
  if (!quizData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Ready to test your knowledge</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This Quiz contains 20 questions specific to your industry and
            skills. Take your time and choose the best answer for each question.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            className={"secondary mx-auto px-16 cursor-pointer"}
            onClick={generateQuizFn}
          >
            Start Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // function for going to the next quiz
  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  // function for going back to previous question
  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    } else {
      return;
    }
  };

  //function to calculate the score of quiz
  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        correct++;
      }
    });

    return (correct / quizData.length) * 100;
  };

  //function to saving the overall quiz
  const finishQuiz = async () => {
    const score = calculateScore();

    try {
      await savedQuizResultFn(quizData, answers, score);
      toast.success("Quiz completed!");
    } catch (error) {
      toast.error(error.message || "Failed to save quiz results!");
    }
  };

  //function to start new quiz
  const startNewQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowExplanation(false);
    generateQuizFn();
    setResultData(null);
  };

  if (resultData) {
    return (
      <div className="mx-2">
        <QuizResult result={resultData} onStartNew={startNewQuiz} />
      </div>
    );
  }

  const question = quizData?.[currentQuestion];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Question {currentQuestion + 1} of {quizData.length}
        </CardTitle>
      </CardHeader>
      <CardContent className={"space-y-4"}>
        <p className="text-lg font-medium">{question?.question}</p>
        <RadioGroup
          className={"space-y-2 mt-4 ml-2"}
          onValueChange={(value) => handleAnswer(value)}
          value={answers[currentQuestion] ?? ""}
        >
          {question?.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem
                value={option}
                id={`option-${index}`}
                name="quiz-options"
              />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>

        {/* showing explanation of question */}
        {showExplanation && (
          <div className="mt-4 md:mt-4 bg-muted p-4 rounded-lg mb-2">
            <p className="font-medium text-sm md:text-medium">Explanation: </p>
            <p className="text-muted-foreground text-sm md:text-medium">
              {question?.explanation}
            </p>
          </div>
        )}
      </CardContent>

      {/* button to next , back  and explanation  */}
      <CardFooter className={"relative flex items-center justify-between"}>
        {!showExplanation && (
          <Button
            variant={"outline"}
            disabled={!answers[currentQuestion]}
            onClick={() => setShowExplanation(true)}
            className="cursor-pointer"
          >
            Show Explanation
          </Button>
        )}

        <div className="absolute right-6 flex items-center gap-2">
          {currentQuestion > 0 && (
            <Button onClick={handleBack} className={"ml-auto cursor-pointer"}>
              Previous Question
            </Button>
          )}

          <Button
            disabled={!answers[currentQuestion] || savingResult}
            onClick={handleNext}
            className={"ml-auto cursor-pointer"}
          >
            {savingResult && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            {currentQuestion < quizData.length - 1
              ? "Next Question"
              : "Finish Quiz"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
