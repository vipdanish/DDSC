
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
<<<<<<< HEAD
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./hooks/use-theme";
import ScrollToTop from "./components/ScrollToTop";
=======
import AchievementDetail from "./pages/AchievementDetail";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./hooks/use-theme";
import GlobalBackgroundVideo from "./components/layout/GlobalBackgroundVideo";
>>>>>>> asif-update

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
<<<<<<< HEAD
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
=======
        <GlobalBackgroundVideo />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/achievement/:id" element={<AchievementDetail />} />
>>>>>>> asif-update
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
