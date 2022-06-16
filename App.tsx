/*
Mastermind Game App / design only / without functionality
----------------
- GameMenu.tsx for Game Control or Menu
- GameScreen.tsx for Game Board
- Home.tsx for Home screen
- App.tsx for Navigation
- style.tsx styled Components

@since 15.06.2022
@author Fanny Wolff
@lastUpdated 20.06.2022

 */

import React from 'react';

// import extensions from expo
import {useFonts} from "expo-font";
import AppLoading from 'expo-app-loading';

// import components
import GameMenu from "./components/GameMenu";
import GameScreen from "./components/GameScreen";
import Home from "./components/Home";

// import and constants for navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App () {

    // import fonts using useFonts
    // @see https://docs.expo.dev/guides/using-custom-fonts/
    // used fonts: https://fonts.google.com/specimen/Oswald
    let [fontsLoaded, error] = useFonts({
        "Oswald_500Medium": require("./assets/fonts/Oswald-Medium.otf"),
        "Oswald_200ExtraLight": require("./assets/fonts/Oswald-ExtraLight.otf"),
    });

    // check if fonts loaded
    if(!fontsLoaded) {
        return <AppLoading />;
    }

    // navigation of app
    // @see https://reactnavigation.org/docs/getting-started/
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={"Home"} component={Home}></Stack.Screen>
                <Stack.Screen name={"GameScreen"} component={GameScreen}/>
                <Stack.Screen name={"GameMenu"} component={GameMenu} options={{presentation: 'transparentModal'}}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}
