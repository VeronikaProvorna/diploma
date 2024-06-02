import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PDFTemplateViewer from "./PDFTemplateViewer";
import MenuPanel from "./MenuPanel";
import { UserDataContext } from "../../../../App";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { API_BASE_URL } from "../../../../constants/apiConstants";

const templates = ["Linear Template", "Column Template"];

const TemplatesViewer = ({ templateName }) => {
    const { userData, templateId, setTemplateId } = useContext(UserDataContext);

    const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

    useEffect(() => {
        if (templateName) {
            setSelectedTemplate(templateName);
        }
    }, [templateName]);

    const handleTemplateChange = (templateName) => {
        setSelectedTemplate(templateName);
    };

    const handleSave = () => {
        const token = localStorage.getItem("accessToken");

        const decodedToken = jwtDecode(token);
        const idFromToken = decodedToken._id;

        const templateData = {
            createdBy: idFromToken,
            content: JSON.stringify(userData),
            name: selectedTemplate,
        };

        if (templateId) {
            // Update existing template
            axios
                .put(
                    `${API_BASE_URL}/templates/edit/${templateId}`,
                    templateData
                )
                .then((response) => {
                    console.log("template edited: ", response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            // Create new template
            axios
                .post(`${API_BASE_URL}/templates/create`, {
                    createdBy: idFromToken,
                    content: JSON.stringify(userData),
                    name: "linear template",
                })
                .then((response) => {
                    console.log("Template saved:", response.data);
                    setTemplateId(response.data._id);
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
            {
                <MenuPanel
                    onTemplateChange={handleTemplateChange}
                    onSave={handleSave}
                    templates={templates}
                    selectedTemplate={selectedTemplate}
                />
            }

            {<PDFTemplateViewer selectedTemplate={selectedTemplate} />}
        </Box>
    );
};

export default TemplatesViewer;
