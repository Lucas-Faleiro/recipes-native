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
  const [allRecipes, setAllRecipes] = useState([]);
  const [visibleRecipes, setVisibleRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const recipesList = await getRecipes();
      setAllRecipes(recipesList);
      setVisibleRecipes(recipesList.slice(0, page * 10));
      setLoading(false);
    };

    fetchData();
  }, []);

  const loadMoreRecipes = () => {
    setLoading(true);
    const nextPage = page + 1;
    setVisibleRecipes(allRecipes.slice(0, nextPage * 10));
    setPage(nextPage);
    setLoading(false);
  };

  return (
    <View style={style.container}>
      <Text>Recipes List Screen</Text>
      <TextInput placeholder="Search Recipes" style={style.input} />
      {loading && visibleRecipes.length === 0 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={style.cardContainer}>
          <FlatList
            data={visibleRecipes}
            keyExtractor={(item) => item.idMeal.toString()}
            renderItem={({ item }) => (
              <RecipeCard
                strMealThumb={item.strMealThumb}
                strMeal={item.strMeal}
              />
            )}
            onEndReached={loadMoreRecipes}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
              loading && <ActivityIndicator size="large" color="#0000ff" />
            }
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
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default RecipesList;
