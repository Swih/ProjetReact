import React, { useContext } from 'react';
import { Button, StyleSheet, TextInput, View, Text, Image } from "react-native";

import EditScreenInfo from '../components/EditScreenInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from "react-native-reanimated";

import { varContexte } from '../App';

function HomeScreen({ navigation }) {
  const varGlobal = useContext(varContexte);

  return (
    <View>
      <View style={styles.panier}>
        <Text style={{ color: '#A9A9A9', fontSize: 14 }}>
          {varGlobal.isOn.isOnFirst == false && varGlobal.isOn.isOnSecond == false && varGlobal.isOn.isOnThird == false && varGlobal.isOn.isOnFourth == false ? <Text>Votre panier est vide{"\n"}</Text>: null }
          {varGlobal.isOn.isOnFirst == true ? <Text style={{ color: '#000', fontSize: 14 }}>{"\n"}Jordan Low 8Ride - 289€{"\n"}</Text>: null }

          {varGlobal.isOn.isOnSecond == true ? <Text style={{ color: '#000', fontSize: 14 }}>{"\n"}Air Force Sloptom - 950€{"\n"}</Text>: null }

          {varGlobal.isOn.isOnThird == true ? <Text style={{ color: '#000', fontSize: 14 }}>{"\n"}Air Force 1 Supra  - 695€{"\n"}</Text>: null }

          {varGlobal.isOn.isOnFourth == true ? <Text style={{ color: '#000', fontSize: 14 }}>{"\n"}Nike React Editon R - 115€{"\n"}</Text>: null }
        </Text>
      </View>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.titleText}>Où voulez-vous vous faire livrer ?</Text>
          <View style={styles.txtInputParent}>
            <View style={styles.txtInput}>
              <TextInput placeholder="Nom" style={{ justifyContent: 'flex-start', }} />
            </View>
            <View style={styles.txtInput}>
              <TextInput placeholder="Prénom" style={{ justifyContent: 'flex-end', }} />
            </View>
          </View>
          <View style={styles.txtInputParent}>
            <View style={styles.txtInput}>
              <TextInput placeholder="Ville" style={{ justifyContent: 'flex-start', }} />
            </View>
            <View style={styles.txtInput}>
              <TextInput placeholder="Code Postal" style={{ justifyContent: 'flex-end', }} />
            </View>
          </View>
          <View style={styles.txtInputA}>
            <TextInput placeholder="Adresse" />
          </View>
        </View>
        <View style={styles.buttonCont}>
          <Button
            title="COMMANDER"
            onPress={() => navigation.navigate('Details')}
            color="#4361ee"
          />
        </View>
      </View>
    </View>
  );
}

function PanierVide() {
  return <Text>Bienvenue</Text>;
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.containerCommande}>
      <View >
        <Text style={{textAlign: "center", marginVertical: 50, fontSize: 16, fontWeight: "bold"}}>Votre commande a bien été envoyé !</Text>

        <Image source={{uri: 'https://cdn.discordapp.com/attachments/644472191043371008/822140042025500762/flexcomm.png'}}
       style={{width: 300, height: 300}} />
     
      </View>
      <Text style={{textAlign: "center", marginHorizontal: "20%", marginTop: 32}}>Votre paire de sneackers sera livré entre 7 et 10 jours a l'adresse fourni ! </Text>
    </View>
  );
}

const Stack = createStackNavigator();

function TabTwoScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ title: 'Panier' }} component={HomeScreen} />
      <Stack.Screen name="Details" options={{ title: 'Retour au panier' }} component={DetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCommande: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
  },
  panier: {
    height: "60%",
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCont: {
    marginTop: 10,
    padding: 5,
    marginHorizontal: 5,
  },
  titleText: {
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  txtInputParent: {
    width: "auto",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around",
  },
  txtInputA: {
    borderRadius: 15,
    padding: 5,
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFF",
  },
  txtInput: {
    width: "45%",
    borderRadius: 15,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  wrapper: {
    padding: 10,
    backgroundColor: '#eee'
  },


});

export default TabTwoScreen;