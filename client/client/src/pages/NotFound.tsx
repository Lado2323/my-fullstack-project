import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-gradient">404</h1>
        <p className="text-xl md:text-2xl mb-8">Page was not found</p>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Page was not found
        </p>
        <Button asChild size="lg">
          <Link to="/">Go back to main page</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;