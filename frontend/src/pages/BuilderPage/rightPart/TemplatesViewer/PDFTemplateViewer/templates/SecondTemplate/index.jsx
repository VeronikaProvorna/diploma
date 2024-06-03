import React, { useContext, useEffect, useState } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import dayjs from "dayjs";

/**
 * <PDFDownloadLink
                document={<Resume userData={userData} />}
                fileName="somename.pdf"
            >
                {({ loading }) =>
                    loading ? "Loading document..." : "Download now!"
                }
            </PDFDownloadLink>
             <PDFViewer showToolbar={false} height="100%" width="100%">
                <Resume userData={userData} />
            </PDFViewer>

            {isLoading && (
                <Box
                    sx={{
                        zIndex: 3,
                        margin: "23%",
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
 * 
 */

const styles = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        paddingLeft: 30,
        fontSize: 13,
        color: "#71797E",
    },
    firstColumn: {
        width: "60%",
        marginRight: 30,
    },
    secondColumn: {
        backgroundColor: "#EEEDEB",
        width: "40%",
        paddingHorizontal: 8,
    },
    section: {
        display: "flex",
        flexDirection: "column",
    },
    fullname: {
        fontSize: 22,
        marginTop: 25,
        marginBottom: 7,
        textTransform: "capitalize",
        color: "#637A9F",
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
        fontSize: 13,
        marginBottom: 15,
        marginTop: 15,
        textTransform: "uppercase",
        color: "#577B8D",
    },
    divider: {
        height: 0.5,
        backgroundColor: "#577B8D",
        marginBottom: 5,
    },
    datesBlock: {
        fontSize: 12,
        color: "#000000",
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

const SecondTemplate = ({ userData }) => {
    const formatDate = (date) => (date ? dayjs(date).format("MM.YYYY") : "");

    const PersonalDataBlock = (
        <View style={styles.section}>
            <Text style={styles.fullname}>
                {userData.personalData?.fullname}
            </Text>
            <Text style={{ marginBottom: 7, color: "000000" }}>
                {userData.personalData?.description}
            </Text>
        </View>
    );

    const contactsBlock = (
        <View style={[styles.section, { fontSize: 11 }]}>
            <Text style={[styles.title]}>Contacts</Text>
            <View style={styles.divider}></View>
            {userData.personalData?.address && (
                <Text style={{ marginBottom: 6 }}>
                    {userData.personalData.address}
                </Text>
            )}
            {userData.personalData?.email && (
                <Text style={{ marginBottom: 6 }}>
                    {userData.personalData.email}
                </Text>
            )}
            {userData.personalData?.number && (
                <Text style={{ marginBottom: 6 }}>
                    {userData.personalData.number}
                </Text>
            )}
            {userData.personalData?.github && (
                <Text style={{ marginBottom: 6 }}>
                    {userData.personalData.github}
                </Text>
            )}
            {userData.personalData?.website && (
                <Text style={{ marginBottom: 6 }}>
                    {userData.personalData.website}
                </Text>
            )}
            {userData.personalData?.linkedin && (
                <Text style={{ marginBottom: 6 }}>
                    {userData.personalData.linkedin}
                </Text>
            )}
        </View>
    );

    const educationBlock = (
        <View style={styles.section}>
            {userData.educations && userData.educations.length > 0 ? (
                <>
                    <Text style={styles.title}>Education</Text>
                    <View style={styles.divider}></View>
                    {userData.educations?.map((edu, index) => (
                        <View
                            key={index}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <View style={styles.dateAndNameBlock}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: "#000000",
                                    }}
                                >
                                    {edu?.diplomaName}
                                </Text>
                                <Text style={styles.datesBlock}>
                                    {formatDate(edu?.startDate)} -{" "}
                                    {formatDate(edu?.endDate)}
                                </Text>
                            </View>
                            <Text style={{ marginBottom: 14 }}>{edu?.uni}</Text>
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
                    <Text style={styles.title}>Work Experience</Text>
                    <View style={styles.divider}></View>
                    {userData.jobs?.map((job, index) => (
                        <View
                            key={index}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <View style={styles.dateAndNameBlock}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: "#000000",
                                    }}
                                >
                                    {job?.position}
                                </Text>
                                <Text style={styles.datesBlock}>
                                    {formatDate(job?.startDate)} -{" "}
                                    {formatDate(job?.endDate)}
                                </Text>
                            </View>
                            <Text style={{ marginBottom: 8 }}>
                                {job?.company}
                            </Text>
                            <Text style={{ marginBottom: 14 }}>
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
                    <Text style={styles.title}>Skills</Text>
                    <View style={styles.divider}></View>
                    <View>
                        {userData.skills?.map((skill, index) => (
                            <Text style={{ marginBottom: 8, color: "black" }}>
                                {skill?.name}
                                {`: `}
                                {skill?.level !== 0 ? skill?.level : ""}
                            </Text>
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
                    <Text style={styles.title}>Languages</Text>
                    <View style={styles.divider}></View>
                    <View>
                        {userData.languages?.map((language, index) => (
                            <Text style={{ marginBottom: 8, color: "black" }}>
                                {language?.name}
                                {`: `}
                                {language?.level !== 0 ? language?.level : ""}
                            </Text>
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
                    <Text style={styles.title}>Certificates</Text>
                    <View style={styles.divider}></View>
                    {userData.certificates?.map((certificate, index) => (
                        <View
                            key={index}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 14,
                                    color: "#000000",
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
                    <Text style={styles.title}>Soft Skills</Text>
                    <View style={styles.divider}></View>

                    {userData.softSkills?.map((softSkill, index) => (
                        <Text
                            style={{
                                marginBottom: 8,
                                color: "#000000",
                            }}
                        >
                            {softSkill?.name}
                        </Text>
                    ))}
                </>
            ) : (
                ""
            )}
        </View>
    );

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.firstColumn}>
                    {PersonalDataBlock}
                    {experienceBlock}
                    {educationBlock}
                    {certificatesBlock}
                </View>
                <View style={styles.secondColumn}>
                    {contactsBlock}
                    {skillsBlock}

                    {languagesBlock}
                    {softSkillsBlock}
                </View>
            </Page>
        </Document>
    );
};

export default SecondTemplate;
