import { StyleSheet, FlatList, View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

// import SongListItem from "../components/SongListItem";
// import AlbumHeader from "../components/AlbumHeader";
import albumDetails from "../data/albumDetails";

const AlbumScreen = () => {
	const route = useRoute();

	useEffect(() => {
		console.log(route);
	}, []);

	return (
		<View>
			{/* <FlatList
				data={albumDetails.songs}
				renderItem={({ item }) => <SongListItem song={item} />}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
			/> */}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
export default AlbumScreen;
