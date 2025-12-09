const SEAFOOD_URL =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

export const fetchRecipes = async () => {
  try {
    const response = await fetch(SEAFOOD_URL);
    const data = await response.json();
    console.log(data.meals);
    return data;
  } catch (error) {
    console.error("Erro ao recuperar as receitas:", error);
  }
};
