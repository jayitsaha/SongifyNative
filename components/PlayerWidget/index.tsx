import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { Song } from "../../types";

const song = {
	id: "1",
	imageUri:
		"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
	title: "High on You",
	artist: "Helen",
};

const PlayerWidget = () => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: song.imageUri }} style={styles.image} />
			<View style={styles.rightContainer}>
				<View style={styles.nameContainer}>
					<Text style={styles.title}>{song.title}</Text>
					<Text style={styles.artist}>{song.artist}</Text>
				</View>

				<View style={styles.iconsContainer}>
					<AntDesign name="hearto" size={30} color={"white"} />
					<FontAwesome name="play" size={30} color={"white"} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 46,
		backgroundColor: "#131313",
		flexDirection: "row",
		width: "100%",
		borderWidth: 2,
		borderColor: "black",
		alignItems: "center",
	},
	image: {
		width: 75,
		height: 75,
		marginRight: 10,
	},
	rightContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	nameContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	iconsContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: 100,
		justifyContent: "space-around",
	},
	title: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
		margin: 10,
	},
	artist: {
		color: "lightgray",
		fontSize: 14,
	},
});

export default PlayerWidget;
