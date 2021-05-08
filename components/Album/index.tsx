import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export type AlbumProps = {
	album: {
		id: string;
		// name: string;
		// by: string;
		// numberOfLikes: number;
		imageUri: string;
		artistsHeadline: string;
	};
};

const Album = (props: AlbumProps) => (
	<View style={styles.container}>
		<Image source={{ uri: props.album.imageUri }} style={styles.image} />
		<Text style={styles.text}>{props.album.artistsHeadline}</Text>
	</View>
);
const styles = StyleSheet.create({
	container: {
		width: 155,
		margin: 10,
	},
	image: {
		width: "100%",
		height: 155,
	},
	text: {
		color: "grey",
		marginTop: 10,
	},
});
export default Album;
