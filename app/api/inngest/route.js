import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights, helloWorld } from "@/lib/inngest/functions";
import { serve } from "inngest/next";

export const dynamic = "force-dynamic";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    generateIndustryInsights,
  ],
});
