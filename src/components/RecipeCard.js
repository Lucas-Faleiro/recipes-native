import { Image, StyleSheet, Text, View } from "react-native";

const RecipeCard = ({ strMealThumb, strMeal }) => {
  console.log(strMealThumb);

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: strMealThumb }} />
      <Text style={styles.title}>{strMeal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
});

export default RecipeCard;
