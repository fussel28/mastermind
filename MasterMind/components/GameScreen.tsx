import {ImageBackground, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import androidNotch from "../android-notch";
import {Entypo} from '@expo/vector-icons';
import styles from "./style";
import React, {useState} from "react";
import styled from "styled-components/native";
import {savedColor1, savedColor2, savedColor3, savedColor4, indexCharacter} from "./Home";
import {choseCharacter} from "./Home";
import {useNavigation} from "@react-navigation/native";
import GameMenu from "./GameMenu";

export default function GameScreen() {

    // navigation to navigate to another screen
    const navigation = useNavigation();

    // Styled Components
    // @see: https://docs.expo.dev/guides/using-styled-components/
    const Linenumber = styled.Text `
      color: white;
      font-family: "Oswald_200ExtraLight";
      margin-left: 12px;
      margin-top: 2px;
      font-size: 18px;
    `;

    const numbers = [1, 2, 3, 4];

    const char = [1];

    let colors = [savedColor1, savedColor2, savedColor3, savedColor4];

    let currentColor = "#000" ;

    // if color and button clicked set button to clicked color
    // @param color         color which should be set
    function changeColor(color: string){
        currentColor = color;
    }

    // returns a different text for each index
    function TextCharacter(){
        if(indexCharacter == 1){
            return(
                <Text style={styles.textbubble}>
                    Welcome, I'm Elcho and I'm going to share some tips & tricks with you. {"\n"}Click on a color to fill the next uncolored square in that color.
                </Text>
            )
        }
        else if(indexCharacter == 2){
            return(
                <Text style={styles.textbubble}>
                    Welcome, I'm Pengu and I'm going to share some tips & tricks with you. {"\n"}Click on a color to fill the next uncolored square in that color.
                </Text>
            )
        }
        else {
            return (
                <Text style={styles.textbubble}>
                    Welcome, I'm Doggo and I'm going to share some tips & tricks with you. {"\n"}Click on a color to fill the next uncolored square in that color.
                </Text>
            )
        }
    }

    // prints gameboard using states
    // @param i     index to increment numbers of lines
    function printLine(i: number){
        const [color1, setColor1] = useState("#fff");
        const [press1, setPress1] = useState(false);

        function changeStyle() {
            if(!press1){
                setPress1(true);
                setColor1(currentColor);
            }
            else {
                setPress1(false);
            }
        };

        return (
            <View>
                <TouchableOpacity style={{backgroundColor: color1, width: 55, height: 55, borderRadius: 10, borderColor: "#3A3A3A", borderStyle: "solid", borderWidth: 1, marginRight: 10, marginBottom: 5, marginTop: -10}} onPress={changeStyle}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        )
    }

    // change background color of button
    // @param i     string (color ("#fff"))
    function chooseColors(i: string){
        return (
            <TouchableOpacity style={[{backgroundColor: i}, styles.colorvalue]} onPress={() => changeColor(i)}>
                <Text></Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={androidNotch.AndroidSafeArea}>
            <ImageBackground source={require("../assets/GameFrame.png")} style={{height: 800}}>

                <TouchableOpacity onPress={() => navigation.navigate("GameMenu")}>
                    <Entypo name={"menu"} size={30} color={"white"} style={{marginLeft: 20}}></Entypo>
                </TouchableOpacity>

                <View style={styles.GameScreen}>
                    <SafeAreaView style={{display: "flex", flexDirection: "column"}}>
                        <View>
                            <SafeAreaView style={styles.colorviewer}>
                                {colors.map((i) => chooseColors(i))}
                            </SafeAreaView>
                        </View>
                        <View style={styles.colorpicker}>
                            <TouchableOpacity style={styles.neon}>
                                <Linenumber>1</Linenumber>
                            </TouchableOpacity>
                            <Text>
                                {numbers.map((i: number) => printLine(i))}
                            </Text>
                        </View>
                        <View style={styles.colorpicker}>
                            <TouchableOpacity style={styles.neon}>
                                <Linenumber>2</Linenumber>
                            </TouchableOpacity>
                            <Text style={{width: 300}}>
                                {numbers.map((i: number) => printLine(i))}
                            </Text>
                        </View>
                        <View style={styles.colorpicker}>
                            <TouchableOpacity style={styles.neon}>
                                <Linenumber>3</Linenumber>
                            </TouchableOpacity>
                            <Text>
                                {numbers.map((i: number) => printLine(i))}
                            </Text>
                        </View>
                        <View style={styles.colorpicker}>
                            <TouchableOpacity style={styles.neon}>
                                <Linenumber>4</Linenumber>
                            </TouchableOpacity>
                            <Text>
                                {numbers.map((i: number) => printLine(i))}
                            </Text>
                        </View>
                        <View style={styles.colorpicker}>
                            <TouchableOpacity style={styles.neon}>
                                <Linenumber>5</Linenumber>
                            </TouchableOpacity>
                            <Text>
                                {numbers.map((i: number) => printLine(i))}
                            </Text>
                        </View>
                        <View style={styles.colorpicker}>
                            <TouchableOpacity style={styles.neon}>
                                <Linenumber>6</Linenumber>
                            </TouchableOpacity>
                            <Text>
                                {numbers.map((i: number) => printLine(i))}
                            </Text>
                        </View>
                        <View style={styles.colorpicker}>
                            <TouchableOpacity style={styles.neon}>
                                <Linenumber>7</Linenumber>
                            </TouchableOpacity>
                            <Text>
                                {numbers.map((i: number) => printLine(i))}
                            </Text>
                        </View>
                        <Text style={styles.textbubble}>
                            {char.map((i: number) => TextCharacter())}
                        </Text>

                        <SafeAreaView>
                            <Text>
                                {char.map((i: number) => choseCharacter(indexCharacter))}
                            </Text>
                        </SafeAreaView>
                    </SafeAreaView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}