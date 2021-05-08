import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { RootStackParamList } from "../types";

export default function NotFoundScreen({
	navigation,
}: StackScreenProps<RootStackParamList, "NotFound">) {
	return <View></View>;
}

const styles = StyleSheet.create({});
