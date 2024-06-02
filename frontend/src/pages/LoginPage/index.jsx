import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../constants/apiConstants";

const LoginPage = () => {
    const [username, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const loginUser = () => {
        const payload = {
            username: username,
            password: pass,
        };

        axios
            .post(API_BASE_URL + "/login", payload)
            .then((response) => {
                localStorage.setItem("accessToken", response.data.accessToken);
                navigate("/home"); //navigate then to home page
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("Wrong email or password!");
            });
    };

    const handleLogin = () => {
        if (!username || !pass) {
            setErrorMessage("Username and password cannot be empty!");
            return;
        }
        loginUser();
    };

    const handleRegister = () => {
        navigate("/register");
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
                <span
                    style={{
                        fontSize: 30,
                        color: "grey",
                        marginBottom: 40,
                    }}
                >
                    Login
                </span>

                <TextField
                    label="Username"
                    variant="outlined"
                    value={username}
                    style={{ marginBottom: 15, width: "50%" }}
                    onChange={(event) => setUserName(event.target.value)}
                />

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
                    onClick={handleLogin}
                >
                    Login
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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "35%",
                    height: "70%",
                    background:
                        "linear-gradient(130deg, rgba(218,50,169,1) 44%, rgba(136,0,255,1) 100%)",
                }}
            >
                <span
                    style={{
                        color: "white",
                        fontSize: 25,
                        fontWeight: "bold",
                        marginBottom: 25,
                    }}
                >
                    Welcome to CV Builder
                </span>
                <span
                    style={{
                        color: "white",
                        fontSize: 17,
                        marginBottom: 20,
                    }}
                >
                    Don't have an account?
                </span>

                <Button
                    variant="outlined"
                    onClick={handleRegister}
                    style={{
                        color: "white",
                        textTransform: "capitalize",
                        height: 50,
                        borderColor: "white",
                        borderRadius: 30,
                    }}
                >
                    Create account
                </Button>
            </Box>
        </Box>
    );
};

export default LoginPage;
