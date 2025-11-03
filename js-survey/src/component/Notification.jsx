import React from "react";

const Notification = ({ type, message, onClose }) => {
  const isSuccess = type === "success";
  return (
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95vw] max-w-md`}>
      <div className={`
        flex items-start p-4 rounded-lg shadow-xl border transition
        ${isSuccess
           ? "bg-green-900/95 border-green-600 text-white"
           : "bg-red-900/90 border-red-500 text-white"
        }
      `}>
        <div className="flex-shrink-0 pt-1">
          {isSuccess ? (
            <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="11.5" fill="none" stroke="currentColor" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 12.5l2.5 2.5L16 8.5" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-red-400 mr-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="11.5" fill="none" stroke="currentColor" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 9l6 6m0-6l-6 6" />
            </svg>
          )}
        </div>
        <div className="flex-1 pl-2">
          <div className="font-semibold text-lg">
            {isSuccess ? "Success" : "Failed"}
          </div>
          <div className="text-[15px]">{message}</div>
        </div>
        <button
          onClick={onClose}
          className="ml-3 text-white/90 hover:text-white transition text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;
