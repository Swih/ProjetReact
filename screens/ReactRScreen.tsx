import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, ScrollView, CheckBox, Button, SafeAreaView, Switch } from 'react-native';
import { varContexte } from '../App';

export default function ReactRScreen() {
    const varGlobal = useContext(varContexte);
    var setisOnFirst = () => {
        var bool = !(varGlobal.isOn.isOnFourth);
        varGlobal.setToggle({...varGlobal.isOn, isOnFourth: bool});
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: 400, resizeMode: 'cover' }}
                    source={{ uri: 'https://cdn.discordapp.com/attachments/644472191043371008/819206306262548500/Sneackers_4_000x1000.png' }}
                />
                <Text style={styles.title}>Nike React Editon R - 115€</Text>
                <Text style={styles.sub}>La Nike React Edition R a été designer par Virgil Abloh, en effet le PDG d'Offwhite a spécialement fait une paire pour Nike, évidemment rupture de stock dès la sortie de la paire.</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#4361ee" }}
                        thumbColor={varGlobal.isOn.isOnFourth ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setisOnFirst}
                        value={varGlobal.isOn.isOnFourth}
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
        paddingHorizontal: 20,
        paddingVertical: 20,

    },

    switchBtn: {
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
    }
});