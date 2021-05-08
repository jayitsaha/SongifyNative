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
		<Text style={styles.title}>{props.title}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	title: {
		color: "white",
		fontSize: 30,
		fontWeight: "bold",
		margin: 10,
	},
});
export default AlbumCategory;
