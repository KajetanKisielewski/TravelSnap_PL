import { StyleSheet, Text, View } from "react-native";

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
}

export default function RatingStars({
  rating,
  maxStars = 5,
}: RatingStarsProps) {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <Text key={i} style={styles.star}>
        {i <= rating ? "\u2605" : "\u2606"}
      </Text>,
    );
  }

  return <View style={styles.row}>{stars}</View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  star: {
    fontSize: 20,
    color: "#f59e0b",
    marginRight: 2,
  },
});
