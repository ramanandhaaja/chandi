import React, { useState } from "react";
import { apiSignup } from "@/lib/api"; // <-- Add this line
import Image from "next/image";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [positionType, setPositionType] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await apiSignup({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        // You can add verification_url here if needed
      });
      setSuccess(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCountry("");
      setPositionType("");
      setOrganization("");
      setMessage("");
      setPassword("");
    } catch (err) {
      let message = "Registration failed. Please try again.";
      if (err && typeof err === "object" && "message" in err) {
        message = (err as any).message;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (  
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          {/* Country */}
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none appearance-none"
          >
            <option value="" disabled className="text-[#210000]">
              Select Country
            </option>
            <option value="indonesia">Indonesia</option>
            <option value="malaysia">Malaysia</option>
            <option value="singapore">Singapore</option>
            <option value="thailand">Thailand</option>
            <option value="philippines">Philippines</option>
            <option value="other">Other</option>
          </select>
          {/* Position Type */}
          <select
            value={positionType}
            onChange={(e) => setPositionType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none appearance-none"
          >
            <option value="" disabled className="text-[#210000]">
              Position Type
            </option>
            <option value="executive">Executive</option>
            <option value="manager">Manager</option>
            <option value="staff">Staff</option>
            <option value="student">Student</option>
            <option value="other">Other</option>
          </select>

          {/* Organization */}
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Organization / Institution"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="md:col-span-2">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <textarea
              placeholder="Message (Optional)"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none resize-vertical"
            />
          </div>
        </div>
            {loading && (
              <div className="mb-4 text-green-600 text-center">
                <br/>Registering...
              </div>
            )}
            {success && (
              <div className="mb-4 text-green-600 text-center">
                <br/>Registration successful!
              </div>
            )}
            {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <div 
            //onClick={!loading && firstName && lastName && email && password ? handleRegister : undefined}
            className={`w-full flex justify-center cursor-pointer ${(!firstName || !lastName || !email || !password || loading) ? 'opacity-50' : ''}`}
          >
            <Image
              src="/images/register/button_submit.png"
              alt="Register"
              width={400}
              height={110}
              className="object-contain"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
