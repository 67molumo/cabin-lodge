// src/hooks/useToast.js
import { useState, useEffect } from 'react';
import React from 'react';

let toastId = 0;

// Internal state holder
const useToastState = () => {
  const [toasts, setToasts] = useState([]);
  return [toasts, setToasts];
};

export const useToast = () => {
  const [, setToasts] = useToastState();

  const showToast = (message, type = 'success') => {
    const id = toastId++;
    const newToast = { id, message, type };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  return showToast;
};

// Toast Display Component (optional, add to App later)
export const ToastContainer = () => {
  const [toasts] = useToastState();

  return (
    React.createElement('div', { className: 'fixed bottom-4 right-4 z-50 space-y-2' },
      toasts.map((t) => 
        React.createElement('div', {
          key: t.id,
          className: `p-4 rounded-lg shadow-lg text-white max-w-xs ${
            t.type === 'error' ? 'bg-red-500' : 'bg-green-500'
          }`
        }, t.message)
      )
    )
  );
};