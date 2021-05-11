import React, { useContext, useState, useEffect } from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Sound } from "expo-av/build/Audio/Sound";
import { AppContext } from "../../AppContext";

import { Song } from "../../types";

const PlayerWidget = () => {
	// const [song, setSong] = useState(null);
	const song = {
		id: "1",
		uri: "https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4",
		imageUri:
			"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
		title: "High on You",
		artist: "Helen",
	};
	const [sound, setSound] = useState<Sound | null>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(true);
	const [duration, setDuration] = useState<number | null>(null);
	const [position, setPosition] = useState<number | null>(null);

	const { songId } = useContext(AppContext);

	useEffect(() => {
		const fetchSong = async () => {
			try {
				// const data = await API.graphql(
				// 	graphqlOperation(getSong, { id: songId })
				// );
				// setSong(data.data.getSong);
			} catch (e) {
				console.log(e);
			}
		};

		fetchSong();
	}, [songId]);

	const onPlaybackStatusUpdate = (status) => {
		setIsPlaying(status.isPlaying);
		setDuration(status.durationMillis);
		setPosition(status.positionMillis);
	};

	const playCurrentSong = async () => {
		if (sound) {
			await sound.unloadAsync();
		}

		const { sound: newSound } = await Sound.createAsync(
			{ uri: song.uri },
			{ shouldPlay: isPlaying },
			onPlaybackStatusUpdate
		);

		setSound(newSound);
	};

	useEffect(() => {
		if (song) {
			playCurrentSong();
		}
	}, [song]);

	const onPlayPausePress = async () => {
		if (!sound) {
			return;
		}
		if (isPlaying) {
			await sound.stopAsync();
		} else {
			await sound.playAsync();
		}
	};

	const getProgress = () => {
		if (sound === null || duration === null || position === null) {
			return 0;
		}

		return (position / duration) * 100;
	};

	if (!song) {
		return null;
	}
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
