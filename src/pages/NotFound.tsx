
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-2">
          Page not found
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          The page <span className="font-mono break-all">{location.pathname}</span> does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-ndc-purple to-ndc-blue text-white hover:from-ndc-blue hover:to-ndc-purple transition-all"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
