import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { album } from "../../types";
import Album from "../Album";

export type AlbumCategoryProps = {
	title: string;
	albums: [album];
};

const AlbumCategory = (props: AlbumCategoryProps) => (
	<View style={styles.container}>
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
export default AlbumCategory;
