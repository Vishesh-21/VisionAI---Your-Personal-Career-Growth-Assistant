import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vision AI – Your Career Growth Partner",
  description:
    "AI-powered tools for resume building, interview prep, and industry insights—all in one place!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning="true">
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header component  */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster richColors />
            {/* footer component  */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
