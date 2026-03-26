import { useState } from "react";
import {
	Alert,
	Button,
	Keyboard,
	StyleSheet,
	TextInput,
	View,
} from "react-native";

type AddTripFormProps = {
	onAddTrip: (
		title: string,
		destination: string,
		date: string,
		rating: number,
	) => void;
};

export default function AddTripForm({ onAddTrip }: AddTripFormProps) {
	const [title, setTitle] = useState("");
	const [destination, setDestination] = useState("");
	const [dateDigits, setDateDigits] = useState("");
	const [rating, setRating] = useState(0);

	const date =
		dateDigits.length <= 4
			? dateDigits
			: `${dateDigits.slice(0, 4)}-${dateDigits.slice(4, 6)}`;

	const handleDateChange = (text: string): void => {
		setDateDigits(text.replace(/\D/g, "").slice(0, 6));
	};

	const handleAddTrip = (): void => {
		Keyboard.dismiss();
		if (!title || !destination || !dateDigits || !rating) {
			Alert.alert("Wypełnij wszystkie pola");
			return;
		}
		const fullDate =
			dateDigits.length === 6
				? `${dateDigits.slice(0, 4)}-${dateDigits.slice(4, 6)}`
				: "";
		const correctDate =
			fullDate.length === 7 &&
			fullDate[4] === "-" &&
			/^\d{4}-\d{2}$/.test(fullDate) &&
			Number(fullDate.slice(5, 7)) >= 1 &&
			Number(fullDate.slice(5, 7)) <= 12 &&
			Number(fullDate.slice(0, 4)) <= new Date().getFullYear();
		if (!correctDate) {
			Alert.alert("Zła data", "Format: YYYY-MM (np. 2026-03)");
			return;
		}
		onAddTrip(title, destination, fullDate, rating);
		setTitle("");
		setDestination("");
		setDateDigits("");
		setRating(0);
	};

	const handleRatingChange = (text: string): void => {
		const number = Number(text);
		if (number >= 1 && number <= 5) {
			setRating(number);
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Tytuł"
				style={styles.input}
				value={title}
				onChangeText={setTitle}
			/>
			<TextInput
				placeholder="Destynacja"
				style={styles.input}
				value={destination}
				onChangeText={setDestination}
			/>
			<TextInput
				style={styles.input}
				value={date}
				onChangeText={handleDateChange}
				keyboardType="numeric"
				placeholder="YYYY-MM"
				maxLength={7}
			/>
			<TextInput
				placeholder="Ocena (1-5)"
				style={styles.input}
				value={rating.toString()}
				onChangeText={handleRatingChange}
				keyboardType="numeric"
			/>
			<Button title="Dodaj" onPress={handleAddTrip} color="#000" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
		padding: 16,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		padding: 8,
	},
});
