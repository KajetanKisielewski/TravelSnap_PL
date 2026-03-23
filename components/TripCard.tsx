import { Pressable, StyleSheet, Text, View } from "react-native";
import RatingStars from "./RatingStars";

interface TripCardProps {
  title: string;
  destination: string;
  date: string;
  rating: number;
  onDelete?: () => void;
}

export default function TripCard({
  title,
  destination,
  date,
  rating,
  onDelete,
}: TripCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.accent} />
      <View style={{ flex: 1 }}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.destination}>{destination}</Text>
          <Text style={styles.date}>{date}</Text>

          <View style={styles.bottomRow}>
            <View style={styles.ratingRow}>
              <RatingStars rating={rating} />
              <Text style={styles.ratingText}>{rating}/5</Text>
            </View>

            {onDelete && (
              <Pressable onPress={onDelete} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Usuń</Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 22,
    marginBottom: 16,
    overflow: "hidden",
    flexDirection: "row",
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  accent: {
    width: 6,
    backgroundColor: "#38bdf8",
  },

  content: {
    flex: 1,
    padding: 18,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1e3a8a",
    marginBottom: 6,
  },

  destination: {
    fontSize: 18,
    color: "#334155",
    marginBottom: 4,
  },

  date: {
    fontSize: 15,
    color: "#64748b",
    marginBottom: 12,
  },

  bottomRow: {
    gap: 12,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#475569",
    marginLeft: 8,
  },

  deleteButton: {
    alignSelf: "flex-start",
    backgroundColor: "#fee2e2",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },

  deleteText: {
    color: "#dc2626",
    fontWeight: "800",
    fontSize: 15,
  },
});
