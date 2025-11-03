import React, { useState, useEffect } from "react";
import HeaderBanner from "./component/HeaderBanner";
import UserForm from "./component/UserForm";
import DistrictSelector from "./component/DistrictSelector";
import RatingQuestions from "./component/RatingQuestions";
import MCQQuestions from "./component/MCQQuestions";
import Notification from "./component/Notification"; // see previous answer for code
import surveyQuestions from "./Resource/survey_questions.json";
import mcqQuestions from "./Resource/mcq_questions.json";
import LongAnswerQuestion from "./component/LongAnswerQuestion";

function App() {
  const [user, setUser] = useState({ name: "", phone: "" });
  const [geo, setGeo] = useState({ district: "", assembly: "" });
  const [ratings, setRatings] = useState({});
  const [mcqs, setMcqs] = useState({});
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [longAnswer, setLongAnswer] = useState("");

  // Error clearing helpers
  const clearErrorForField = (fieldKey) => {
    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors[fieldKey]
      return newErrors
    })
  }

  // On Input Change Handlers
  const handleUserChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
    clearErrorForField(field);
  };

  const handleGeoChange = (field, value) => {
    setGeo((prev) => ({ ...prev, [field]: value }));
    clearErrorForField(field);
  };

  const handleRatingsChange = (answers) => {
    setRatings(answers);
    Object.keys(answers).forEach((id) => clearErrorForField(`rating_${id}`));
  };

  const handleMCQChange = (answers) => {
    setMcqs(answers);
    Object.keys(answers).forEach((id) => clearErrorForField(`mcq_${id}`));
  };

  // Validation
  const validateAll = () => {
    const errs = {};
    // User validation
    if (!user.name.trim()) errs.name = "Name is required";
    if (!user.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(user.phone)) errs.phone = "Phone number must be 10 digits";
    // Geo validation
    if (!geo.district) errs.district = "District is required";
    if (!geo.assembly) errs.assembly = "Assembly is required";
    if (!geo.address || !geo.address.trim()) errs.address = "Address is required";
    // Ratings and MCQ
    surveyQuestions.forEach((q) => {
      if (!ratings[q.id]) errs[`rating_${q.id}`] = "Please select rating";
    });
    mcqQuestions.forEach((q) => {
      if (!mcqs[q.id]) errs[`mcq_${q.id}`] = "Please select an option";
    });
    if (!longAnswer.trim()) errors.longAnswer = "This field is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Reset form for new entry
  const clearAllFields = () => {
    setUser({ name: "", phone: "" });
    setGeo({ district: "", assembly: "" });
    setRatings({});
    setMcqs({});
    setLongAnswer("");
  };

  // const apiUrl = 'https://script.google.com/macros/s/AKfycbxqG2mAk1yVS0lTkWB44zVSYA0yR6IYWEDzpVSF_ZE3MEFPWxCqQusb-W4HEo9DFFM/exec';

  // const apiUrl = 'https://script.google.com/macros/s/AKfycbxqG2mAk1yVS0lTkWB44zVSYA0yR6IYWEDzpVSF_ZE3MEFPWxCqQusb-W4HEo9DFFM/exec';
  const apiUrl = 'https://script.google.com/macros/s/AKfycbzy2U8RCWMEdEvF3kcCmYtWGB_sd3bpdqnAgYWGfsEL_5s0hGvkUAksF4-f4uHuPASH/exec';
  
const sendDataToSheet = async (jsonData) => {
  return new Promise((resolve) => {
    try {
      // Create a hidden form
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = apiUrl;
      form.target = 'hidden_iframe';
      form.style.display = 'none';
      
      // Create hidden iframe to receive the response
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      
      // Add form fields
      Object.entries(jsonData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = typeof value === 'object' ? JSON.stringify(value) : value;
        form.appendChild(input);
      });
      
      // Handle iframe load event
      iframe.onload = () => {
        // Clean up
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        
        // Assume success since Google Apps Script doesn't send back proper responses
        resolve({ status: "success", message: "Data submitted successfully" });
      };
      
      // Add elements to DOM and submit
      document.body.appendChild(iframe);
      document.body.appendChild(form);
      form.submit();
      
      // Timeout fallback
      setTimeout(() => {
        resolve({ status: "success", message: "Data submitted (timeout fallback)" });
      }, 3000);
      
    } catch (error) {
      console.error('Error sending to Google Sheets:', error);
      resolve({ status: "error", message: error.message });
    }
  });
};


  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateAll()) {
      const formData = { user, geo, ratings, mcqs, longAnswer };
      const result = await sendDataToSheet(formData);
      if (result.status === "success") {
        setNotification({ type: "success", message: "Survey submitted successfully" });
        clearAllFields();
        console.log("Submitted data:", formData);
      } else {
        setNotification({ type: "error", message: "Failed to submit data" });
      }
    } else {
      setNotification({ type: "error", message: "Please fix validation errors" });
    }
  };


  // Auto-dismiss notification after 3.5s
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-white to-amber-50 p-4 md:p-6">
      <HeaderBanner />
      {notification && (
        <Notification
          {...notification}
          onClose={() => setNotification(null)}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto mt-8 backdrop-blur rounded-xl shadow-xl ring-2 ring-amber-300/50 p-6 md:p-8 space-y-6"
        style={{ background: 'radial-gradient(circle, white 0%, rgba(251, 191, 36, 0.2) 100%)' }}
        noValidate
      >
        <UserForm values={user} onUserChange={handleUserChange} errors={errors} />
        <DistrictSelector values={geo} onDistrictChange={handleGeoChange} errors={errors} />
        <RatingQuestions values={ratings} onRatingChange={handleRatingsChange} errors={errors} />
        <MCQQuestions values={mcqs} onMCQChange={handleMCQChange} errors={errors} />
        <LongAnswerQuestion
          value={longAnswer}
          onChange={val => {
            setLongAnswer(val);
            setErrors(prev => { const e = { ...prev }; delete e.longAnswer; return e; });
          }}
          error={errors.longAnswer}
        />


        <div className="text-center pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[rgb(247,199,27)] to-orange-500 text-white font-medium rounded-lg shadow hover:from-amber-500 hover:to-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 active:from-amber-600 active:to-orange-700 transition"
          >
            Submit Survey
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
