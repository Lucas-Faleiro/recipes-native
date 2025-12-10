import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getRecipeById } from "../data/api";
import { Activity, useEffect, useState } from "react";

const RecipeDetails = ({ route }) => {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = route.params;

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      const recipe = await getRecipeById(id);

      const ingredientsList = Object.entries(recipe[0]).reduce(
        (ingredientsList, [key, value]) => {
          if (key.startsWith("strIngredient") && value) {
            const index = key.replace("strIngredient", "");
            const measure = recipe[0][`strMeasure${index}`];
            return [...ingredientsList, { ingredient: value, measure }];
          }
          return ingredientsList;
        },
        []
      );

      setRecipe(recipe[0]);
      setIngredients(ingredientsList);
      setLoading(false);
    };
    fetchRecipe();
  }, [id]);

  return (
    <ScrollView style={styles.container}>
      {loading || !recipe || ingredients.length === 0 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
          <View style={styles.categoryContainer}>
            <Text style={styles.title}>{recipe.strMeal}</Text>
            <Text>
              {recipe.strArea} - {recipe.strCategory}
            </Text>
          </View>
          <View>
            <Text style={styles.title}>Ingredients</Text>
            <FlatList
              data={ingredients}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text>{`${item.ingredient} - ${item.measure}`}</Text>
              )}
            />
          </View>
          <View>
            <Text style={styles.title}>Instructions</Text>
            <Text>{recipe.strInstructions}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
    borderRadius: 8,
  },
  container: {
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default RecipeDetails;
