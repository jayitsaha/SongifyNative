import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { album } from "../../types";
import Album from "../Album";

export type AlbumCategoryProps = {
	title: string;
	albums: [album];
};

const AlbumCategory = (props: AlbumCategoryProps) => (
	<View style={styles.container}>
		<Text style={styles.title}>{props.title}</Text>
		<FlatList
			data={props.albums}
			renderItem={({ item }) => <Album album={item} />}
			keyExtractor={(item) => item.id}
			horizontal
		/>
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
