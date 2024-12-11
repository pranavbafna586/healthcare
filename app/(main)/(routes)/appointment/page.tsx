"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import for app router

const MultiStepForm: React.FC = () => {
  const router = useRouter(); // Initialize router
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    allergies: "",
    chronicDiseases: "",
    idType: "",
    idNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrevious = () => setStep((prev) => prev - 1);
  
  // Update handleSubmit to redirect to /newappointment
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/newappointment'); // Redirect after form submission

  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Personal Information</h2>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.age}
              onChange={handleChange}
            />
            <select
              name="gender"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Medical Information</h2>
            <input
              type="text"
              name="bloodGroup"
              placeholder="Enter your blood group (e.g., A+, O-)"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.bloodGroup}
              onChange={handleChange}
            />
            <input
              type="text"
              name="allergies"
              placeholder="Enter any allergies (if none, leave blank)"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.allergies}
              onChange={handleChange}
            />
            <input
              type="text"
              name="chronicDiseases"
              placeholder="Enter any chronic diseases (if none, leave blank)"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.chronicDiseases}
              onChange={handleChange}
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Identification Information</h2>
            <select
              name="idType"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.idType}
              onChange={handleChange}
            >
              <option value="">Select ID type</option>
              <option value="Aadhaar">Aadhaar</option>
              <option value="Passport">Passport</option>
              <option value="Driver's License">Driver&apos;s License</option>
            </select>
            <input
              type="text"
              name="idNumber"
              placeholder="Enter your ID number"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={formData.idNumber}
              onChange={handleChange}
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Review & Submit</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Age:</strong> {formData.age}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
            <p><strong>Blood Group:</strong> {formData.bloodGroup}</p>
            <p><strong>Allergies:</strong> {formData.allergies}</p>
            <p><strong>Chronic Diseases:</strong> {formData.chronicDiseases}</p>
            <p><strong>ID Type:</strong> {formData.idType}</p>
            <p><strong>ID Number:</strong> {formData.idNumber}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Form Section - Left Side */}
      <div className="w-1/2 flex items-center justify-center p-8 overflow-auto">
        <div className="w-full max-w-md mx-auto"> 
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            {renderStep()}
            <div className="flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Previous
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ml-auto"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Image Section - Right Side */}
      <div className="w-1/2 h-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1673953509982-6ce6bfa5bdd6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Description"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MultiStepForm;
