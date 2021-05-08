import React from "react";
import {
	View,
	Image,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";
import { album } from "../../types";
export type AlbumProps = {
	album: album;
};

const Album = (props: AlbumProps) => {
	const onPress = () => {
		console.log("WASSUP");
	};
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<Image
					source={{ uri: props.album.imageUri }}
					style={styles.image}
				/>
				<Text style={styles.text}>{props.album.artistsHeadline}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

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
