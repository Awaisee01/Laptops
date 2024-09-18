import React from 'react';
import { useParams } from 'react-router-dom';
import { categories, laptops } from '../components/Dummy'; // Adjust the path if necessary

const SubcategoryDetailPage = () => {
  const { subcategoryName } = useParams();

  // Normalize subcategory name from URL
  const normalizedSubcategoryName = decodeURIComponent(subcategoryName.replace(/-/g, ' '));

  // Find the category that contains the subcategory
  const category = categories.find(cat =>
    cat.subcategories.some(subcat => subcat.toLowerCase() === normalizedSubcategoryName.toLowerCase())
  );


  // Find the subcategory object from the category
  const subcategory = category.subcategories.find(subcat =>
    subcat.toLowerCase() === normalizedSubcategoryName.toLowerCase()
  );

  if (!subcategory) {
    return <div>Subcategory Not Found</div>;
  }



  return (
    <div>
      <h1>{subcategory}</h1>
      <p>Details about the {subcategory} subcategory in the {category.name} category.</p>
      <img src={category.img} alt="" />
            </div>
  );
};

export default SubcategoryDetailPage;
