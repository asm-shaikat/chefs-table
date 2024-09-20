import PropTypes from "prop-types";
const Recipe = ({ item,handleCook }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = item;
  return (
    <>
      <div className="card bg-base-100 w-full lg:w-96 shadow-xl">
        <figure>
          <img
            src={recipe_image}
            alt="Delicious Food"
            className="object-cover w-full h-48"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-semibold">{recipe_name}</h2>
          <p className="text-gray-600 my-2">{short_description}</p>
          <hr />
          <div>
            <h3 className="text-lg font-medium mt-4">Ingredients:</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="card-actions justify-start gap-6 mt-6">
            <div className="flex items-center space-x-2">
              <img
                src="/public/assets/Frame.png"
                alt="Category Icon"
                className="w-5 h-5"
              />
              <span className="text-gray-600">{preparing_time} minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/public/assets/fire.png"
                alt="Calories Icon"
                className="w-5 h-5"
              />
              <span className="text-gray-600">{calories} calories</span>
            </div>
          </div>
          <div className="mt-4">
            <button className="btn bg-green-500 hover:bg-green-600 text-white w-full" onClick={ () => handleCook(item)}>
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Recipe.propTypes = {
  item: PropTypes.shape({
    recipe_id: PropTypes.number.isRequired,
    recipe_name: PropTypes.string.isRequired,
    recipe_image: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    preparing_time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }),
  handleCook : PropTypes.func.isRequired,
};

export default Recipe;
