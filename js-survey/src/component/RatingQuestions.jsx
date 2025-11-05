import React from 'react'
import questions from '../Resource/survey_questions.json'

const RatingQuestions = ({ values, onRatingChange, errors }) => {
  const handleChange = (id, value) => {
    onRatingChange({ ...values, [id]: value })
  }

  return (
    <section className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-1">रेटिंग प्रश्न</h2>
      <p className="text-gray-500 mb-3"> रेटिंग दें: 0 (न्यूनतम प्रभाव / अनभिज्ञ) से 9 (सर्वाधिक प्रभावशाली)</p>
      {questions.map((q, idx) => (
        <div key={q.id} className="mb-4">
          <div className="mb-2 font-medium text-gray-900">{idx + 1}. {q.text}</div>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <label key={num} className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={num}
                  checked={values[q.id] === num}
                  onChange={() => handleChange(q.id, num)}
                  className={`cursor-pointer ${errors && errors[`rating_${q.id}`] ? 'border-red-500' : ''}`}
                />
                <span className="text-sm sm:text-base">{num}</span>
              </label>
            ))}
          </div>
          {errors && errors[`rating_${q.id}`] && (
            <div className="text-red-500 text-sm mt-1">{errors[`rating_${q.id}`]}</div>
          )}
        </div>
      ))}
    </section>
  )
}

export default RatingQuestions
