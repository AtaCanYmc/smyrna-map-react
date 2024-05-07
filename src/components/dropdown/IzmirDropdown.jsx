import React, { useState } from 'react';
import { Select, message } from 'antd';

const { Option } = Select;

const IzmirDropdown = ({ options }) => {
    const [selectedValue, setSelectedValue] = useState(options[0].value); // Varsayılan değer ilk seçenek

    const handleChange = (value) => {
        setSelectedValue(value);
        message.info(`Seçilen değer: ${value}`);
    };

    const style = {
        width: 200,
        margin: 20
    };

    return (
        <Select defaultValue={selectedValue} onChange={handleChange} style={style}>
            {options.map((option) => (
                <Option key={option.value} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </Select>
    );
};

export default IzmirDropdown;
