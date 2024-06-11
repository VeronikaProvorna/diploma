import Box from "@mui/material/Box";
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FirstTemplate from "../PDFTemplateViewer/templates/FirstTemplate";
import SecondTemplate from "../PDFTemplateViewer/templates/SecondTemplate";
import { UserDataContext } from "../../../../../App";
import { useNavigate } from "react-router-dom";
import { MenuItem, Select } from "@mui/material";

const MenuPanel = ({
    onTemplateChange,
    onSave,
    templates,
    selectedTemplate,
    onHome,
}) => {
    const { userData } = useContext(UserDataContext);

    const templatesComponents = [
        {
            name: "Linear Template",
            component: <FirstTemplate userData={userData} />,
        },
        {
            name: "Column Template",
            component: <SecondTemplate userData={userData} />,
        },
    ];

    const selectedTemplateComponent = templatesComponents.find(
        (t) => t.name === selectedTemplate
    )?.component;

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
                alignItems: "center",
                backgroundColor: "#F5F5F5",
                position: "sticky",
                top: 0,
                padding: 2,
            }}
        >
            <Select
                value={selectedTemplate}
                onChange={(e) => onTemplateChange(e.target.value)}
                style={{ backgroundColor: "white", fontSize: 17 }}
            >
                {templates.map((template) => (
                    <MenuItem value={template}>{template}</MenuItem>
                ))}
            </Select>

            <Button
                variant="contained"
                style={{
                    marginRight: "20px",
                    marginLeft: "20px",
                    width: "15%",
                    backgroundColor: "#655DBB",
                    textTransform: "capitalize",
                    height: 50,
                    borderColor: "white",
                    borderRadius: 30,
                    fontSize: 16,
                }}
                onClick={onSave}
            >
                Save
            </Button>
            <PDFDownloadLink
                document={selectedTemplateComponent}
                fileName="resume.pdf"
            >
                <Button
                    variant="contained"
                    style={{
                        marginRight: "20px",

                        backgroundColor: "#655DBB",
                        textTransform: "capitalize",
                        height: 50,
                        borderColor: "white",
                        borderRadius: 30,
                        fontSize: 16,
                    }}
                >
                    Download Resume
                </Button>
            </PDFDownloadLink>
            <Button
                variant="contained"
                style={{
                    marginRight: "20px",
                    width: "15%",
                    backgroundColor: "#5C5470",
                    textTransform: "capitalize",
                    height: 50,
                    borderColor: "white",
                    borderRadius: 30,
                    fontSize: 16,
                }}
                onClick={onHome}
            >
                Home
            </Button>
        </Box>
    );
};

export default MenuPanel;
