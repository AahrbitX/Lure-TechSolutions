"use client";

import React from "react";

interface TestimonialCardProps {
  message: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ message, author }) => {
  return (
    <div className="w-full flex justify-center">
      <div>
        <p className="text-white text-lg">{message}</p>
        <h3 className="text-white text-sm mt-2">- {author}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
