import { Box, Grid } from "@mui/material";
import ListInfo from "./leftPart/ListInfo";
import TemplatesViewer from "./rightPart/TemplatesViewer";
import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../App";
import axios from "axios";
import { API_BASE_URL } from "../../constants/apiConstants";
import { parseTemplate } from "../../utils/parseTemplate";

const BuilderPage = () => {
    const { setUserData, templateId } = useContext(UserDataContext);
    const [name, setName] = useState("");

    useEffect(() => {
        if (templateId) {
            // Fetch existing template data
            axios
                .get(`${API_BASE_URL}/templates/template/${templateId}`)
                .then((response) => {
                    setName(response.data.name);
                    setUserData(
                        parseTemplate(JSON.parse(response.data.content))
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [templateId]);

    return (
        <Grid container sx={{ height: "100vh" }}>
            <Grid
                item
                xs={6}
                sx={{ height: "100vh", width: "50vw", overflowY: "auto" }}
            >
                <Box sx={{ height: "100vh", width: "50vw", overflowY: "auto" }}>
                    <ListInfo />
                </Box>
            </Grid>
            <Grid
                item
                xs={6}
                sx={{ height: "100vh", width: "50vw", overflowY: "auto" }}
            >
                <Box sx={{ height: "100vh", width: "50vw", overflowY: "auto" }}>
                    <TemplatesViewer templateName={name} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default BuilderPage;
