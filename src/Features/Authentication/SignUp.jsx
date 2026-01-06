import { useState } from "react";

export const SignUp = ({ onSuccess }) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));

    alert("Account created successfully");
    setError("");
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSignup}>

      <div className="mb-3">
        <label className="form-label fw-semibold">Full Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
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
          placeholder="Create password"
        />
      </div>

      {error && <p className="text-danger text-center">{error}</p>}
      <button type="submit" className="btn btn-danger w-100 mt-2">
        Create Account
      </button>
      <div className="mt-3 text-center text-secondary small">
        or continue with
      </div>

     <div className="d-flex justify-content-between gap-2 mt-2">

  <button type="button" className="btn btn-light border flex-fill">
   Google
  </button>

  <button type="button" className="btn btn-primary flex-fill">
   Facebook
  </button>

  <button type="button" className="btn btn-info text-white flex-fill">
    Twitter
  </button>

</div>


    </form>
  );
};

export default SignUp;
