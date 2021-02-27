import React from 'react';

const Selector = ({ name, defaultValue }) => (
    <select name={name} id="Sex">
        <option selected="selected">{defaultValue || 'Select sex'}</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
    </select>
);

export default Selector;
