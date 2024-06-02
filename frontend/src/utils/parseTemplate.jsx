import dayjs from "dayjs";

const parseDates = (data) => ({
    ...data,
    startDate: dayjs(data.startDate).isValid() ? dayjs(data.startDate) : null,
    endDate: dayjs(data.endDate).isValid() ? dayjs(data.endDate) : null,
});

export const parseTemplate = (data) => {
    if (data.jobs) {
        data.jobs = data.jobs.map(parseDates);
    }
    if (data.educations) {
        data.educations = data.educations.map(parseDates);
    }

    return data;
};
