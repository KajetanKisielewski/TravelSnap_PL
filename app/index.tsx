import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>TravelSnap</Text>
			<Text style={styles.subtitle}>Twój dziennik podróży</Text>
			<Text style={styles.author}>Kacper Zabłudowski</Text>
			<Image
				source={require("../assets/images/logo.png")}
				style={styles.icon}
			/>
			<Pressable
				style={styles.button}
				onPress={() => Alert.alert("Witam w TravelSnap")}
			>
				<Text style={styles.buttonText}>Witaj, kliknij mnie</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#1a1a2e",
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 18,
		color: "#e94560",
		marginBottom: 24,
	},
	author: {
		fontSize: 16,
		color: "#888",
		fontStyle: "italic",
	},
	icon: {
		marginTop: 24,
		width: 100,
		height: 100,
	},
	button: {
		backgroundColor: "#e94560",
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "#ffffff",
	},
});
