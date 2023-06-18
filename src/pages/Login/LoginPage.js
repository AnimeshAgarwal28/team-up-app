import React, { useState } from 'react';
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
} from '@mui/material';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  const [activeSection, setActiveSection] = useState('login');

  const handleToggleSection = () => {
    setActiveSection(activeSection === 'login' ? 'signup' : 'login');
  };

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [customGender, setCustomGender] = useState('');
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
    if (value !== 'custom') {
      setCustomGender('');
    }
  };

  const handleCustomGenderChange = (e) => {
    const value = e.target.value;
    setCustomGender(value);
  };

  const handleLogin = () => {
    // TODO: Implement login functionality
    console.log('Login clicked');
  };

  const handleSignup = () => {
    // TODO: Implement signup functionality
    console.log('Signup clicked');
  };

  // Customize the theme
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3', // Update primary color
      },
      secondary: {
        main: '#f44336', // Update secondary color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="login-page">
        <h1 className="page-title">Team Up</h1>
        <div className="forms-container">
          <div className={`login-form ${activeSection === 'signup' ? 'form-hidden' : ''}`}>
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
            <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
              Login
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleToggleSection} fullWidth>
              Sign Up
            </Button>
          </div>
          <div className={`signup-form ${activeSection === 'login' ? 'form-hidden' : ''}`}>
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
              error={passwordError}
              helperText={passwordError ? 'Passwords do not match' : ''}
              fullWidth
              className="input-field"
            />
            <TextField
              type="text"
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
              InputLabelProps={{
                shrink: true,
              }}
              className="input-field"
            />
            <FormControl component="fieldset" className="input-field">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={gender}
                onChange={handleGenderChange}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="custom" control={<Radio />} label="Custom Gender" />
              </RadioGroup>
              {gender === 'custom' && (
                <TextField
                  type="text"
                  label="Enter Custom Gender"
                  variant="outlined"
                  value={customGender}
                  onChange={handleCustomGenderChange}
                  fullWidth
                  className="input-field"
                />
              )}
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleSignup} fullWidth>
              Sign Up
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleToggleSection} fullWidth>
              Login
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;
