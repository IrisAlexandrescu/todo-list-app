import React from 'react';
import CategoryItem from './categoryItem';
import './categoriesComponent.css';

const CategoriesComponent = props => {
    return (
        <div className="categories">
        <div className="category-row">
            <CategoryItem type="Study" />
            <CategoryItem type="Work" />
            <CategoryItem type="Sport" />
        </div>
        <div className="category-row">
            <CategoryItem type="Shopping" />
            <CategoryItem type="Health" />
            <CategoryItem type="Social" />
        </div>
        </div>
    );
};

export default CategoriesComponent;