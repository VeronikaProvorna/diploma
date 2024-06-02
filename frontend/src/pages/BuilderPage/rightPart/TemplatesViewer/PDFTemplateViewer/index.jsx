import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { UserDataContext } from "../../../../../App";
import { PDFViewer } from "@react-pdf/renderer";
import FirstTemplate from "./templates/FirstTemplate";
import SecondTemplate from "./templates/SecondTemplate";

const PDFTemplateViewer = ({ selectedTemplate }) => {
    const { userData } = useContext(UserDataContext);
    const templates = [
        {
            name: "Linear Template",
            component: <FirstTemplate userData={userData} />,
        },
        {
            name: "Column Template",
            component: <SecondTemplate userData={userData} />,
        },
    ];

    const selectedTemplateComponent = templates.find(
        (t) => t.name === selectedTemplate
    )?.component;

    return (
        <Box
            sx={{
                width: "195mm",
                height: "275mm",
            }}
        >
            <PDFViewer
                showToolbar={false}
                style={{
                    height: "100%",
                    width: "100%",
                }}
            >
                {selectedTemplateComponent}
            </PDFViewer>
        </Box>
    );
};

export default PDFTemplateViewer;
