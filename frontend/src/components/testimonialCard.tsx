import React from "react";

interface TestimonialCardProps {
  message: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ message, author }) => {
  return (
    <div className="w-full flex justify-center">
      <div>
        <p className="text-white testimonial-message">{message}</p>
        <h3 className="text-white testimonial-author">- {author}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
