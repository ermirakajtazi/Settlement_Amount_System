import React from "react";

const LoadingSkeleton = () => {
  return (
    <div
      className="flex justify-center items-center space-x-4"
      data-testid="loading-content"
    >
      <div
        className="max-w-sm w-full bg-gray-200 p-4 rounded-lg animate-pulse"
        data-testid="placeholder-content"
      >
        <div className="h-32 bg-gray-300 mb-2 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
      </div>
      <div
        className="max-w-sm w-full bg-gray-200 p-4 rounded-lg animate-pulse"
        data-testid="placeholder-content"
      >
        <div className="h-32 bg-gray-300 mb-2 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
