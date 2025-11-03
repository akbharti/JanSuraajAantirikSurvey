import React from "react";

const LongAnswerQuestion = ({
  value,
  onChange,
  error,
  question = "Q.10: आगामी विधानसभा चुनाव के संबंध में जन सुराज के लिए आपका कोई सुझाव क्या है?"
}) => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6">
      <label className="mb-2 font-medium text-gray-900">{question} <span className="text-red-500">*</span></label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full border p-3 rounded-md focus:outline-none resize-none min-h-[100px] ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="Type your Long  answer here... (दीर्घ उत्तर)"
        required
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </section>
  );
};

export default LongAnswerQuestion;
