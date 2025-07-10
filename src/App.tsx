
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "@/router/AppRouter";
import { useSEO } from "@/hooks/useSEO";
import ErrorBoundary from "@/components/ErrorBoundary";

const queryClient = new QueryClient();

function App() {
  console.log("App component loading...");
  
  // Set default SEO for the app
  useSEO();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <AppRouter />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
