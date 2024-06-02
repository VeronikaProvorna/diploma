import React from "react";
import { UserDataContext } from "../../../../../../App";
import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Divider from "@mui/material/Divider";
import {
    handleDelete,
    handleInputData,
} from "../../../../../../utils/handleInputFunc";

const Certificates = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const [newCertificate, setNewCertificate] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const handleAddCertificate = () => {
        if (newCertificate.trim() !== "") {
            setUserData((prevUserData) => ({
                ...prevUserData,
                certificates: [
                    ...(prevUserData.certificates || []),
                    { name: newCertificate, description: newDescription },
                ],
            }));
            setNewCertificate("");
            setNewDescription("");
        }
    };

    const inputCertificateField = (
        certificate = newCertificate,
        description = newDescription,
        index = null
    ) => {
        return (
            <>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Certificate"
                    variant="outlined"
                    sx={{ mr: 2, mb: 2 }}
                    value={certificate}
                    onChange={(event) =>
                        handleInputData(
                            event.target.value,
                            setNewCertificate,
                            setUserData,
                            "certificates",
                            "name",
                            index
                        )
                    }
                />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    multiline
                    minRows={2}
                    sx={{ mr: 2 }}
                    value={description}
                    onChange={(event) =>
                        handleInputData(
                            event.target.value,
                            setNewDescription,
                            setUserData,
                            "certificates",
                            "description",
                            index
                        )
                    }
                />
            </>
        );
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                pb: 1,
                bgcolor: "background.paper",
            }}
        >
            {userData.certificates &&
                userData.certificates.map((certificate, index) => (
                    <Box
                        sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                    >
                        {inputCertificateField(
                            certificate.name,
                            certificate.description,
                            index
                        )}
                        <div
                            style={{
                                alignSelf: "flex-end",
                                marginTop: 3,
                                marginBottom: 3,
                            }}
                        >
                            <IconButton
                                aria-label="delete"
                                size="large"
                                onClick={() =>
                                    handleDelete(
                                        setUserData,
                                        "certificates",
                                        index
                                    )
                                }
                                variant="outlined"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                        <Divider
                            sx={{
                                mb: 1,
                                borderBottomWidth: 2,
                                backgroundColor: "#C6DCBA",
                            }}
                        />
                    </Box>
                ))}
            <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                {inputCertificateField()}
                <div style={{ alignSelf: "center", marginTop: 3 }}>
                    <IconButton
                        size="large"
                        onClick={handleAddCertificate}
                        variant="outlined"
                    >
                        <AddCircleOutlineRoundedIcon />
                    </IconButton>
                </div>
            </Box>
        </Box>
    );
};

export default Certificates;
