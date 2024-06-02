import React from "react";
import { UserDataContext } from "../../../../../../App";
import { useContext, useState, useRef } from "react";
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

const Skills = () => {
    const { userData, setUserData } = useContext(UserDataContext);

    const [newSkill, setNewSkill] = useState("");
    const [newSkillLevel, setNewSkillLevel] = useState(0);

    const timeoutRef = useRef(null);

    const handleAddSkill = () => {
        if (newSkill.trim() !== "") {
            setUserData((prevUserData) => ({
                ...prevUserData,
                skills: [
                    ...(prevUserData.skills || []),
                    { name: newSkill, level: newSkillLevel },
                ],
            }));
            setNewSkill("");
            setNewSkillLevel(0);
        }
    };

    const inputSkillField = (
        skillName = newSkill,
        skillLevel = newSkillLevel,
        index = null
    ) => {
        return (
            <>
                <TextField
                    id="outlined-basic"
                    label="Skill"
                    variant="outlined"
                    sx={{ mr: 2 }}
                    value={skillName}
                    onChange={(event) =>
                        handleInputData(
                            event.target.value,
                            setNewSkill,
                            setUserData,
                            "skills",
                            "name",
                            index
                        )
                    }
                />

                <Select
                    id="demo-simple-select"
                    value={skillLevel}
                    displayEmpty
                    inputProps={{ "aria-label": "Select skill level" }}
                    onChange={(event) =>
                        handleInputData(
                            event.target.value,
                            setNewSkillLevel,
                            setUserData,
                            "skills",
                            "level",
                            index
                        )
                    }
                    sx={{ mr: 2 }}
                >
                    <MenuItem value={0}>Select skill level</MenuItem>
                    <MenuItem value="beginner">Beginner</MenuItem>
                    <MenuItem value="middle">Middle</MenuItem>
                    <MenuItem value="good">Good</MenuItem>
                    <MenuItem value="very good">Very good</MenuItem>
                    <MenuItem value="perfect">Perfect</MenuItem>
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
            {userData.skills &&
                userData.skills.map((skill, index) => (
                    <Box
                        sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                    >
                        <div key={index}>
                            {inputSkillField(skill.name, skill.level, index)}

                            <IconButton
                                aria-label="delete"
                                size="large"
                                onClick={() =>
                                    handleDelete(setUserData, "skills", index)
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
                    {inputSkillField()}
                    <IconButton
                        size="large"
                        onClick={handleAddSkill}
                        variant="outlined"
                    >
                        <AddCircleOutlineRoundedIcon />
                    </IconButton>
                </div>
            </Box>
        </Box>
    );
};

export default Skills;
