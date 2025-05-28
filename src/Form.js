import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [feedbackList, setFeedbackList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.feedback) {
      alert("Please fill out all fields.");
      return;
    }

    setFeedbackList([
      ...feedbackList,
      {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        feedback: formData.feedback,
      },
    ]);

    setFormData({
      name: "",
      email: "",
      feedback: "",
    });

  };

  const handleDelete = (id) => {
    setFeedbackList(feedbackList.filter((feedback) => feedback.id !== id));
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          We Value Your Feedback
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Share your thoughts and help us improve your shopping experience.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            />
          </div>

          <div className="relative">
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Your Feedback"
              rows="4"
              className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 text-white font-semibold text-lg rounded-full hover:bg-indigo-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Feedback
            </button>
          </div>
        </form>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbackList.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 relative"
            >
              <button
                onClick={() => handleDelete(feedback.id)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feedback.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{feedback.email}</p>
              <p className="text-gray-600">{feedback.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
