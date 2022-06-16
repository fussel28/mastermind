import {StyleSheet} from "react-native";

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D2D2D',
    },
    title: {
        color: '#fff',
        paddingHorizontal: 20,
        fontSize: 20,
        textTransform: "uppercase",
        fontFamily: "Oswald_500Medium",
        paddingTop: 5
    },
    title_start: {
        color: '#fff',
        paddingHorizontal: 20,
        fontSize: 38,
        textTransform: "uppercase",
        fontFamily: "Oswald_500Medium",
        marginTop: 10,
        marginBottom: 10,
    },
    undertitle: {
        color: '#fff',
        textTransform: "uppercase",
        fontFamily: "Oswald_200ExtraLight",
        paddingHorizontal: 20,
        fontSize: 18
    },
    normaltext: {
        color: '#fff',
        textTransform: "lowercase",
        fontSize: 16
    },
    textbubble: {
        color: '#fff',
        fontSize: 16,
        fontFamily: "Oswald_500Medium",
        paddingBottom: 40,
        zIndex: 99999,
        width: 180,
        left: 180,
        marginTop: 15
    },
    slider: {
        width: 170,
        height: 40,
        justifyContent: "center",
        marginLeft: 20,
        marginTop: 10,
        transform: [{scale: 1.25}],
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 200,
        paddingHorizontal: 20,
        marginBottom: 20,
        marginLeft: 5
    },
    colortheme1: {
        marginTop: 10,
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    colortheme2: {
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    color1: {
        backgroundColor: '#D2FDEE',
        width: 25,
        height: 25,
        borderRadius: 4,
        marginRight: 8,
        borderColor: '#D2FDEE',
        borderStyle: "solid",
        borderWidth: 3
    },
    color2: {
        backgroundColor: '#E0FEDE',
        width: 25,
        height: 25,
        borderRadius: 4,
        marginRight: 8,
        borderColor: '#E0FEDE',
        borderStyle: "solid",
        borderWidth: 3
    },
    color3: {
        backgroundColor: '#3E8D8B',
        width: 25,
        height: 25,
        borderRadius: 4,
        marginRight: 8,
        borderColor: '#3E8D8B',
        borderStyle: "solid",
        borderWidth: 3
    },
    color4: {
        backgroundColor: '#477272',
        width: 25,
        height: 25,
        borderRadius: 4,
        marginRight: 8,
        borderColor: '#477272',
        borderStyle: "solid",
        borderWidth: 3
    },
    color5: {
        backgroundColor: '#00A8A8',
        width: 25,
        height: 25,
        borderRadius: 4,
        marginRight: 8,
        borderColor: '#00A8A8',
        borderStyle: "solid",
        borderWidth: 3
    },
    color6: {
        backgroundColor: '#BCFCC2',
        width: 25,
        height: 25,
        borderRadius: 4,
        marginRight: 8,
        borderColor: '#BCFCC2',
        borderStyle: "solid",
        borderWidth: 3
    },
    color7: {
        backgroundColor: '#31E6E6',
        width: 25,
        height: 25,
        borderRadius: 4,
        marginRight: 8,
        borderColor: '#31E6E6',
        borderStyle: "solid",
        borderWidth: 3
    },
    color8: {
        backgroundColor: '#678D8A',
        width: 25,
        height: 25,
        borderRadius: 4,
        marginRight: 8,
        borderColor: '#678D8A',
        borderStyle: "solid",
        borderWidth: 3
    },
    color9: {
        backgroundColor: '#849C97',
        width: 25,
        height: 25,
        borderRadius: 4,
        marginRight: 8,
        borderColor: '#849C97',
        borderStyle: "solid",
        borderWidth: 3
    },
    lastgame_button: {
        width: 365,
        height: 120,
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: 20,
        overflow: 'hidden',
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    swiper_slide: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingTop: -30,
        paddingBottom: -20,
        flexGrow: 1
    },
    lastgame_button_text: {
        fontSize: 30,
        fontFamily: "Oswald_500Medium",
        color: '#ffffff',
        padding: 15,
        textTransform: "uppercase"
    },
    colorvalue: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    colorviewer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 20,
        marginBottom: 15
    },
    value_unfill: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: "#C4C4C4",
        borderColor: "#3A3A3A",
        borderStyle: "solid",
        borderWidth: 1,
        marginBottom: 5,
    },
    line: {
        display: "flex",
        flexDirection: "row",
        marginRight: 35,
        marginLeft: 35,
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 5
    },
    line_number: {
        color: "white",
        fontFamily: "Oswald_200ExtraLight",
        marginLeft: 12,
        marginTop: 2,
        fontSize: 18
    },
    neon: {
        height: 35,
        width: 35,
        borderRadius: 50,
        overflow: "hidden",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowColor: "#009999",
        borderColor: "#009999",
        borderStyle: "solid",
        borderWidth: 1.5,
        backgroundColor: "transparent",
        marginLeft: 15,
        marginRight: 15,

    },
    GameScreen: {
        backgroundColor: "rgba(229,229,229,0.07)",
        borderRadius: 20,
        marginRight: 10,
        marginLeft: 10,
        paddingBottom: 20,
        marginTop: 10,
    },
    animatedBox: {
        flex: 1,
        backgroundColor: "#38C8EC",
        padding: 10
    },
    colorpicker: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        marginLeft: 15
    },
    buttonGameMenu: {
        backgroundColor: "rgba(80,80,80,0.6)",
        height: 100,
        width: 220,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: 20,
    },
    buttonGameMenuLast: {
        backgroundColor: "rgba(80,80,80,0.6)",
        height: 100,
        width: 220,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: 0
    },
    buttonGameMenuFont: {
        color: '#fff',
        textTransform: "uppercase",
        fontSize: 22,
        marginLeft: 10,
        fontFamily: "Oswald_200ExtraLight",
    },
    GameMenu: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        marginVertical: 100,
    },
    GameMenuOpen: {
        width: 300,
        height: '100%',
        backgroundColor: 'rgba(30, 30, 30, 0.9)',
        borderRightWidth: 3,
        shadowOpacity: 0.9,
        shadowOffset: {height: 0, width: 298},
        shadowRadius: 1,
        shadowColor: "#2d2d2d",
        borderRightColor: "#009999",
    },
})

export default styles;