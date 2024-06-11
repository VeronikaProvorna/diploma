import { Button } from "@mui/material";
import React from "react";
import linearTemplateImage from "../../../resources/linear_template.jpg";
import columnTemplateImage from "../../../resources/column_template.jpg";

const UserTemplateCard = ({
    handleCreateCV,
    handleDeleteTemplate,
    template,
}) => {
    const getImage = (templateType) => {
        switch (templateType) {
            case "Linear Template":
                return linearTemplateImage;
            case "Column Template":
                return columnTemplateImage;
            default:
                return null;
        }
    };

    const backgroundImage = getImage(template.name);

    return (
        <div
            style={{
                width: "230px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                backgroundColor: "#655DBB",

                padding: "5px",
                margin: "10px",
                color: "white",
            }}
            onClick={handleCreateCV}
        >
            <span
                style={{
                    marginBottom: "10px",
                    fontSize: 18,
                    textAlign: "center",
                }}
            >
                {template.title}
            </span>
            {backgroundImage && (
                <div
                    style={{
                        marginBottom: "10px",
                        width: "200px",
                        height: "280px",
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            )}
            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteTemplate();
                }}
                variant="outlined"
                style={{
                    color: "white",
                    textTransform: "capitalize",
                    height: 35,
                    width: 100,
                    fontSize: 14,
                    borderColor: "white",
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 30,
                }}
            >
                Delete
            </Button>
        </div>
    );
};

export default UserTemplateCard;
