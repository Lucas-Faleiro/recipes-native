import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { getRecipes } from "../data/api";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const recipesList = await getRecipes();
      setRecipes(recipesList);
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(recipes);

  return (
    <View>
      <Text>Recipes List Screen</Text>
      <TextInput placeholder="Search Recipes" style={style.input} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={style.cardContainer}>
          <FlatList
            data={recipes}
            keyExtractor={(item) => item.idMeal.toString()}
            renderItem={({ item }) => (
              <RecipeCard
                strMealThumb={item.strMealThumb}
                strMeal={item.strMeal}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    height: 30,
    borderColor: "gray",
    borderWidth: 2,
    paddingLeft: 8,
  },
  cardContainer: {
    marginTop: 16,
  },
});

export default RecipesList;
