import React from "react";
import { UserDataContext } from "../../../../../../App";
import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import {
    handleDelete,
    handleInputData,
} from "../../../../../../utils/handleInputFunc";

const Languages = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const [newLanguage, setNewLanguage] = useState("");
    const [languageLevel, setLanguageLevel] = useState(0);

    const handleAddLanguage = () => {
        if (newLanguage.trim() !== "") {
            setUserData((prevUserData) => ({
                ...prevUserData,
                languages: [
                    ...(prevUserData.languages || []),
                    { name: newLanguage, level: languageLevel },
                ],
            }));
            setNewLanguage("");
            setLanguageLevel(0);
        }
    };

    const inputLanguageField = (
        langName = newLanguage,
        langLevel = languageLevel,
        index = null
    ) => {
        return (
            <>
                <TextField
                    id="outlined-basic"
                    label="Language"
                    variant="outlined"
                    sx={{ mr: 2 }}
                    value={langName}
                    onChange={(event) =>
                        handleInputData(
                            event.target.value,
                            setNewLanguage,
                            setUserData,
                            "languages",
                            "name",
                            index
                        )
                    }
                />

                <Select
                    id="demo-simple-select"
                    value={langLevel}
                    displayEmpty
                    inputProps={{ "aria-label": "Select Level" }}
                    onChange={(event) =>
                        handleInputData(
                            event.target.value,
                            setLanguageLevel,
                            setUserData,
                            "languages",
                            "level",
                            index
                        )
                    }
                    sx={{ mr: 2 }}
                >
                    <MenuItem value={0}>Select Level</MenuItem>
                    <MenuItem value="elementary">Elementary</MenuItem>
                    <MenuItem value="pre Intermediate">
                        Pre Intermediate
                    </MenuItem>
                    <MenuItem value="intermediate">Intermediate</MenuItem>
                    <MenuItem value="upper Intermediate">
                        Upper Intermediate
                    </MenuItem>
                    <MenuItem value="advaced">Advaced</MenuItem>
                </Select>
            </>
        );
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
            {userData.languages &&
                userData.languages.map((language, index) => (
                    <Box
                        sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                    >
                        <div key={index}>
                            {inputLanguageField(
                                language.name,
                                language.level,
                                index
                            )}

                            <IconButton
                                aria-label="delete"
                                size="large"
                                onClick={() =>
                                    handleDelete(
                                        setUserData,
                                        "languages",
                                        index
                                    )
                                }
                                variant="outlined"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </Box>
                ))}
            <Box sx={{ display: "inline-flex", mt: 2 }}>
                <div>
                    {inputLanguageField()}
                    <IconButton
                        size="large"
                        onClick={handleAddLanguage}
                        variant="outlined"
                    >
                        <AddCircleOutlineRoundedIcon />
                    </IconButton>
                </div>
            </Box>
        </Box>
    );
};

export default Languages;
