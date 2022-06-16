import {useNavigation} from "@react-navigation/native";
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./style";
import React from "react";
import {Entypo} from "@expo/vector-icons";

export default function GameScreen() {
    // naviation to navigate to another screen
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.GameMenuOpen}>
            <TouchableOpacity onPress={() => navigation.navigate("GameScreen")}>
                <Entypo name={"cross"} size={30} color={"white"} style={{marginLeft: 20}}></Entypo>
            </TouchableOpacity>
            <View style={styles.GameMenu}>
                <TouchableOpacity style={styles.buttonGameMenu} onPress={() => navigation.navigate("GameScreen")}>
                    <Image source={require("../assets/play2.png")} style={{width: 30, height: 33,  marginLeft: -60}}></Image>
                    <Text style={styles.buttonGameMenuFont}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGameMenu} onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../assets/repeat.png")} style={{width: 35, height: 35, marginLeft: -35}}></Image>
                    <Text style={[styles.buttonGameMenuFont, {marginRight: 55} ]}>Again</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGameMenu}>
                    <Image source={require("../assets/clock.png")} style={{width: 35, height: 35, marginLeft: -48}}></Image>
                    <Text style={[styles.buttonGameMenuFont, {marginLeft: 8}]}>8 minutes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGameMenuLast}>
                    <Image source={require("../assets/trophy.png")} style={{width: 35, height: 35, marginLeft: -35}}></Image>
                    <Text style={styles.buttonGameMenuFont}>1067 points</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

