import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form fields
        const validationErrors = {};
        if (!formData.username) {
          validationErrors.username = 'Username is required';
        }
        if (!formData.password) {
          validationErrors.password = 'Password is required';
        }
    
        setErrors(validationErrors);
    
        // If no validation errors, submit the form
        if (Object.keys(validationErrors).length === 0) {
          // Submit form logic goes here
          navigate("/dashboard");
          console.log('Form submitted:', formData);
        }
      };

    return (
        <>
            <div className="loginmain">
                <div className="sideImage">
                </div>
                <div className="wrapper">
                    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4, p: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                error={!!errors.username}
                                helperText={errors.username}
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={errors.password}
                                margin="normal"
                            />
                            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, alignSelf: 'center' }}>
                                Login
                            </Button>
                        </form>
                        <Box sx={{ mt: 2 }}>
                            <Typography>
                                Don't have an account? <Link to="/">Sign up here</Link>
                            </Typography>
                        </Box>
                    </Box>
                </div>
            </div>
        </>
    )
};

export default Login;