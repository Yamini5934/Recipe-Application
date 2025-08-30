
import React, { useState } from 'react';


// Allows users to submit a rating and comment for a recipe
const FeedbackForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <label>
        Rate (1-5):
        <input
          type="number"
          value={rating}
          min="1"
          max="5"
          onChange={e => setRating(Number(e.target.value))}
          required
        />
      </label>
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          rows="3"
        />
      </label>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
