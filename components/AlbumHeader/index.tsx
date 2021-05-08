import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { album } from "../../types";

export type AlbumHeaderProps = {
	album: album;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
	const { album } = props;
	return (
		<View style={styles.container}>
			<Image source={{ uri: album.imageUri }} style={styles.image} />
			<Text style={styles.name}>{album.name}</Text>
			<View style={styles.creatorContainer}>
				<Text style={styles.creator}>By {album.by}</Text>
				<Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
			</View>
			<TouchableOpacity>
				<View style={styles.button}>
					<Text style={styles.buttonText}>PLAY</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		padding: 20,
	},
	image: {
		width: 150,
		height: 150,
		margin: 15,
	},
	name: {
		color: "white",
		fontSize: 28,
		fontWeight: "bold",
	},
	creatorContainer: {
		flexDirection: "row",
		margin: 10,
	},
	creator: {
		color: "lightgray",
		margin: 5,
		fontSize: 16,
	},
	likes: {
		color: "lightgray",
		margin: 5,
		fontSize: 16,
	},
	button: {
		backgroundColor: "#19d27d",
		height: 50,
		width: 145,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 20,
	},
});
export default AlbumHeader;
