import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleCook}) => {
  const [items, setItems] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);  
  const itemsPerPage = 2;  

  useEffect(() => {
    fetch('recipe.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);


  const totalPages = Math.ceil(items.length / itemsPerPage);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mx-auto px-4 lg:px-20">
      <div className="lg:flex justify-center items-center gap-8 lg:gap-16">
        {currentItems.map(item => (
          <Recipe key={item.id} item={item} handleCook={handleCook} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`btn ${currentPage === 1 ? 'btn-disabled' : 'btn-primary'}`}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`btn ${currentPage === totalPages ? 'btn-disabled' : 'btn-primary'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

Recipes.propTypes = {
  handleCook : PropTypes.func.isRequired,
};
export default Recipes;
