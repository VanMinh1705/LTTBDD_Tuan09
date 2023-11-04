import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen02 from "./screens/Screen02";
import Screen03 from "./screens/Screen03";
import { useState, useEffect } from "react";

function Screen01({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [text, setText] = useState("");
  const fetchData = async () => {
    const resp = await fetch(
      "https://650424bdc8869921ae2491fd.mockapi.io/user"
    );
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={{ width: "271px", height: "271px" }}
        source={require("./assets/Image 95.png")}
      />
      <Text
        style={{
          color: "#8353E2",
          textAlign: "center",
          fontFamily: "Epilogue",
          fontSize: "24px",
          fontWeight: 700,
          marginTop: "42px",
        }}
      >
        {" "}
        MANAGE YOUR TASK
      </Text>
      <View style={styles.inputTxt}>
        <Image
          style={{ width: "20px", height: "20px" }}
          source={require("./assets/Frame.png")}
        />
        <TextInput
          placeholder="Enter your name"
          onChangeText={setText}
          value={text}
        ></TextInput>
      </View>

      <Pressable
        onPress={() => {
          data.map((item) => {
            if (text === item.name) {
              navigation.navigate("Screen02", item);
            }
          });
        }}
        style={{
          width: "190px",
          height: "44px",
          borderRadius: "12px",
          backgroundColor: "#00BDD6",
          alignItems: "center",
          paddingTop: "10px",
          marginTop: "32px",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          GET STARTED
        </Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen01} />
        <Stack.Screen name="Screen02" component={Screen02} />
        <Stack.Screen name="Screen03" component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  inputTxt: {
    display: "inline-flex",
    padding: "9px",
    gap: "8px",
    width: "334px",
    height: "43px",
    borderRadius: "12px",
    border: "1px solid #9095A0",
    backgroundColor: "rgba(0, 0, 0, 0.00)",
    flexDirection: "row",
    marginTop: "60px",
  },
});
