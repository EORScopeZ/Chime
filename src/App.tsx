
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import Subscriptions from "./pages/Subscriptions";
import AddSubscription from "./pages/AddSubscription";
import EditSubscription from "./pages/EditSubscription";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import TeamManagement from "./pages/TeamManagement";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Components
import AuthGuard from "./components/auth/AuthGuard";
import { AppProvider } from "./contexts/AppContext";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading data and authentication
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-dark-bg">
        <div className="animate-neon-pulse">
          <div className="h-16 w-16 border-4 border-t-neon-blue border-r-neon-blue/50 border-b-neon-blue/30 border-l-neon-blue/10 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <AppProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Protected routes */}
                <Route path="/dashboard" element={
                  <AuthGuard>
                    <Dashboard />
                  </AuthGuard>
                } />
                <Route path="/subscriptions" element={
                  <AuthGuard>
                    <Subscriptions />
                  </AuthGuard>
                } />
                <Route path="/subscriptions/add" element={
                  <AuthGuard>
                    <AddSubscription />
                  </AuthGuard>
                } />
                <Route path="/subscriptions/:id/edit" element={
                  <AuthGuard>
                    <EditSubscription />
                  </AuthGuard>
                } />
                <Route path="/reports" element={
                  <AuthGuard>
                    <Reports />
                  </AuthGuard>
                } />
                <Route path="/settings" element={
                  <AuthGuard>
                    <Settings />
                  </AuthGuard>
                } />
                <Route path="/team" element={
                  <AuthGuard>
                    <TeamManagement />
                  </AuthGuard>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </AppProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
