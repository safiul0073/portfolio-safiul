import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GsapAnimator from "@/components/sections/GsapAnimator";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <div className="min-h-screen overflow-x-hidden bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
                <GsapAnimator />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
