import React from "react";
import { UserDataContext } from "../../../../../../App";
import { useContext, useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Title = () => {
    const { userData, setUserData } = useContext(UserDataContext);

    const [newTitle, setNewTitle] = useState("");

    useEffect(() => {
        if (userData.title) {
            setNewTitle(userData.title || "");
        }
    }, [userData]);

    const timeoutRef = useRef(null);

    const handleInputTitle = (event) => {
        const { value } = event.target;
        setNewTitle(value);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setUserData((prevData) => ({
                ...prevData,
                title: value,
            }));
        }, 1000);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                pb: 1,
                bgcolor: "background.paper",
            }}
        >
            <TextField
                id="outlined-basic"
                label="Template title"
                required
                fullWidth
                variant="outlined"
                sx={{ mx: 2, width: "96%", my: 1 }}
                value={newTitle}
                onChange={(event) => handleInputTitle(event)}
            />
        </Box>
    );
};

export default Title;
