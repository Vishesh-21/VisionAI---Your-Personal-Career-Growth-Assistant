import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

export default function layout({ children }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-b">
        <h1 className="gradient-title text-5xl md:text-6xl font-bold">
          Industry Insights
        </h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
}
