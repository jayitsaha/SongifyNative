/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
	Root: undefined;
	NotFound: undefined;
};

export type BottomTabParamList = {
	TabOne: undefined;
	TabTwo: undefined;
};

export type TabOneParamList = {
	TabOneScreen: undefined;
};

export type TabTwoParamList = {
	TabTwoScreen: undefined;
};

export type album = {
	id: string;
	name: string;
	by: string;
	numberOfLikes: number;
	imageUri: string;
	artistsHeadline: string;
};

export type Song = {
	id: string;
	imageUri: string;
	title: string;
	artist: string;
};
