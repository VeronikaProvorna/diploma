import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../constants/apiConstants";
import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../App";
import { getDecodedToken } from "../../utils/getDecodedToken";

const HomePage = () => {
    const [templates, setTemplates] = useState([]);
    const { setTemplateId, setUserData } = useContext(UserDataContext);
    const navigate = useNavigate();

    useEffect(() => {
        const idFromToken = getDecodedToken();

        axios
            .get(`${API_BASE_URL}/templates/user/${idFromToken._id}`)
            .then((response) => {
                setTemplates(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleLogout = () => {
        localStorage.setItem("accessToken", "");
        navigate("/");
    };

    const handleCreateCV = (templateId) => {
        setUserData({});
        setTemplateId(templateId);
        navigate("/builder");
    };

    const handleDeleteTemplate = (id) => {
        axios
            .delete(`${API_BASE_URL}/templates/${id}`)
            .then((response) => {
                console.log("template deleted: ", response.data);
                setTemplates((prevTemplates) =>
                    prevTemplates.filter((template) => template._id !== id)
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Box sx={{ display: "flex" }}>
            <Box
                sx={{
                    width: "20vw",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "100vh",
                    background:
                        "linear-gradient(130deg, rgba(218,50,169,1) 44%, rgba(136,0,255,1) 100%)",
                }}
            >
                <Button
                    variant="outlined"
                    style={{
                        color: "white",
                        textTransform: "capitalize",
                        height: 50,
                        width: 150,
                        fontSize: 16,
                        borderColor: "white",
                        marginTop: 30,
                        marginBottom: 30,
                        borderRadius: 30,
                    }}
                    onClick={handleLogout}
                >
                    Logout
                </Button>

                <Button
                    variant="contained"
                    style={{
                        color: "white",
                        fontSize: 16,
                        width: 150,
                        backgroundColor: "#655DBB",
                        textTransform: "capitalize",
                        height: 50,
                        borderColor: "white",
                        borderRadius: 30,
                    }}
                    onClick={() => handleCreateCV(null)}
                >
                    Create new CV
                </Button>
            </Box>
            <Box
                sx={{
                    width: "80vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    paddingX: 10,
                    backgroundColor: "#F5F5F5",
                }}
            >
                <span
                    style={{
                        fontSize: 35,
                        color: "#3C4048",
                        marginTop: 30,
                        fontWeight: "bold",
                        marginBottom: 25,
                    }}
                >
                    CV Builder
                </span>
                <span
                    style={{
                        fontSize: 21,
                        color: "#3C4048",
                        marginBottom: 25,
                    }}
                >
                    Your resumes:
                </span>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                    }}
                >
                    {templates?.map((template) => (
                        <div
                            style={{
                                width: "200px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                background:
                                    "linear-gradient(130deg, rgba(218,50,169,1) 44%, rgba(136,0,255,1) 100%)",

                                padding: "5px",
                                margin: "10px",
                                color: "white",
                            }}
                            onClick={() => handleCreateCV(template._id)}
                        >
                            <span style={{ marginBottom: "6px" }}>
                                {template.name}
                            </span>

                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteTemplate(template._id);
                                }}
                                variant="outlined"
                                style={{
                                    color: "white",
                                    textTransform: "capitalize",
                                    height: 50,
                                    width: 150,
                                    fontSize: 16,
                                    borderColor: "white",
                                    marginTop: 30,
                                    marginBottom: 30,
                                    borderRadius: 30,
                                }}
                            >
                                Delete
                            </Button>
                        </div>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
