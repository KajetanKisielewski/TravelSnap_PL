import { Button, StyleSheet, Text, View } from "react-native";

import RatingStars from "./RatingStars";

export interface TripData {
	id: string;
	title: string;
	destination: string;
	date: string;
	rating: number;
}

export type TripCardProps = TripData & {
	onDelete: () => void;
};

export default function TripCard({
	id,
	title,
	destination,
	date,
	rating,
	onDelete,
}: TripCardProps) {
	return (
		<View style={styles.card}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.meta}>
				{destination} | {date}
			</Text>
			<RatingStars rating={rating} />
			<Button title="Usuń" onPress={onDelete} />
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#fff",
		padding: 16,
		borderRadius: 32,
		marginBottom: 12,
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 3,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#1a1a2e",
	},
	meta: {
		fontSize: 14,
		color: "#888",
	},
});
