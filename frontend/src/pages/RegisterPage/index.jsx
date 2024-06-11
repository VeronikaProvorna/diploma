import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../constants/apiConstants";

const RegisterPage = () => {
    const [username, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const registerUser = () => {
        const payload = {
            username: username,
            password: pass,
        };

        axios
            .post(API_BASE_URL + "/users/register", payload)
            .then((response) => {
                navigate("/"); //navigate then to login page
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleRegister = () => {
        if (!username || !pass) {
            setErrorMessage("Username and password cannot be empty!");
            return;
        }
        registerUser();
    };

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F5F5F5",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "35%",
                    backgroundColor: "white",
                    height: "70%",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
            >
                <span style={{ fontSize: 30, color: "grey", marginBottom: 40 }}>
                    Register
                </span>
                <TextField
                    label="Username"
                    variant="outlined"
                    value={username}
                    style={{ marginBottom: 15, width: "50%" }}
                    onChange={(event) => setUserName(event.target.value)}
                ></TextField>
                <TextField
                    label="Password"
                    variant="outlined"
                    style={{ marginBottom: 35, width: "50%" }}
                    value={pass}
                    onChange={(event) => setPass(event.target.value)}
                ></TextField>
                <Button
                    variant="contained"
                    style={{
                        width: "25%",
                        textTransform: "capitalize",
                        height: 50,
                        fontSize: 17,
                        borderRadius: 30,
                        background:
                            "linear-gradient(130deg, rgba(218,50,169,1) 44%, rgba(136,0,255,1) 100%)",
                    }}
                    onClick={handleRegister}
                >
                    Create
                </Button>
                {errorMessage && (
                    <span
                        style={{
                            color: "red",
                            marginTop: 20,
                        }}
                    >
                        {errorMessage}
                    </span>
                )}
            </Box>
        </Box>
    );
};

export default RegisterPage;
