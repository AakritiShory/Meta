import Header  from "../components/ui/header";
import { ThemeProvider } from "../components/ui/theme-provider";
import "./globals.css";
import{Inter} from 'next/font/google';

import { ClerkProvider } from "@clerk/nextjs"
import { shadesOfPurple } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

const inter=Inter({subsets:["latin"]});

export const metadata = {
  title: "MetaManager",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider

    appearance={{
      baseTheme:shadesOfPurple,
      variables: {
        colorPrimary: "#a78bfa", // Soft purple for primary actions
        colorText: "#f9fafb", // Near-white text for clarity
        colorBackground: "#1e293b", // Dark blue-gray for body background
        colorButtonPrimaryHover: "#7c3aed", // Vibrant purple hover state
      },
      elements:{
        
        card:"bg-gray-800",
        headerTitle:"text-purple-400",
        headerSubtitle:"text-gray-400",
      },
    }}
    >
    <html lang="en">
      <body
        className={`${inter.className} dotted-background`}>
       <ThemeProvider attribute="class" defaultTheme="dark">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster/>
        <footer className="bg-gray-900 py-12">
          <div className="container mx-auto px-4 text-center text-gray-200">
          <p>Made with 💙 by Shory</p>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
