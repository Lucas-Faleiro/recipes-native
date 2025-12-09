const SEAFOOD_URL =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
const SEARCH_INPUT_URL =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const getRecipes = async (filter) => {
  try {
    if (filter) {
      const response = await fetch(`${SEARCH_INPUT_URL}${filter}`);
      const data = await response.json();
      console.log(data);
      return data.meals;
    }
    const response = await fetch(SEAFOOD_URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error("Erro ao recuperar as receitas:", error);
  }
};
