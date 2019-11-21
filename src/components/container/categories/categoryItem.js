import React from 'react';

const CategoryItem = props => {
    return (
        <div className={`category ${props.type.toLowerCase()}`}><span>{props.type}</span></div>
    );
};

export default CategoryItem;