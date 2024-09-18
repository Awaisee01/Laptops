import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../components/Dummy';

const CategoryDetailPage = () => {
  const { categoryName } = useParams();
  
  const normalizedCategoryName = decodeURIComponent(categoryName.replace(/-/g, ' '));

  const category = categories.find(cat => cat.name.toLowerCase() === normalizedCategoryName.toLowerCase());

  if (!category) {
    return <div>Category Not Found</div>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <p>Details about {category.name} category.</p>
      <ul>
        {category.subcategories.map((subcat, index) => (
          <li key={index}>{subcat}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDetailPage;
