import { View, Text, TextInput, StyleSheet } from "react-native";

const RecipesList = () => {
  return (
    <View>
      <Text style={style.container}>Recipes List Screen</Text>
      <TextInput placeholder="Search Recipes" style={style.input} />
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
});

export default RecipesList;
