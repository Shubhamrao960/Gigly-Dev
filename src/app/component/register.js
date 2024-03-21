import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form fields
        const validationErrors = {};
        if (!formData.name) {
            validationErrors.name = 'Name is required';
        }
        if (formData.name.length > 30) {
            validationErrors.name = 'Name must be less then 30 character';
        }
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        }
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
            validationErrors.email = 'Invalid email address';
        }
        if (!formData.phone) {
            validationErrors.phone = 'Phone number is required';
        }
        if (!formData.password) {
            validationErrors.password = 'Password is required';
        }
        if (!formData.confirmPassword) {
            validationErrors.confirmPassword = 'Confirm Password is required';
        } else if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
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
                    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4, p: 2  }}>
                        <Typography variant="h5" gutterBottom>
                            Sign Up
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                margin="normal"
                                autoComplete="off"
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                margin="normal"
                                autoComplete="off"
                            />
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                error={!!errors.phone}
                                helperText={errors.phone}
                                margin="normal"
                                autoComplete="off"
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
                                autoComplete="off"
                            />
                            <TextField
                                fullWidth
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword}
                                margin="normal"
                                autoComplete="off"
                            />
                            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2,}}>
                                Register
                            </Button>
                        </form>

                        <Box sx={{ mt: 2 }}>
                            <span sx={{ mt: 2 }}>
                                Already have a Gigly account? <Link to={"/login"}>Log in here</Link>
                            </span>
                        </Box>

                    </Box>
                </div>
            </div>
        </>
    )
}

export default Register;