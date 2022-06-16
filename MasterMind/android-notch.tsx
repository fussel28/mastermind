import { StyleSheet, Platform, StatusBar } from "react-native";

// @source: https://stackoverflow.com/questions/51289587/how-to-use-safeareaview-for-android-notch-devices
export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "#2D2D2D",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});