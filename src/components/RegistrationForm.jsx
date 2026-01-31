import { useState } from "react";

function RegistrationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password:"",
    phone: "",
    dob: "",
    address: "",
    photo: null,
  });

  // handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle image upload
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        photo: URL.createObjectURL(file),
      });
    }
  };

  return (
    <form
      onSubmit={(e) => onSubmit(e, formData)}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">Registration Form</h2>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="input"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="input"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="input"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="input"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="dob"
        className="input"
        value={formData.dob}
        onChange={handleChange}
        required
      />

      <textarea
        name="address"
        placeholder="Address"
        className="input"
        value={formData.address}
        onChange={handleChange}
        required
      ></textarea>

      <input type="file" accept="image/*" onChange={handlePhoto} required />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default RegistrationForm;
