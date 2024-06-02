import React, { useContext, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { UserDataContext } from "../../../../../../App";

const PersonalData = () => {
    const { userData, setUserData, templateId, setTemplateId } =
        useContext(UserDataContext);
    const [fullname, setFullname] = useState();
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [website, setWebsite] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");

    const timeoutRef = useRef(null);

    const handleInputPersonalData = (event, setValue) => {
        const { name, value } = event.target;
        setValue(value);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setUserData((prevUserData) => ({
                ...prevUserData,
                personalData: {
                    ...(prevUserData.personalData || {}),
                    [name]: value,
                },
            }));
        }, 1000);
    };

    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Name and surname"
                variant="outlined"
                name="fullname"
                fullWidth
                sx={{ mb: 2 }}
                value={fullname}
                onChange={(event) =>
                    handleInputPersonalData(event, setFullname)
                }
            />
            <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                sx={{ mb: 2 }}
                name="description"
                fullWidth
                multiline
                minRows={3}
                value={description}
                onChange={(event) =>
                    handleInputPersonalData(event, setDescription)
                }
            />
            <Box sx={{ display: "inline-flex" }}>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    sx={{ mb: 2, mr: 2 }}
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={email}
                    onChange={(event) =>
                        handleInputPersonalData(event, setEmail)
                    }
                />
                <TextField
                    id="outlined-basic"
                    label="Phone number"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                    name="number"
                    value={number}
                    onChange={(event) =>
                        handleInputPersonalData(event, setNumber)
                    }
                />
            </Box>
            <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                name="address"
                sx={{ mb: 2 }}
                value={address}
                onChange={(event) => handleInputPersonalData(event, setAddress)}
            />
            <TextField
                id="outlined-basic"
                label="LinkedIn"
                variant="outlined"
                name="linkedin"
                sx={{ mb: 2 }}
                fullWidth
                value={linkedin}
                onChange={(event) =>
                    handleInputPersonalData(event, setLinkedin)
                }
            />
            <TextField
                id="outlined-basic"
                label="Github"
                variant="outlined"
                name="github"
                sx={{ mb: 2 }}
                fullWidth
                value={github}
                onChange={(event) => handleInputPersonalData(event, setGithub)}
            />
            <TextField
                id="outlined-basic"
                label="Website"
                variant="outlined"
                name="website"
                sx={{ mb: 2 }}
                fullWidth
                value={website}
                onChange={(event) => handleInputPersonalData(event, setWebsite)}
            />
        </Box>
    );
};

export default PersonalData;
