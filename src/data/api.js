const SEAFOOD_URL =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

export const getRecipes = async () => {
  try {
    const response = await fetch(SEAFOOD_URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error("Erro ao recuperar as receitas:", error);
  }
};
