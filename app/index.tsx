import { ScrollView, StyleSheet, Text, View } from "react-native";

import AddTripForm from "@/components/AddTripForm";
import type { TripCardProps } from "@/components/TripCard";
import TripCard from "@/components/TripCard";
import { useState } from "react";

export default function HomeScreen() {
	const [trips, setTrips] = useState<TripCardProps[]>([] as TripCardProps[]);

	const handleAddTrip = (
		title: string,
		destination: string,
		date: string,
		rating: number,
	) => {
		const id = Date.now().toString();
		setTrips([
			...trips,
			{
				id,
				title,
				destination,
				date,
				rating,
				onDelete: () => handleDeleteTrip(id),
			},
		]);
	};

	const handleDeleteTrip = (id: string) => {
		setTrips(trips.filter((trip) => trip.id !== id));
	};

	return (
		<View style={styles.container}>
			<AddTripForm onAddTrip={handleAddTrip} />
			<Text>Liczba podróży: {trips.length}</Text>
			<ScrollView contentContainerStyle={styles.content}>
				{trips.map((trip) => (
					<TripCard
						key={trip.id}
						title={trip.title}
						destination={trip.destination}
						date={trip.date}
						rating={trip.rating}
						onDelete={() => handleDeleteTrip(trip.id)}
					/>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 100,
		backgroundColor: "#f5f5f5",
		padding: 16,
	},
	content: {
		padding: 16,
	},
});
