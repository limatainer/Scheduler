import React from 'react';

export default function Skeleton() {
  return (
    <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
      <div className="h-48 rounded-t bg-gray-200 dark:bg-gray-700"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50 dark:bg-gray-800">
        <div className="w-full h-6 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="w-full h-6 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="w-3/4 h-6 rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
}
