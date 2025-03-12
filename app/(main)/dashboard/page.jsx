import { getIndustryInsights } from "@/actions/dashboard";
import { getUserOnBoardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";
import { DashboardView } from "./_components/DashboardView";

export default async function DashBoard() {
  const { isOnboarded } = await getUserOnBoardingStatus();

  const insights = await getIndustryInsights();

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  );
}
