import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
const Kitchen = ({recipes,handleCurrentCoocking,currenCooking}) => {

    const [cookingTime,setCookingTime] = useState(0);
    const [calories,setCalories] = useState(0);

    useEffect( () =>{
        let totalTime = 0;
        let totalCal = 0;
        currenCooking.forEach ( (item) =>{
            totalTime += item.preparing_time;
            totalCal += item.calories;
        })
        setCookingTime(totalTime);
        setCalories(totalCal);
    },[currenCooking])

    return (
        <div className="container mx-auto px-4 lg:px-8 xl:px-12 py-6">
    <div>
        <h2 className="text-center text-lg lg:text-xl p-2 font-semibold">
            Want to cook: {recipes.length}
        </h2>
        <hr className="my-4" />
        <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
                <thead>
                    <tr className="text-gray-600">
                        <th className="p-2">#</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Time</th>
                        <th className="p-2">Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.length > 0 ? (
                        recipes.map((recipe, index) => (
                            <tr key={index} className="border-t">
                                <th className="p-2">{index + 1}</th>
                                <td className="p-2">{recipe.recipe_name}</td>
                                <td className="p-2">{recipe.preparing_time} minutes</td>
                                <td className="p-2">{recipe.calories} calories</td>
                                <td>
                                    <button
                                        className="btn bg-green-500 text-white mt-2 lg:mt-0 p-1 lg:p-2 rounded-md w-full lg:w-auto text-xs lg:text-base"
                                        onClick={() => handleCurrentCoocking(recipe)}
                                    >
                                        Preparing
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="p-4 text-center text-gray-500">
                                No items in cart
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>

    <div className="mt-8">
        <h2 className="text-center text-lg lg:text-xl p-2 font-semibold">
            Currently cooking: {currenCooking.length}
        </h2>
        <hr className="my-4" />
        <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
                <thead>
                    <tr className="text-gray-600">
                        <th className="p-2">#</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Time</th>
                        <th className="p-2">Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {currenCooking.length > 0 ? (
                        currenCooking.map((item, index) => (
                            <tr key={index} className="border-t">
                                <th className="p-2">{index + 1}</th>
                                <td className="p-2">{item.recipe_name}</td>
                                <td className="p-2">{item.preparing_time} minutes</td>
                                <td className="p-2">{item.calories} calories</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="p-4 text-center text-gray-500">
                                No items in cart
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mt-4">
                <div className="text-sm lg:text-base">Total time = {cookingTime} mins</div>
                <div className="text-sm lg:text-base">Total Calories = {calories} kcal</div>
            </div>
        </div>
    </div>
</div>

    );
};

Kitchen.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape({
        recipe_id: PropTypes.number.isRequired,
        recipe_name: PropTypes.string.isRequired,
        preparing_time: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
    })).isRequired,
    handleCurrentCoocking: PropTypes.func.isRequired,
    currenCooking: PropTypes.func.isRequired,
};

export default Kitchen;