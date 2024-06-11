import React, { useContext, useEffect, useState } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import dayjs from "dayjs";

const styles = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: "column",
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 13,
    },
    section: {
        display: "flex",
        flexDirection: "column",
    },
    description: {
        marginBottom: 7,
    },
    pesonalBlock: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 3,
        marginBottom: 7,
    },
    fullname: {
        fontSize: 18,
        marginTop: 6,
        alignSelf: "center",
        marginBottom: 6,
        fontWeight: "heavy",
        textTransform: "capitalize",
    },
    contactsBox: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: 2,
        color: "#50727B",
    },
    contacts: {
        marginLeft: 5,
        marginRight: 5,
    },
    title: {
        fontSize: 14,
        fontFamily: "Times-Roman",
        fontWeight: "bold",
        marginBottom: 15,
        marginTop: 1,
        alignSelf: "center",
        textTransform: "uppercase",
        color: "#496989",
    },
    topDivider: {
        height: 8,
        backgroundColor: "#B3C8CF",
        marginBottom: 3,
        marginTop: 4,
    },
    divider: {
        height: 1,
        backgroundColor: "#B3C8CF",
        marginBottom: 3,
        marginTop: 10,
    },
    datesBlock: {
        fontWeight: 800,
        fontSize: 12,
    },
    dateAndNameBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    languageSkillsCont: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 3,
        flexWrap: "wrap",
    },
});

