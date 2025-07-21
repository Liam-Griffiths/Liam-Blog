import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Liam Griffiths",
    template: "%s | Liam Griffiths",
  },
  description: "Liam Griffiths' personal blog on software engineering, technology, and more.",
  openGraph: {
    title: "Liam Griffiths",
    description: "Liam Griffiths' personal blog on software engineering, technology, and more.",
    url: "https://liam-griffiths.co.uk",
    siteName: "Liam Griffiths",
    images: [
      {
        url: "https://liam-griffiths.co.uk/images/me.jpg",
        width: 1200,
        height: 630,
        alt: "Liam Griffiths",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liam Griffiths",
    description: "Liam Griffiths' personal blog on software engineering, technology, and more.",
    creator: "@liamgdev",
    images: ["https://liam-griffiths.co.uk/images/me.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>)
 {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
            {/* Desktop ThemeToggle */}
            <div className="hidden md:block fixed top-4 left-4 z-50">
              <ThemeToggle />
            </div>
            <main className="flex-grow flex flex-col items-center justify-center">
              {children}
            </main>
            {/* Mobile ThemeToggle */}
            <div className="md:hidden w-full flex justify-center py-4">
              <ThemeToggle />
            </div>
            <footer className="w-full bg-gray-800 text-gray-400 text-center py-4 mt-auto dark:bg-gray-800 dark:text-gray-400 bg-gray-200 text-gray-600">
              <p>{new Date().getFullYear()} Liam Griffiths</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
