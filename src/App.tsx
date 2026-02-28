import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ReferralProgram from "./pages/ReferPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="kunamix-ui-theme">
      <TooltipProvider>
        <Toaster />
        <WhatsAppButton />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/refer" element={<ReferralProgram />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
