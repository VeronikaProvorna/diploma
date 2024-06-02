import React from "react";
import PersonalData from "./constructorFields/PersonalData";
import Languages from "./constructorFields/Languages";
import InfoListItem from "../InfoListItem";
import Skills from "./constructorFields/Skills";
import Education from "./constructorFields/Education";
import Experience from "./constructorFields/Experience";
import Certificates from "./constructorFields/Certificates";
import SoftSkills from "./constructorFields/SoftSkills";

const ListInfo = () => {
    return (
        <>
            <InfoListItem
                name={"Personal data"}
                DescriptionComponent={PersonalData}
            />
            <InfoListItem name={"Education"} DescriptionComponent={Education} />
            <InfoListItem
                name={"Experience"}
                DescriptionComponent={Experience}
            />
            <InfoListItem name={"Skills"} DescriptionComponent={Skills} />
            <InfoListItem name={"Languages"} DescriptionComponent={Languages} />
            <InfoListItem
                name={"Certificates"}
                DescriptionComponent={Certificates}
            />
            <InfoListItem
                name={"Soft-Skills"}
                DescriptionComponent={SoftSkills}
            />
        </>
    );
};

export default ListInfo;
