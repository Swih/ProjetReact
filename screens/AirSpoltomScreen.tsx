import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, ScrollView, CheckBox, Button, SafeAreaView, Switch } from 'react-native';
import { varContexte } from '../App';

export default function AirSpoltomScreen() {
    const varGlobal = useContext(varContexte);
    var setisOnFirst = () => {
        var bool = !(varGlobal.isOn.isOnSecond);
        varGlobal.setToggle({...varGlobal.isOn, isOnSecond: bool});
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: 400, resizeMode: 'cover' }}
                    source={{ uri: 'https://cdn.discordapp.com/attachments/644472191043371008/819206409304539167/Sneackers_1000x1000.png' }}
                />
                <Text style={styles.title}>Air Force Sloptom - 950€</Text>
                <Text style={styles.sub}>Une paire plutôt simpliste qui a su renverser le monde de la Sneackers, avec un côte qui a été multiplié par 12 lors de sa sortie voici la Air Sloptom !</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#4361ee" }}
                        thumbColor={varGlobal.isOn.isOnSecond ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setisOnFirst}
                        value={varGlobal.isOn.isOnSecond}
                    />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: '#4361ee',
        padding: 20,
    },

    sub: {
        textAlign: "center",
        paddingHorizontal: 30,
        paddingVertical: 20,

    },

    switchBtn: {
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
    }
});