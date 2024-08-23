"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Transition } from "@headlessui/react";

const Login = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [resendLoading, setResendLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendOtp = async () => {
    setLoading(true);
    setError(null);
    try {
      await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });
      setOtpSent(true);
    } catch (error) {
      setError("Failed to send OTP. Please try again.");
    }
    setLoading(false);
  };

  const handleResendOtp = async () => {
    setResendLoading(true);
    setError(null);
    try {
      await fetch("/api/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });
    } catch (error) {
      setError("Failed to resend OTP. Please try again.");
    }
    setResendLoading(false);
  };

  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, otp }),
      });
      router.push("/"); // Redirect to home page
    } catch (error) {
      setError("Failed to verify OTP. Please check your code.");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        {error && (
          <Transition
            show={!!error}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-red-500 text-white p-3 rounded-md mb-4 text-center">
              {error}
            </div>
          </Transition>
        )}
        {!otpSent ? (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your phone number"
              required
            />
            <button
              onClick={handleSendOtp}
              className={`mt-4 w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 transition ease-in-out duration-200 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </div>
        ) : (
          <div>
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter the OTP sent to your phone"
                required
              />
              <button
                type="submit"
                className={`w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 transition ease-in-out duration-200 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
            <button
              onClick={handleResendOtp}
              className={`mt-4 w-full px-4 py-3 bg-gray-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 transition ease-in-out duration-200 ${
                resendLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={resendLoading}
            >
              {resendLoading ? "Resending OTP..." : "Resend OTP"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
