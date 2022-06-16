import {
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    Linking,
    ScrollView,
    Dimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import androidNotch from '../android-notch';
import { BlurView } from 'expo-blur';
import {useNavigation} from "@react-navigation/native";
import GameScreen from "./GameScreen";
import styles from "./style";


// load images for character slider
const images = [
    require("../assets/character_dog.png"),
    require("../assets/character_elcho.png"),
    require("../assets/character_pengu.png"),
]


// Variables
export let savedColor1 = "#fff";
export let savedColor2 = "#fff";
export let savedColor3 = "#fff";
export let savedColor4 = "#fff";
export let indexCharacter : number;

// index of character is the index from slider
// @param index         index from chosen character
function setIndex(index: number){
    indexCharacter = index;
}

// returns a different character for each index
// @param index         index from chosen character

export function choseCharacter(index: number){
    if(indexCharacter == 1){
        return(
            <SafeAreaView>
                <ImageBackground
                    source={require("../assets/elcho.png")}
                    style={{width: 250, height: 250, marginLeft: 0, right: 30, bottom: 200}}
                ></ImageBackground>
            </SafeAreaView>
        )
    }
    else if(indexCharacter == 2){
        return(
            <SafeAreaView>
                <ImageBackground
                    source={require("../assets/pengu.png")}
                    style={{width: 250, height: 250, marginLeft: 90, right: 135, bottom: 200}}
                ></ImageBackground>
            </SafeAreaView>
        )
    }
    else {
        return (
            <SafeAreaView>
                <ImageBackground
                    source={require("../assets/Dog.png")}
                    style={{width: 350, height: 330, marginLeft: 20, right: 135, bottom: 265}}
                ></ImageBackground>
            </SafeAreaView>
        )
    }
}


export default function Home() {

    const navigation = useNavigation();
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const imageWidth = screenWidth / 2;

    let currentColor = "#FD9793" ;

    // function that displays the color on the Gamescreen as a chosen color
    function touchchange(){
        const [color1, setColor1] = useState("#D2FDEE");
        const [press1, setPress1] = useState(false);

        function changeStyle() {
            if(!press1){
                setPress1(true);
                setColor1(currentColor);

                if(savedColor1 == "#fff"){
                    savedColor1 = "#D2FDEE";
                }
                else if(savedColor2 == "#fff"){
                    savedColor2 = "#D2FDEE";
                }
                else if(savedColor3 == "#fff"){
                    savedColor3 = "#D2FDEE";
                }
                else if(savedColor4 == "#fff"){
                    savedColor4 = "#D2FDEE";
                }
                else {
                    alert("You have chosen more than 4 colors.");
                }
            }
            else {
                setPress1(false);
            }
        }

        return (
            <View>
                <TouchableOpacity style={[styles.color1, {borderColor: color1}]} onPress={changeStyle}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        )
    }

    function touchchange2(){
        const [color1, setColor1] = useState("#E0FEDE");
        const [press1, setPress1] = useState(false);

        function changeStyle2() {
            if(!press1){
                setPress1(true);
                setColor1(currentColor);

                if(savedColor1 == "#fff"){
                    savedColor1 = "#E0FEDE";
                }
                else if(savedColor2 == "#fff"){
                    savedColor2 = "#E0FEDE";
                }
                else if(savedColor3 == "#fff"){
                    savedColor3 = "#E0FEDE";
                }
                else if(savedColor4 == "#fff"){
                    savedColor4 = "#E0FEDE";
                }
                else {
                    alert("You have chosen more than 4 colors.");
                }
            }
            else {
                setPress1(false);
            }
        }

        return (
            <View>
                <TouchableOpacity style={[styles.color2, {borderColor: color1}]} onPress={changeStyle2}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        )
    }

    function touchchange3(){
        const [color1, setColor1] = useState("#3E8D8B");
        const [press1, setPress1] = useState(false);

        function changeStyle() {
            if(!press1){
                setPress1(true);
                setColor1(currentColor);

                if(savedColor1 == "#fff"){
                    savedColor1 = "#3E8D8B";
                }
                else if(savedColor2 == "#fff"){
                    savedColor2 = "#3E8D8B";
                }
                else if(savedColor3 == "#fff"){
                    savedColor3 = "#3E8D8B";
                }
                else if(savedColor4 == "#fff"){
                    savedColor4 = "#3E8D8B";
                }
                else {
                    alert("You have chosen more than 4 colors.");
                }
            }
            else {
                setPress1(false);
            }
        }

        return (
            <View>
                <TouchableOpacity style={[styles.color3, {borderColor: color1}]} onPress={changeStyle}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        )
    }

    function touchchange4(){
        const [color1, setColor1] = useState("#477272");
        const [press1, setPress1] = useState(false);

        function changeStyle() {
            if(!press1){
                setPress1(true);
                setColor1(currentColor);

                if(savedColor1 == "#fff"){
                    savedColor1 = "#477272";
                }
                else if(savedColor2 == "#fff"){
                    savedColor2 = "#477272";
                }
                else if(savedColor3 == "#fff"){
                    savedColor3 = "#477272";
                }
                else if(savedColor4 == "#fff"){
                    savedColor4 = "#477272";
                }
                else {
                    alert("You have chosen more than 4 colors.");
                }
            }
            else {
                setPress1(false);
            }
        }

        return (
            <View>
                <TouchableOpacity style={[styles.color4, {borderColor: color1}]} onPress={changeStyle}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        )
    }

    function touchchange5(){
        const [color1, setColor1] = useState("#00A8A8");
        const [press1, setPress1] = useState(false);

        function changeStyle() {
            if(!press1){
                setPress1(true);
                setColor1(currentColor);

                if(savedColor1 == "#fff"){
                    savedColor1 = "#00A8A8";
                }
                else if(savedColor2 == "#fff"){
                    savedColor2 = "#00A8A8";
                }
                else if(savedColor3 == "#fff"){
                    savedColor3 = "#00A8A8";
                }
                else if(savedColor4 == "#fff"){
                    savedColor4 = "#00A8A8";
                }
                else {
                    alert("You have chosen more than 4 colors.");
                }
            }
            else {
                setPress1(false);
            }
        }

        return (
            <View>
                <TouchableOpacity style={[styles.color5, {borderColor: color1}]} onPress={changeStyle}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        )
    }

    function touchchange6(){
        const [color1, setColor1] = useState("#BCFCC2");
        const [press1, setPress1] = useState(false);

        function changeStyle() {
            if(!press1){
                setPress1(true);
                setColor1(currentColor);

                if(savedColor1 == "#fff"){
                    savedColor1 = "#BCFCC2";
                }
                else if(savedColor2 == "#fff"){
                    savedColor2 = "#BCFCC2";
                }
                else if(savedColor3 == "#fff"){
                    savedColor3 = "#BCFCC2";
                }
                else if(savedColor4 == "#fff"){
                    savedColor4 = "#BCFCC2";
                }
                else {
                    alert("You have chosen more than 4 colors.");
                }
            }
            else {
                setPress1(false);
            }
        }

        return (
            <View>
                <TouchableOpacity style={[styles.color6, {borderColor: color1}]} onPress={changeStyle}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        )
    }

    function touchchange7(){
        const [color1, setColor1] = useState("#31E6E6");
        const [press1, setPress1] = useState(false);

        function changeStyle() {
            if(!press1){
                setPress1(true);
                setColor1(currentColor);

                if(savedColor1 == "#fff"){
                    savedColor1 = "#31E6E6";
                }
                else if(savedColor2 == "#fff"){
                    savedColor2 = "#31E6E6";
                }
                else if(savedColor3 == "#fff"){
                    savedColor3 = "#31E6E6";
                }
                else if(savedColor4 == "#fff"){
                    savedColor4 = "#31E6E6";
                }
                else {
                    alert("You have chosen more than 4 colors.");
                }
            }
            else {
                setPress1(false);
            }
        }

        return (
            <View>
                <TouchableOpacity style={[styles.color7, {borderColor: color1}]} onPress={changeStyle}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        )
    }

    function touchchange8(){
        const [color1, setColor1] = useState("#678D8A");
        const [press1, setPress1] = useState(false);

        function changeStyle() {
            if(!press1){
                setPress1(true);
                setColor1(currentColor);

                if(savedColor1 == "#fff"){
                    savedColor1 = "#678D8A";
                }
                else if(savedColor2 == "#fff"){
                    savedColor2 = "#678D8A";
                }
                else if(savedColor3 == "#fff"){
                    savedColor3 = "#678D8A";
                }
                else if(savedColor4 == "#fff"){
                    savedColor4 = "#678D8A";
                }
                else {
                    alert("You have chosen more than 4 colors.");
                }
            }
            else {
                setPress1(false);
            }
        }

        return (
            <View>
                <TouchableOpacity style={[styles.color8, {borderColor: color1}]} onPress={changeStyle}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        )
    }

    function touchchange9(){
        const [color1, setColor1] = useState("#849C97");
        const [press1, setPress1] = useState(false);

        function changeStyle() {
            if(!press1){
                setPress1(true);
                setColor1(currentColor);

                if(savedColor1 == "#fff"){
                    savedColor1 = "#849C97";
                }
                else if(savedColor2 == "#fff"){
                    savedColor2 = "#849C97";
                }
                else if(savedColor3 == "#fff"){
                    savedColor3 = "#849C97";
                }
                else if(savedColor4 == "#fff"){
                    savedColor4 = "#849C97";
                }
                else {
                    alert("You have chosen more than 4 colors.");
                }
            }
            else {
                setPress1(false);
            }
        }

        return (
            <View>
                <TouchableOpacity style={[styles.color9, {borderColor: color1}]} onPress={changeStyle}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        )
    }

    const color = [1];

    return (
        <SafeAreaView style={androidNotch.AndroidSafeArea}>
            <ImageBackground source={require("../assets/Group.png")} style={{paddingBottom: 300}}>

                <TouchableOpacity>
                    <Image source={require("../assets/Profile.png")} style={{width: 80, height: 80}}></Image>
                </TouchableOpacity>
                <Text style={styles.title}>Configure next game</Text>
                <Text style={styles.undertitle}>Choose your level</Text>
                <Slider style={styles.slider} minimumValue={1} maximumValue={11} step={1} minimumTrackTintColor="#00A8A8" maximumTrackTintColor="#97A6A0" thumbTintColor='#00A8A8'
                />

                <View style={styles.row}>
                    <Text style={styles.normaltext}>easy</Text>
                    <Text style={styles.normaltext}>hard</Text>
                </View>
                <Text style={styles.undertitle}>Choose your color theme</Text>
                <View style={styles.colortheme1}>
                    <Text>{color.map((i) => touchchange())}</Text>
                    <Text>{color.map((i) => touchchange2())}</Text>
                    <Text>{color.map((i) => touchchange3())}</Text>
                </View>
                <View style={styles.colortheme1}>
                    <Text>{color.map((i) => touchchange4())}</Text>
                    <Text>{color.map((i) => touchchange5())}</Text>
                    <Text>{color.map((i) => touchchange6())}</Text>
                </View>
                <View style={styles.colortheme2}>
                    <Text>{color.map((i) => touchchange7())}</Text>
                    <Text>{color.map((i) => touchchange8())}</Text>
                    <Text>{color.map((i) => touchchange9())}</Text>
                </View>

                <Text style={styles.undertitle}>Choose your character</Text>
                <View>
                    <ScrollView pagingEnabled={true} horizontal={true} contentOffset={{x: 100, y:0}} snapToInterval={200} snapToStart={false} contentContainerStyle={styles.swiper_slide}>
                        {
                            images.map((image, index) => (
                                <TouchableOpacity onPress={() => {navigation.navigate(GameScreen); setIndex(index)}} key={navigation.index}>
                                    <Image
                                        source={image}
                                        key={image.index}
                                        style={{width: imageWidth, height: 250, resizeMode: "contain", marginLeft: 10}}
                                    ></Image>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>

                <View>
                    <TouchableOpacity>
                        <BlurView intensity={30} style={styles.lastgame_button}>
                            <Text style={styles.lastgame_button_text}>Continue {'\n'}Last Game</Text>
                            <Image source={require("../assets/play.png")} style={{width: 80, height: 80, marginLeft: 60}}></Image>
                        </BlurView>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        </SafeAreaView>
    )

}
//