const FirstTemplate = ({ userData }) => {
    const formatDate = (date) => (date ? dayjs(date).format("MM.YYYY") : "");

    const PersonalDataBlock = (
        <View style={styles.pesonalBlock}>
            <View style={styles.topDivider}></View>
            <Text style={styles.fullname}>
                {userData.personalData?.fullname}
            </Text>
            <View style={styles.contactsBox}>
                {userData.personalData?.address && (
                    <Text style={styles.contacts}>
                        {userData.personalData?.address}
                    </Text>
                )}

                {userData.personalData?.email && (
                    <Text style={styles.contacts}>
                        {userData.personalData?.email}
                    </Text>
                )}
                {userData.personalData?.number && (
                    <Text style={styles.contacts}>
                        {userData.personalData?.number}
                    </Text>
                )}
            </View>
            <View style={styles.topDivider}></View>
            {userData.personalData?.description && (
                <Text style={styles.description}>
                    {userData.personalData?.description}
                </Text>
            )}
            <View style={styles.section}>
                {userData.personalData?.github && (
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            fontSize: 12,
                        }}
                    >
                        <Text>{`GitHub: `}</Text>
                        <Text style={{ color: "#607274" }}>
                            {userData.personalData?.github}
                        </Text>
                    </View>
                )}
                {userData.personalData?.website && (
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            fontSize: 12,
                        }}
                    >
                        <Text>{`Website: `}</Text>
                        <Text style={{ color: "#607274" }}>
                            {userData.personalData?.website}
                        </Text>
                    </View>
                )}
                {userData.personalData?.linkedin && (
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            fontSize: 12,
                        }}
                    >
                        <Text>{`LinkedIn: `}</Text>
                        <Text style={{ color: "#607274" }}>
                            {userData.personalData?.linkedin}
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );

    const educationBlock = (
        <View style={styles.section}>
            {userData.educations && userData.educations.length > 0 ? (
                <>
                    <View style={styles.divider}></View>
                    <Text style={styles.title}>Education</Text>

                    {userData.educations?.map((edu, index) => (
                        <View
                            key={index}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <View style={styles.dateAndNameBlock}>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 14,
                                        color: "#496989",
                                    }}
                                >
                                    {edu?.diplomaName}
                                </Text>
                                <Text style={styles.datesBlock}>
                                    {formatDate(edu?.startDate)} -{" "}
                                    {formatDate(edu?.endDate)}
                                </Text>
                            </View>
                            <Text style={{ fontSize: 13, marginBottom: 12 }}>
                                {edu?.uni}
                            </Text>
                        </View>
                    ))}
                </>
            ) : (
                ""
            )}
        </View>
    );

    const experienceBlock = (
        <View style={styles.section}>
            {userData.jobs && userData.jobs.length > 0 ? (
                <>
                    <View style={styles.divider}></View>
                    <Text style={styles.title}>Work Experience</Text>

                    {userData.jobs?.map((job, index) => (
                        <View
                            key={index}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <View style={styles.dateAndNameBlock}>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 14,
                                        color: "#496989",
                                    }}
                                >
                                    {job?.position}
                                </Text>
                                <Text style={styles.datesBlock}>
                                    {formatDate(job?.startDate)} -{" "}
                                    {formatDate(job?.endDate)}
                                </Text>
                            </View>
                            <Text style={{ marginBottom: 6 }}>
                                {job?.company}
                            </Text>
                            <Text style={{ marginBottom: 12 }}>
                                {job?.description}
                            </Text>
                        </View>
                    ))}
                </>
            ) : (
                ""
            )}
        </View>
    );

    const skillsBlock = (
        <View style={styles.section}>
            {userData.skills && userData.skills.length > 0 ? (
                <>
                    <View style={styles.divider}></View>
                    <Text style={styles.title}>Skills</Text>

                    <View style={styles.languageSkillsCont}>
                        {userData.skills?.map((skill, index) => (
                            <View
                                style={{
                                    width: "32%",
                                    marginBottom: 7,
                                    textAlign: "center",
                                }}
                            >
                                <Text key={index}>
                                    {""}
                                    {skill?.name}
                                    {`: `}
                                    {skill?.level !== 0 ? skill?.level : ""}
                                </Text>
                            </View>
                        ))}
                    </View>
                </>
            ) : (
                ""
            )}
        </View>
    );

    const languagesBlock = (
        <View style={styles.section}>
            {userData.languages && userData.languages.length > 0 ? (
                <>
                    <View style={styles.divider}></View>
                    <Text style={styles.title}>Languages</Text>
                    <View style={styles.languageSkillsCont}>
                        {userData.languages?.map((language, index) => (
                            <View
                                style={{
                                    width: "32%",
                                    marginBottom: 7,
                                    textAlign: "center",
                                }}
                            >
                                <Text key={index}>
                                    {language?.name}
                                    {`: `}
                                    {language?.level !== 0
                                        ? language?.level
                                        : ""}
                                </Text>
                            </View>
                        ))}
                    </View>
                </>
            ) : (
                ""
            )}
        </View>
    );

    const certificatesBlock = (
        <View style={styles.section}>
            {userData.certificates && userData.certificates.length > 0 ? (
                <>
                    <View style={styles.divider}></View>
                    <Text style={styles.title}>Certificates</Text>

                    {userData.certificates?.map((certificate, index) => (
                        <View
                            key={index}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 14,
                                    color: "#496989",
                                }}
                            >
                                {certificate?.name}
                            </Text>

                            <Text style={{ marginBottom: 12, marginTop: 4 }}>
                                {certificate?.description}
                            </Text>
                        </View>
                    ))}
                </>
            ) : (
                ""
            )}
        </View>
    );

    const softSkillsBlock = (
        <View style={styles.section}>
            {userData.softSkills && userData.softSkills.length > 0 ? (
                <>
                    <View style={styles.divider}></View>
                    <Text style={styles.title}>Soft Skills</Text>

                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                        }}
                    >
                        {userData.softSkills?.map((softSkill, index) => (
                            <Text
                                key={index}
                                style={{
                                    width: "32%",
                                    marginBottom: 3,
                                }}
                            >
                                {softSkill?.name}
                            </Text>
                        ))}
                    </View>
                </>
            ) : (
                ""
            )}
        </View>
    );

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {PersonalDataBlock}
                {educationBlock}
                {experienceBlock}
                {skillsBlock}
                {languagesBlock}
                {certificatesBlock}
                {softSkillsBlock}
            </Page>
        </Document>
    );
};

export default FirstTemplate;
