import React from "react";
import mcqQuestions from "../Resource/mcq_questions.json";

const MCQQuestions = ({ values, onMCQChange, errors }) => {
  const handleChange = (qId, option) => {
    onMCQChange({ ...values, [qId]: option });
  };

  return (
    <section className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-1">Multiple Choice Questions</h2>
      <p className="text-gray-500 mb-5">Please select one option for each question (केवल एक चुनें)</p>
      {mcqQuestions.map((q, idx) => (
        <div key={q.id} className="mb-4">
          <div className="mb-2 font-medium text-gray-900">{idx + 8}. {q.text}</div>
          <div className="flex flex-col space-y-2 mt-1">
            {q.options.map((option) => (
              <label key={option} className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  name={`mcq-${q.id}`}
                  value={option}
                  checked={values[q.id] === option}
                  onChange={() => handleChange(q.id, option)}
                  className={errors && errors[`mcq_${q.id}`] ? "border-red-500" : ""}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {errors && errors[`mcq_${q.id}`] && (
            <p className="text-red-500 text-sm mt-1">{errors[`mcq_${q.id}`]}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default MCQQuestions;
