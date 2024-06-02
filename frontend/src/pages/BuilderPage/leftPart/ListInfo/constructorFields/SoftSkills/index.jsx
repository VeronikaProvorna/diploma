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

const SoftSkills = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const [newSoftSkill, setNewSoftSkill] = useState("");

    const handleAddSoftSkill = () => {
        if (newSoftSkill.trim() !== "") {
            setUserData((prevUserData) => ({
                ...prevUserData,
                softSkills: [
                    ...(prevUserData.softSkills || []),
                    { name: newSoftSkill },
                ],
            }));
            setNewSoftSkill("");
        }
    };

    const inputSoftSkillsField = (softSkill = newSoftSkill, index = null) => {
        return (
            <TextField
                fullWidth
                id="outlined-basic"
                label="Soft-Skill"
                variant="outlined"
                sx={{ mr: 2, mb: 2 }}
                value={softSkill}
                onChange={(event) =>
                    handleInputData(
                        event.target.value,
                        setNewSoftSkill,
                        setUserData,
                        "softSkills",
                        "name",
                        index
                    )
                }
            />
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
            {userData.softSkills &&
                userData.softSkills.map((softSkill, index) => (
                    <Box sx={{ display: "inline-flex", mb: 2 }}>
                        {inputSoftSkillsField(softSkill.name, index)}
                        <div>
                            <IconButton
                                aria-label="delete"
                                size="large"
                                onClick={() =>
                                    handleDelete(
                                        setUserData,
                                        "softSkills",
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
            <Box sx={{ display: "inline-flex", mt: 2 }}>
                {inputSoftSkillsField()}
                <div>
                    <IconButton
                        size="large"
                        onClick={handleAddSoftSkill}
                        variant="outlined"
                    >
                        <AddCircleOutlineRoundedIcon />
                    </IconButton>
                </div>
            </Box>
        </Box>
    );
};

export default SoftSkills;
