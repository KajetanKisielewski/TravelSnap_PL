import React from "react";
import { Button, Text, View } from "react-native";

type Trip = {
  id: string;
  title: string;
  destination: string;
  date: string;
  rating: number;
};

type Props = {
  trip: Trip;
  onDelete: (id: string) => void;
};

export default function TripCard({ trip, onDelete }: Props) {
  return (
    <View
      style={{
        padding: 12,
        marginVertical: 8,
        backgroundColor: "#eee",
        borderRadius: 8,
      }}
    >
      <Text>{trip.title}</Text>
      <Text>{trip.destination}</Text>
      <Text>{trip.date}</Text>
      <Text>Ocena: {trip.rating}</Text>

      <Button title="Usuń" onPress={() => onDelete(trip.id)} />
    </View>
  );
}
