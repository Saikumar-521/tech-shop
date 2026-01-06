import { useState } from "react";

export default function SignIn({ onSuccess }) {

  const [form, setForm] = useState({
    name: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      form.name === savedUser.name &&
      form.password === savedUser.password
    ) {
      setError("");
      alert("Login Successful");
      onSuccess?.();  
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleLogin}>

      <div className="mb-3">
        <label className="form-label fw-semibold">Username</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </div>

      {error && <p className="text-danger text-center">{error}</p>}

      <button type="submit" className="btn btn-danger  w-100 mt-2">
        Login
      </button>

    </form>
  );
}
