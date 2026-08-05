import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-surface text-fg">
                <ScrollReveal />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
