import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Switch, ScrollView , TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import AirForceScreen from './AirForceScreen';
import JordanScreen from './JordanScreen';
import ReactRScreen from './ReactRScreen';
import AirSpoltomScreen from './AirSpoltomScreen';

import { varContexte } from '../App';


export default function TabOneScreen({ navigation }) {
  const varGlobal = useContext(varContexte);

  var setisOnFirst = () => {
    var value = !(varGlobal.isOn.isOnFirst);
    varGlobal.setToggle({...varGlobal.isOn, isOnFirst: value});
  }
  var setS = () => {
    var value = !(varGlobal.isOn.isOnSecond);
    varGlobal.setToggle({...varGlobal.isOn, isOnSecond: value});
  }
  var setT = () => {
    var value = !(varGlobal.isOn.isOnThird);
    varGlobal.setToggle({...varGlobal.isOn, isOnThird: value});
  }
  var setF = () => {
    var value = !(varGlobal.isOn.isOnFourth);
    varGlobal.setToggle({...varGlobal.isOn, isOnFourth: value});
  }

  return (  
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.container}>
          <View style={styles.containerbox}>
            <View style={styles.box}>
              <View style={styles.inner}>
                <TouchableOpacity onPress={() => navigation.push("JordanScreen")}>
                  <Image
                    style={{ height: 200, width: '100%', resizeMode: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    source={{ uri: 'https://media.discordapp.net/attachments/644472191043371008/819206304861650984/Sneackers_3_1000x1000.png?width=676&height=676' }}
                  />
                  <Text style={{ color: "#fff", textAlign: 'left', padding: 5, fontWeight: "bold" }} >Jordan Low 8Ride - 289€</Text>
                </TouchableOpacity>
                <View style={styles.swih}>
                <Switch
                        trackColor={{ false: "#A9a9a9", true: "#00FF00" }}
                        thumbColor={varGlobal.isOn.isOnFirst ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setisOnFirst}
                        value={varGlobal.isOn.isOnFirst}
                        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                    />
                </View>

              </View>
            </View>

            <View style={styles.box}>
              <View style={styles.inner}>
                <TouchableOpacity onPress={() => navigation.push("AirSpoltomScreen")}>
                  <Image
                    style={{ height: 200, width: '100%', resizeMode: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    source={{ uri: 'https://cdn.discordapp.com/attachments/644472191043371008/819206409304539167/Sneackers_1000x1000.png' }}
                  />
                  <Text style={{ color: "#fff", textAlign: 'left', padding: 5, fontWeight: "bold" }} >Air Force Sloptom - 950€</Text>
                </TouchableOpacity>
                <View style={styles.swih}>
                <Switch
                        trackColor={{ false: "#A9a9a9", true: "#00FF00" }}
                        thumbColor={varGlobal.isOn.isOnSecond ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setS}
                        value={varGlobal.isOn.isOnSecond}
                        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                    />
                </View>
              </View>
            </View>

            <View style={styles.box}>
              <View style={styles.inner}>
                <TouchableOpacity onPress={() => navigation.push("AirForceScreen")}>
                  <Image
                    style={{ height: 200, width: '100%', resizeMode: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    source={{ uri: 'https://cdn.discordapp.com/attachments/644472191043371008/819206301183508500/Sneackers_2_1000x1000.png' }}
                  />
                  <Text style={{ color: "#fff", textAlign: 'left', padding: 5, fontWeight: "bold" }} >Air Force 1 Supra  - 695€</Text>
                </TouchableOpacity>
                <View style={styles.swih}>
                <Switch
                        trackColor={{ false: "#A9a9a9", true: "#00FF00" }}
                        thumbColor={varGlobal.isOn.isOnThird ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setT}
                        value={varGlobal.isOn.isOnThird}
                        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                    />
                </View>
              </View>
            </View>

            <View style={styles.box}>
              <View style={styles.inner}>
                <TouchableOpacity onPress={() => navigation.push("ReactRScreen")}>
                  <Image
                    style={{ height: 200, width: '100%', resizeMode: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    source={{ uri: 'https://cdn.discordapp.com/attachments/644472191043371008/819206306262548500/Sneackers_4_000x1000.png' }}
                  />
                  <Text style={{ color: "#fff", textAlign: 'left', padding: 5, fontWeight: "bold" }} >Nike React Editon R - 115€</Text>
                </TouchableOpacity>
                <View style={styles.swih}>
                <Switch
                        trackColor={{ false: "#A9a9a9", true: "#00FF00" }}
                        thumbColor={varGlobal.isOn.isOnFourth ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setF}
                        value={varGlobal.isOn.isOnFourth}
                        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                    />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
  },

  box: {
    width: '45%',
    height: 300,
    marginVertical: 5,
    //borderRadius: 20,
  },

  inner: {
    flex: 1,

    backgroundColor: '#4361ee',
    borderRadius: 10,
  },

  swih: {
    flex: 1,
    padding: 20,
    alignContent: "center",
    textAlign: "center",
  },

  containerbox: {
    height: "100%",
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
    backgroundColor: "#eee",
  },
});