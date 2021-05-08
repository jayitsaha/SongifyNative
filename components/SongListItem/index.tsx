import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

import { Song } from "../../types";

export type SongListItemProps = {
	song: Song;
};

const SongListItem = (props: SongListItemProps) => {
	const { song } = props;
	return (
		<View style={styles.container}>
			{/* <Image source={{ uri: song.imageUri }} style={styles.image} /> */}
			<View style={styles.rightContainer}>
				<Text style={styles.title}>{song.title}</Text>
				<Text style={styles.artist}>{song.artist}</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		margin: 15,
	},
	image: {
		width: 75,
		height: 75,
	},
	rightContainer: {
		justifyContent: "space-around",
		marginLeft: 15,
	},
	title: {
		color: "#F5F5F5",
		fontSize: 18,
	},
	artist: {
		color: "lightgray",
		fontSize: 14,
	},
});
export default SongListItem;
