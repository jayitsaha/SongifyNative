import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import Album from "../components/Album";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
const album = {
	id: "1",
	imageUri:
		"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
	artistsHeadline: "Taylor Swift, Kygo Objective C, Avicii",
};
export default function HomeScreen() {
	return (
		<View>
			<Album album={album} />
		</View>
	);
}
