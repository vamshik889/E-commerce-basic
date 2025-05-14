import React, { lazy, Suspense } from "react";
import { useAppContext } from "../context/AppProvider";
import { ErrorBoundary } from "react-error-boundary"; // Import ErrorBoundary

// Lazy load the Product component

// 1. Error Fallback Component for Product Errors
const ProductErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert" className="text-center mt-10 text-red-600">
    <h2 className="text-xl font-bold">Error loading product</h2>
    <p>{error.message}</p>
    <button
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      onClick={resetErrorBoundary}
    >
      Try Again
    </button>
  </div>
);

export default ProductErrorFallback