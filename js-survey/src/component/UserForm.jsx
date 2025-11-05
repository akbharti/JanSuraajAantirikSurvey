import React from "react";

const UserForm = ({ values, onUserChange, errors }) => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-1">व्यक्तिगत जानकारी</h2>
      <p className="text-gray-500 mb-5">कृपया अपनी संपर्क जानकारी प्रदान करें</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            पूरा नाम <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(e) => onUserChange("name", e.target.value)}
            placeholder="अपना पूरा नाम दर्ज करें"
            className={`w-full border p-2 rounded-md focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block font-semibold mb-1">
            मोबाइल नंबर <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="text"
            maxLength={10}
            value={values.phone}
            onChange={(e) => onUserChange("phone", e.target.value)}
            placeholder="10 अंकों का मोबाइल नंबर दर्ज करें"
            className={`w-full border p-2 rounded-md focus:outline-none ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>
    </section>
  );
};

export default UserForm;
