export const fetchRecipes = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  const data = await res.json();

  return data.meals
    ? data.meals.map((meal) => ({
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
        ingredients: Object.keys(meal)
          .filter((key) => key.startsWith("strIngredient") && meal[key])
          .map((key) => meal[key]),
        instructions: meal.strInstructions,
      }))
    : [];
};
