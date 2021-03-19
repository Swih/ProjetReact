import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, ScrollView, CheckBox, Button, SafeAreaView, Switch } from 'react-native';
import { varContexte } from '../App';


export default function JordanScreen() {
    const varGlobal = useContext(varContexte);
    var setisOnFirst = () => {
        var bool = !(varGlobal.isOn.isOnFirst);
        varGlobal.setToggle({...varGlobal.isOn, isOnFirst: bool});
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: 400, resizeMode: 'cover' }}
                    source={{ uri: 'https://media.discordapp.net/attachments/644472191043371008/819206304861650984/Sneackers_3_1000x1000.png?width=676&height=676' }}
                />
                <Text style={styles.title}>Jordan Low 8Ride - 289€</Text>
                <Text style={styles.sub}>La Jordan Low 8Ride qui a étais designe dans le but d'innover, on y retrouve les traces après leurs collab NMD récentes.</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#4361ee" }}
                        thumbColor={varGlobal.isOn.isOnFirst ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setisOnFirst}
                        value={varGlobal.isOn.isOnFirst}
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