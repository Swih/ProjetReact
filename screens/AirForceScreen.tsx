import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, ScrollView, CheckBox, Button, SafeAreaView, Switch } from 'react-native';
import { varContexte } from '../App';


export default function AirForceScreen() {
    const varGlobal = useContext(varContexte);
    var setisOnFirst = () => {
        var bool = !(varGlobal.isOn.isOnThird);
        varGlobal.setToggle({...varGlobal.isOn, isOnThird: bool});
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: 400, resizeMode: 'cover' }}
                    source={{ uri: 'https://cdn.discordapp.com/attachments/644472191043371008/819206301183508500/Sneackers_2_1000x1000.png' }}
                />
                <Text style={styles.title}>Air Force 1 Supra - 695€</Text>
                <Text style={styles.sub}>La Air Force 1 Supra est une paire special, il y a environ 200 exemplaires de celle-ci dans le monde avec son design innovent</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#4361ee" }}
                        thumbColor={varGlobal.isOn.isOnThird ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setisOnFirst}
                        value={varGlobal.isOn.isOnThird}
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