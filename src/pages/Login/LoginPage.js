import React, { useState } from "react";
import {
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import blue from "@mui/material/colors/blue";
import grey from "@mui/material/colors/grey";
import "./LoginPage.css";

const LoginPage = () => {
  const [activeSection, setActiveSection] = useState("login");
  const handleToggleSection = () => {
    setActiveSection(activeSection === "login" ? "signup" : "login");
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [customGender, setCustomGender] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleLoginEmailChange = (e) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleSignupEmailChange = (e) => {
    setSignupEmail(e.target.value);
  };

  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError(e.target.value !== signupPassword);
  };

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setGender(value);
    if (value !== "custom") {
      setCustomGender("");
    }
  };

  const handleCustomGenderChange = (e) => {
    const value = e.target.value;
    setCustomGender(value);
  };

  const handleLogin = () => {
    // TODO: Implement login functionality
    console.log("Login clicked");
  };

  const handleSignup = () => {
    // TODO: Implement signup functionality
    console.log("Signup clicked");
  };

  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: blue[500],
      },
      background: {
        default: grey[900],
        paper: grey[800],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="login-page">
        <h1 className="page-title">Team Up</h1>
        <div className="forms-container">
          <div
            className={`login-form ${
              activeSection === "signup" ? "form-hidden" : ""
            }`}
          >
            <h2>Login</h2>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              value={loginEmail}
              onChange={handleLoginEmailChange}
              fullWidth
              className="input-field"
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              value={loginPassword}
              onChange={handleLoginPasswordChange}
              fullWidth
              className="input-field"
            />
            <Button variant="contained" onClick={handleLogin} fullWidth>
              Login
            </Button>
            <p className="toggle-section-link" onClick={handleToggleSection}>
              Don't have an account? Sign up
            </p>
          </div>
          <div
            className={`signup-form ${
              activeSection === "login" ? "form-hidden" : ""
            }`}
          >
            <h2>Sign Up</h2>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              value={signupEmail}
              onChange={handleSignupEmailChange}
              fullWidth
              className="input-field"
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              value={signupPassword}
              onChange={handleSignupPasswordChange}
              fullWidth
              className="input-field"
            />
            <TextField
              type="password"
              label="Confirm Password"
              variant="outlined"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              fullWidth
              className="input-field"
              error={passwordError}
              helperText={passwordError && "Passwords do not match"}
            />
            <TextField
              type="tel"
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              fullWidth
              className="input-field"
            />
            <TextField
              type="date"
              label="Date of Birth"
              variant="outlined"
              value={dateOfBirth}
              onChange={handleDateOfBirthChange}
              fullWidth
              className="input-field"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl className="gender-field">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={gender}
                onChange={handleGenderChange}
                className="input-field"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
                <FormControlLabel
                  value="custom"
                  control={<Radio />}
                  label="Custom"
                />
              </RadioGroup>
              {gender === "custom" && (
                <TextField
                  type="text"
                  label="Custom Gender"
                  variant="outlined"
                  value={customGender}
                  onChange={handleCustomGenderChange}
                  fullWidth
                  className="custom-gender-input"
                />
              )}
            </FormControl>
            <Button
              variant="contained"
              onClick={handleSignup}
              fullWidth
              disabled={!signupEmail || !signupPassword || passwordError}
            >
              Sign Up
            </Button>
            <p className="toggle-section-link" onClick={handleToggleSection}>
              Already have an account? Login
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;
