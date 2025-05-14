// components/ErrorFallback.jsx
import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="text-center mt-10 text-red-600">
      <h2 className="text-xl font-bold">Something went wrong.</h2>
      <p>{error.message}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={resetErrorBoundary}
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorFallback;
