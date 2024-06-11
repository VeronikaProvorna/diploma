import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PDFTemplateViewer from "./PDFTemplateViewer";
import MenuPanel from "./MenuPanel";
import { UserDataContext } from "../../../../App";
import axios from "axios";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Button,
    Alert,
    Snackbar,
} from "@mui/material";

import { API_BASE_URL } from "../../../../constants/apiConstants";
import { getDecodedToken } from "../../../../utils/getDecodedToken";
import { useNavigate } from "react-router-dom";

const templates = ["Linear Template", "Column Template"];

const TemplatesViewer = ({ templateName }) => {
    const { userData, templateId, setTemplateId } = useContext(UserDataContext);

    const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [numberSaveClicked, setNumberSaveClicked] = useState(0);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        if (templateName) {
            setSelectedTemplate(templateName);
        }
    }, [templateName]);

    const handleTemplateChange = (templateName) => {
        setSelectedTemplate(templateName);
    };

    const handleCloseError = () => {
        setError("");
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleSaveAndGoOut = () => {
        handleSave();
        setDialogOpen(false);
        navigate("/home");
    };

    const handleGoOutWithoutSaving = () => {
        setDialogOpen(false);
        navigate("/home");
    };

    const handleGoHome = () => {
        if (!numberSaveClicked) {
            setDialogOpen(true);
        } else {
            navigate("/home");
        }
    };

    const handleSave = () => {
        if (!userData.title) {
            setError("Please provide a title for the template before saving.");
            return;
        }

        setNumberSaveClicked((prev) => prev + 1);

        const decodedToken = getDecodedToken();

        const templateData = {
            createdBy: decodedToken._id,
            content: JSON.stringify(userData),
            name: selectedTemplate,
            title: userData.title,
        };

        if (templateId) {
            // Update existing template
            axios
                .put(
                    `${API_BASE_URL}/templates/edit/${templateId}`,
                    templateData
                )
                .then(() => {
                    setSnackbarMessage("Template updated successfully!");
                    setSnackbarOpen(true);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            // Create new template
            axios
                .post(`${API_BASE_URL}/templates/create`, {
                    createdBy: decodedToken._id,
                    content: JSON.stringify(userData),
                    name: selectedTemplate,
                    title: userData.title,
                })
                .then((response) => {
                    setTemplateId(response.data._id);
                    setSnackbarMessage("Template saved successfully!");
                    setSnackbarOpen(true);
                })
                .catch((error) => {
                    console.error("Error saving template:", error);
                });
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <MenuPanel
                onTemplateChange={handleTemplateChange}
                onSave={handleSave}
                onHome={handleGoHome}
                templates={templates}
                selectedTemplate={selectedTemplate}
            />

            <PDFTemplateViewer selectedTemplate={selectedTemplate} />
            {error && (
                <Dialog open={!!error} onClose={handleCloseError}>
                    <DialogContent>
                        <DialogContentText>{error}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseError} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
            <Dialog open={dialogOpen} onClose={handleDialogClose}>
                <DialogContent>
                    <DialogContentText>
                        You have unsaved changes. Do you want to save before
                        leaving?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSaveAndGoOut} color="primary">
                        Save and Go Out
                    </Button>
                    <Button
                        onClick={handleGoOutWithoutSaving}
                        color="secondary"
                    >
                        Go Out Without Saving
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default TemplatesViewer;
