import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "./UserLogin.css";

const UserLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate network delay

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    // ✅ Simulated user object
    const userData = {
      name: formData.email.split("@")[0], // Simulated name
      email: formData.email,
    };

    // ✅ Store user info in localStorage
    localStorage.setItem("carocartUser", JSON.stringify(userData));

    const redirectTo =
      localStorage.getItem("redirectAfterLogin") || "/user/dashboard";
    localStorage.removeItem("redirectAfterLogin");

    setIsLoading(false);
    navigate(redirectTo);
  };

  return (
    <div className="user-login-container">
      <div className="user-login-card">
        <div className="login-header">
          <div className="user-icon-container">
            <FaUser className="user-icon" />
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to access your account</p>
        </div>

        {error && (
          <div className="error-message">
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className={error ? "error-input" : ""}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
                className={error ? "error-input" : ""}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? (
              <span className="spinner"></span>
            ) : (
              <>
                Sign In <FaArrowRight className="button-icon" />
              </>
            )}
          </button>
        </form>

        <div className="signup-link">
          Don't have an account? <a href="/register">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
