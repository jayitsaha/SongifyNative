/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {
	Ionicons,
	Entypo,
	EvilIcons,
	MaterialCommunityIcons,
	FontAwesome5,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import AlbumScreen from "../screens/AlbumScreen";

import TabTwoScreen from "../screens/TabTwoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import { View, Image, Text, StyleSheet } from "react-native";
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="TabOne"
			tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
		>
			<BottomTab.Screen
				name="Home"
				component={TabOneNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo
							name="home"
							size={25}
							style={{ marginBottom: -3 }}
							color={color}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Search"
				component={TabTwoNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<EvilIcons
							name="search"
							size={25}
							style={{ marginBottom: -3 }}
							color={color}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Your Library"
				component={TabTwoNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="bookshelf"
							size={25}
							style={{ marginBottom: -3 }}
							color={color}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Premium"
				component={TabTwoNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5
							name="spotify"
							size={22}
							style={{ marginBottom: -3 }}
							color={color}
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

// Each tab has its own navigation stack, you can read more about this pattern here:

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
	return (
		<TabOneStack.Navigator>
			<TabOneStack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					headerTitle: (
						props // App Logo
					) => (
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Image
								style={{
									width: 200,
									height: 50,
									// marginLeft: -50,
								}}
								source={require("../assets/images/spotify1.png")}
								resizeMode="contain"
							/>
						</View>
					),
				}}
			/>

			{/* Album Screen */}

			<TabOneStack.Screen
				name="AlbumScreen"
				component={AlbumScreen}
				options={{
					headerTitle: () => (
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
								marginRight: 45,
							}}
						>
							<Image
								style={{
									width: 200,
									height: 50,
									// marginLeft: -50,
								}}
								source={require("../assets/images/spotify1.png")}
								resizeMode="contain"
							/>
						</View>
					),
				}}
			/>
		</TabOneStack.Navigator>
	);
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name="TabTwoScreen"
				component={TabTwoScreen}
				options={{ headerTitle: "Tab Two Title" }}
			/>
		</TabTwoStack.Navigator>
	);
}
