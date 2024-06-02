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

const Experience = () => {
    const [newStartDate, setNewStartDate] = useState(dayjs());
    const [newEndDate, setNewEndDate] = useState(dayjs());
    const { userData, setUserData } = useContext(UserDataContext);
    const [newPosition, setNewPosition] = useState("");
    const [newCompay, setNewCompany] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const handleAddJob = () => {
        if (newPosition.trim() !== "" && newDescription.trim() !== "") {
            setUserData((prevUserData) => ({
                ...prevUserData,
                jobs: [
                    ...(prevUserData.jobs || []),
                    {
                        position: newPosition,
                        company: newCompay,
                        description: newDescription,
                        startDate: newStartDate,
                        endDate: newEndDate,
                    },
                ],
            }));
            setNewPosition("");
            setNewCompany("");
            setNewDescription("");
            setNewStartDate(dayjs());
            setNewEndDate(dayjs());
        }
    };

    const inputJobField = (
        position = newPosition,
        company = newCompay,
        description = newDescription,
        start = newStartDate,
        end = newEndDate,
        index = null
    ) => {
        return (
            <>
                <TextField
                    id="outlined-basic"
                    label="Position name"
                    variant="outlined"
                    sx={{ mb: 2, mt: 2 }}
                    value={position}
                    onChange={(event) =>
                        handleInputData(
                            event.target.value,
                            setNewPosition,
                            setUserData,
                            "jobs",
                            "position",
                            index
                        )
                    }
                />
                <TextField
                    id="outlined-basic"
                    label="Company"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    value={company}
                    onChange={(event) =>
                        handleInputData(
                            event.target.value,
                            setNewCompany,
                            setUserData,
                            "jobs",
                            "company",
                            index
                        )
                    }
                />
                <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    multiline
                    minRows={3}
                    sx={{ mb: 2 }}
                    value={description}
                    onChange={(event) =>
                        handleInputData(
                            event.target.value,
                            setNewDescription,
                            setUserData,
                            "jobs",
                            "description",
                            index
                        )
                    }
                />
                <DemoItem>
                    <Box sx={{ display: "inline-flex" }}>
                        <DatePicker
                            slotProps={{ textField: { fullWidth: true } }}
                            sx={{ mr: 2 }}
                            label="Start of job"
                            value={start}
                            format="MM/YYYY"
                            onChange={(newDate) =>
                                handleInputData(
                                    newDate,
                                    setNewStartDate,
                                    setUserData,
                                    "jobs",
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
                                    "jobs",
                                    "endDate",
                                    index
                                )
                            }
                            value={end}
                            format="MM/YYYY"
                            label="End of job"
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
            {userData.jobs &&
                userData.jobs.map((job, index) => (
                    <Box
                        sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                    >
                        {inputJobField(
                            job.position,
                            job.company,
                            job.description,
                            job.startDate,
                            job.endDate,
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
                                    handleDelete(setUserData, "jobs", index)
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
                {inputJobField()}
                <div style={{ alignSelf: "center", marginTop: 3 }}>
                    <IconButton
                        size="large"
                        onClick={handleAddJob}
                        variant="outlined"
                    >
                        <AddCircleOutlineRoundedIcon />
                    </IconButton>
                </div>
            </Box>
        </Box>
    );
};

export default Experience;
