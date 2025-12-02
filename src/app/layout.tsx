import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import CursorSpotlight from "@/components/CursorSpotlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exocloud Technologies",
  description: "Expert Oracle Cloud Migration, AI Integration, and Enterprise Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!localTheme && supportDarkMode) localTheme = 'dark';
                  if (!localTheme) localTheme = 'light';
                  document.documentElement.setAttribute('data-theme', localTheme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <CursorSpotlight />
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
            <Chatbot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
