import React, { useState } from "react";
import { Alert, Button, FlatList, Text, TextInput, View } from "react-native";
import TripCard from "../components/TripCard";

type Trip = {
  id: string;
  title: string;
  destination: string;
  date: string;
  rating: number;
};

export default function HomeScreen() {
  const [trips, setTrips] = useState<Trip[]>([]);

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");

  const handleAddTrip = () => {
    if (!title || !destination || !date || !rating) {
      Alert.alert("Wypełnij wszystkie pola");
      return;
    }

    const ratingNumber = Number(rating);
    if (ratingNumber < 1 || ratingNumber > 5) {
      Alert.alert("Ocena musi być od 1 do 5");
      return;
    }

    const dateRegex = /^\d{4}-\d{2}$/;
    if (!dateRegex.test(date)) {
      Alert.alert("Data musi być w formacie YYYY-MM");
      return;
    }

    const newTrip: Trip = {
      id: Date.now().toString(),
      title,
      destination,
      date,
      rating: ratingNumber,
    };

    setTrips((prev) => [...prev, newTrip]);

    setTitle("");
    setDestination("");
    setDate("");
    setRating("");
  };

  const handleDelete = (id: string) => {
    setTrips((prev) => prev.filter((trip) => trip.id !== id));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: 60,
      }}
    >
      <View style={{ width: "80%" }}>
        <Text>Tytuł</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        />

        <Text>Destynacja</Text>
        <TextInput
          value={destination}
          onChangeText={setDestination}
          style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        />

        <Text>Data (YYYY-MM)</Text>
        <TextInput
          value={date}
          onChangeText={setDate}
          style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        />

        <Text>Ocena (1-5)</Text>
        <TextInput
          value={rating}
          onChangeText={setRating}
          keyboardType="numeric"
          style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        />

        <Button title="Dodaj" onPress={handleAddTrip} />

        <Text style={{ fontSize: 18, marginVertical: 10 }}>
          Liczba podróży: {trips.length}
        </Text>

        <FlatList
          data={trips}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TripCard trip={item} onDelete={handleDelete} />
          )}
        />
      </View>
    </View>
  );
}
