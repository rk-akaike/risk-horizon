"use client";

import { useState, ChangeEvent, FormEvent } from "react";

const Home = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [panNumber, setPanNumber] = useState<string>("");
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
    formData.append("epfoNumber", epfoNumber);
    if (file) formData.append("file", file);
    await fetch("/api/login", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
