"use client";
import {ChevronDown } from "lucide-react";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  projectDescription: string;
  budgetRange: string;
}

const ProjectForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    projectType: "",
    projectDescription: "",
    budgetRange: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="md:py-0 py-0 min-h-screen ">
      <div className="container mx-0 px-0 w-full">
        <form
          onSubmit={handleSubmit}
          className="max-w-full mx-auto bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
        >
          <div className="p-5 grid justify-center gap-4 text-center mb-10">
            <h1
              className="text-2xl sm:text-4xl font-bold text-center text-transparent bg-clip-text 
           bg-gradient-to-r from-gray-300 via-white to-gray-400"
            >
              Let&apos;s Talk Business
            </h1>
            <p className="text-normal md:text-xl sm:text-lg text-gray-300">
              Ready to transform your ideas into reality? Get in touch with our
              team today.
            </p>
          </div>

          {/* Row 1: Full Name | Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FormField
              label="Full Name"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
            />
            <FormField
              label="Email"
              name="email"
              placeholder="info@example.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Row 2: Company | Project Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FormField
              label="Company / Organization"
              name="company"
              placeholder="Pimjo Labs"
              value={formData.company}
              onChange={handleChange}
            />
            <FormSelect
              label="Project Type"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              options={[
                "Web Development",
                "Mobile App",
                "UI/UX Design",
                "Digital Marketing",
              ]}
            />
          </div>

          {/* Full Width Fields */}
          <FormTextArea
            label="Project Description"
            name="projectDescription"
            placeholder="Describe your project here..."
            value={formData.projectDescription}
            onChange={handleChange}
          />

          <FormSelect
            label="Budget Range"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            options={["<$1000", "$1000-$5000", "$5000-$10,000", ">$10,000"]}
          />

          <button
            type="submit"
            className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-400 text-white font-semibold rounded-lg transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProjectForm;

// -------------------- Reusable Components --------------------

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const FormField: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg border border-gray-600 px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
    />
  </div>
);

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const FormSelect: React.FC<SelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>

    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full appearance-none bg-gray-700 text-gray-100 rounded-lg border border-gray-600 px-4 pr-10 py-3
                 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
        <ChevronDown/>
      </span>
    </div>
  </div>
);

interface TextAreaProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
}) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={5}
      className="w-full bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg border border-gray-600 px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-200 resize-none"
    />
  </div>
);
