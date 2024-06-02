import React from "react";
import { UserDataContext } from "../../../../../../App";
import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import Divider from "@mui/material/Divider";
import {
    handleDelete,
    handleInputData,
} from "../../../../../../utils/handleInputFunc";

const Education = () => {
    const { userData, setUserData } = useContext(UserDataContext);

    const [newStartDate, setNewStartDate] = useState(dayjs());
    const [newEndDate, setNewEndDate] = useState(dayjs());
    const [newEducationName, setNewEducationName] = useState("");
    const [newUni, setNewUni] = useState("");

    const handleAddEducation = () => {
        if (newEducationName.trim() !== "" && newUni.trim() !== "") {
            setUserData((prevUserData) => ({
                ...prevUserData,
                educations: [
                    ...(prevUserData.educations || []),
                    {
                        diplomaName: newEducationName,
                        uni: newUni,
                        startDate: newStartDate,
                        endDate: newEndDate,
                    },
                ],
            }));
            setNewEducationName("");
            setNewUni("");
            setNewStartDate(dayjs());
            setNewEndDate(dayjs());
        }
    };

    const inputEducationField = (
        diplomaName = newEducationName,
        uni = newUni,
        start = newStartDate,
        end = newEndDate,
        index = null
    ) => {
        return (
            <>
                <TextField
                    id="outlined-basic"
                    label="Education name"
                    variant="outlined"
                    sx={{ mb: 2, mt: 2 }}
                    value={diplomaName}
                    onChange={(event) =>
                        handleInputData(
                            event.target.value,
                            setNewEducationName,
                            setUserData,
                            "educations",
                            "diplomaName",
                            index
                        )
                    }
                />
                <TextField
                    id="outlined-basic"
                    label="University"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    value={uni}
                    onChange={(event) =>
                        handleInputData(
                            event.target.value,
                            setNewUni,
                            setUserData,
                            "educations",
                            "uni",
                            index
                        )
                    }
                />
                <DemoItem>
                    <Box sx={{ display: "inline-flex" }}>
                        <DatePicker
                            slotProps={{ textField: { fullWidth: true } }}
                            sx={{ mr: 2 }}
                            label="Start of education"
                            value={start}
                            format="MM/YYYY"
                            onChange={(newDate) =>
                                handleInputData(
                                    newDate,
                                    setNewStartDate,
                                    setUserData,
                                    "educations",
                                    "startDate",
                                    index
                                )
                            }
                        />
                        <DatePicker
                            slotProps={{ textField: { fullWidth: true } }}
                            onChange={(newDate) =>
                                handleInputData(
                                    newDate,
                                    setNewEndDate,
                                    setUserData,
                                    "educations",
                                    "endDate",
                                    index
                                )
                            }
                            value={end}
                            format="MM/YYYY"
                            label="End of education"
                        />
                    </Box>
                </DemoItem>
            </>
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
            {userData.educations &&
                userData.educations.map((education, index) => (
                    <Box
                        sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                    >
                        {inputEducationField(
                            education.diplomaName,
                            education.uni,
                            education.startDate,
                            education.endDate,
                            index
                        )}
                        <div
                            style={{
                                alignSelf: "flex-end",
                                marginTop: 3,
                                marginBottom: 3,
                            }}
                        >
                            <IconButton
                                aria-label="delete"
                                size="large"
                                onClick={() =>
                                    handleDelete(
                                        setUserData,
                                        "educations",
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
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                {inputEducationField()}
                <div style={{ alignSelf: "center", marginTop: 3 }}>
                    <IconButton
                        size="large"
                        onClick={handleAddEducation}
                        variant="outlined"
                    >
                        <AddCircleOutlineRoundedIcon />
                    </IconButton>
                </div>
            </Box>
        </Box>
    );
};

export default Education;
