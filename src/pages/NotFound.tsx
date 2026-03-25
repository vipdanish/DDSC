<<<<<<< HEAD
import { useLocation } from "react-router-dom";
=======
import { useLocation, Link } from "react-router-dom";
>>>>>>> asif-update
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
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
=======
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
>>>>>>> asif-update
      </div>
    </div>
  );
};

export default NotFound;
