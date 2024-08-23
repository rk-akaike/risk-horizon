"use client";

import { useState, ChangeEvent, FormEvent } from "react";

const Home = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [panNumber, setPanNumber] = useState<string>("");
  const [gstNumber, setGstNumber] = useState<string>("");
  const [epfoNumber, setEpfoNumber] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("companyName", companyName);
    formData.append("panNumber", panNumber);
    formData.append("gstNumber", gstNumber);
    formData.append("epfoNumber", epfoNumber);
    if (file) formData.append("file", file);
    await fetch("/api/login", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Credit Assesment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name <span> (as per PAN)</span>
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your company name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              PAN Number
            </label>
            <input
              type="text"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your PAN number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              GST Number
            </label>
            <input
              type="text"
              value={panNumber}
              onChange={(e) => setGstNumber(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your GST number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              EPFO Number
            </label>
            <input
              type="text"
              value={epfoNumber}
              onChange={(e) => setEpfoNumber(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your EPFO number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Excel Sheet
            </label>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-indigo-700 file:bg-indigo-100 hover:file:bg-indigo-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
