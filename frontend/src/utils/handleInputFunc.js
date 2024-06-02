export const handleInputData = (
        value,
        setValue,
        setUserData,
        arrayName,
        itemName,
        index = null
    ) => {
       

        if (index != null) {
            setUserData((prevUserData) => ({
                ...prevUserData,
                [arrayName]: prevUserData[arrayName].map((el, i) => {
                    if (i === index) {
                        return { ...el, [itemName]: value };
                    }
                    return el;
                }),
            }));
        } else {
            setValue(value);
        }
};

export const handleDelete = (setUserData, arrayName, index) => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            [arrayName]: prevUserData[arrayName].filter((_, i) => i !== index),
        }));
    };
