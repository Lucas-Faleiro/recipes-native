import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipesList from "../screens/RecipesList";
import RecipeDetails from "../screens/recipeDetails";

const stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <stack.Navigator
      initialRouteName="RecipesList"
      screenOptions={{ headerStyle: { backgroundColor: "#ddd" } }}
    >
      <stack.Screen
        name="RecipesList"
        component={RecipesList}
        options={{ title: "Recipes" }}
      />
      <stack.Screen
        name="Details"
        component={RecipeDetails}
        options={{ title: "Recipe Details" }}
      />
    </stack.Navigator>
  );
};

export default AppNavigator;
