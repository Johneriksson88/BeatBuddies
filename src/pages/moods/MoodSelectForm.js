import React from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { axiosReq } from '../../api/axiosDefaults';

const MoodSelectForm = () => {

    const loadOptions = async (inputValue) => {
        try {
            const response = await axiosReq.get("/moods/")
            const data = response.data;

            const options = data.map((mood) => ({
                value: mood.id,
                label: mood.name,
            }));

            console.log("options:", options)
            return options;
        } catch (error) {
            console.error('Error fetching options:', error);
            return [];
        }
    };

    const formatOptionLabel = ({ label }) => <div>{label}</div>;
    const handleChange = (selectedOption) => {
        const moodId = selectedOption ? selectedOption.value : null;
        console.log('Selected Mood ID:', moodId);
        // You can perform any further operations with the mood ID here
    };


    return <AsyncCreatableSelect
        cacheOptions
        defaultOptions
        isMulti
        loadOptions={loadOptions}
        onChange={handleChange}
        formatOptionLabel={formatOptionLabel} />;
};
export default MoodSelectForm