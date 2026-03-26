import { ScrollView, StyleSheet, Text } from "react-native";

import AddTripForm from "@/components/AddTripForm";
import type { TripData } from "@/components/TripCard";
import TripCard from "@/components/TripCard";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
	const [trips, setTrips] = useState<TripData[]>([]);

	const handleAddTrip = (
		title: string,
		destination: string,
		date: string,
		rating: string,
	) => {
		const id = Date.now().toString();
		setTrips((prev) => [...prev, { id, title, destination, date, rating }]);
	};

	const handleDeleteTrip = (id: string) => {
		setTrips((prev) => prev.filter((trip) => trip.id !== id));
	};

	return (
		<SafeAreaView style={styles.container}>
			<AddTripForm onAddTrip={handleAddTrip} />
			<Text>Liczba podróży: {trips.length}</Text>
			<ScrollView contentContainerStyle={styles.content}>
				{trips.map((trip) => (
					<TripCard
						key={trip.id}
						id={trip.id}
						title={trip.title}
						destination={trip.destination}
						date={trip.date}
						rating={trip.rating}
						onDelete={() => handleDeleteTrip(trip.id)}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
		padding: 16,
	},
	content: {
		padding: 16,
	},
});
