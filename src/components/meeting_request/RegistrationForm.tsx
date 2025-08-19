import React, { useState } from "react";
import { apiSignup } from "@/lib/api"; // <-- Add this line
import Image from "next/image";

// Comprehensive country list (ISO-3166 country names)
const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria",
  "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
  "Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Congo-Brazzaville)","Costa Rica",
  "Côte d’Ivoire","Croatia","Cuba","Cyprus","Czechia","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic",
  "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland",
  "France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea",
  "Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq",
  "Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait",
  "Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
  "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico",
  "Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru",
  "Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman",
  "Pakistan","Palau","Palestine State","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
  "Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe",
  "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia",
  "South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria",
  "Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan",
  "Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City",
  "Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [positionType, setPositionType] = useState("");
  const [meetingWith, setMeetingWith] = useState("");
  const [message, setMessage] = useState("");
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
        meeting_with: meetingWith,
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
      setMeetingWith("");
      setMessage("");
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
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
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

          {/* who meeting with */}
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Who are you meeting with?"
              value={meetingWith}
              onChange={(e) => setMeetingWith(e.target.value)}
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
        {/* Submit Button
        <div className="flex justify-center mt-6">
          <div 
            //onClick={!loading && firstName && lastName && meetingWith && email ? handleRegister : undefined}
            className={`w-full flex justify-center cursor-pointer ${(!firstName || !lastName || !email || !meetingWith || loading) ? 'opacity-50' : ''}`}
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
         */}
      </div>
    </div>
  );
}

export default RegistrationForm;
