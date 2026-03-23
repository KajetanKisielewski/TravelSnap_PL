import TripCard from "@/components/TripCard";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface Trip {
  id: string;
  title: string;
  destination: string;
  date: string;
  rating: number;
}

export default function HomeScreen() {
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [trips, setTrips] = useState<Trip[]>([]);

  const handleAddTrip = () => {
    if (
      !title.trim() ||
      !destination.trim() ||
      !date.trim() ||
      !rating.trim()
    ) {
      Alert.alert("Błąd", "Wszystkie pola muszą być uzupełnione.");
      return;
    }

    if (!/^\d{4}-\d{2}$/.test(date)) {
      Alert.alert("Błąd", "Data musi mieć format YYYY-MM.");
      return;
    }

    const numericRating = Number(rating);

    if (isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
      Alert.alert("Błąd", "Ocena musi być liczbą od 1 do 5.");
      return;
    }

    const newTrip: Trip = {
      id: Date.now().toString(),
      title: title.trim(),
      destination: destination.trim(),
      date: date.trim(),
      rating: numericRating,
    };

    setTrips([newTrip, ...trips]);

    setTitle("");
    setDestination("");
    setDate("");
    setRating("");
  };

  const handleDelete = (id: string) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>TravelSnap</Text>
        <Text style={styles.heroSubtitle}>Dodaj nową podróż</Text>
        <Text style={styles.heroText}>
          Zapisuj swoje ulubione miejsca i twórz własną listę podróży.
        </Text>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.formLabel}>Nowa podróż</Text>

        <TextInput
          style={styles.input}
          placeholder="Tytuł podróży..."
          placeholderTextColor="#64748b"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={styles.input}
          placeholder="Destynacja..."
          placeholderTextColor="#64748b"
          value={destination}
          onChangeText={setDestination}
        />

        <TextInput
          style={styles.input}
          placeholder="Data (YYYY-MM)..."
          placeholderTextColor="#64748b"
          value={date}
          onChangeText={setDate}
        />

        <TextInput
          style={styles.input}
          placeholder="Ocena (1-5)..."
          placeholderTextColor="#64748b"
          value={rating}
          onChangeText={setRating}
          keyboardType="numeric"
        />

        <Pressable style={styles.addBtn} onPress={handleAddTrip}>
          <Text style={styles.addText}>+ Dodaj podróż</Text>
        </Pressable>
      </View>

      <View style={styles.counterRow}>
        <Text style={styles.counterTitle}>Moje podróże</Text>
        <View style={styles.counterBadge}>
          <Text style={styles.counterBadgeText}>{trips.length}</Text>
        </View>
      </View>

      {trips.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>Brak podróży</Text>
          <Text style={styles.emptyText}>
            Dodaj pierwszą kartę podróży za pomocą formularza powyżej.
          </Text>
        </View>
      ) : (
        trips.map((trip) => (
          <TripCard
            key={trip.id}
            title={trip.title}
            destination={trip.destination}
            date={trip.date}
            rating={trip.rating}
            onDelete={() => handleDelete(trip.id)}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2ff",
    paddingHorizontal: 16,
    paddingTop: 46,
  },

  heroCard: {
    backgroundColor: "#dbeafe",
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#bfdbfe",
  },

  heroTitle: {
    fontSize: 34,
    fontWeight: "800",
    color: "#1e3a8a",
    marginBottom: 6,
  },

  heroSubtitle: {
    fontSize: 20,
    color: "#334155",
    marginBottom: 8,
  },

  heroText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#475569",
  },

  formCard: {
    backgroundColor: "#ffffff",
    borderRadius: 22,
    padding: 16,
    marginBottom: 18,
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  formLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1e3a8a",
    marginBottom: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 14,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    marginBottom: 12,
  },

  addBtn: {
    backgroundColor: "#7dd3fc",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 4,
  },

  addText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#082f49",
  },

  counterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  counterTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#334155",
  },

  counterBadge: {
    minWidth: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#dbeafe",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  counterBadgeText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1e3a8a",
  },

  emptyCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1e3a8a",
    marginBottom: 8,
  },

  emptyText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#64748b",
  },
});
