import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { styles } from "./loginStyles";
import splash_logo from "../../../assets/images/splash_logo.jpg";
import { Button } from "../../components/button";
import { apiHelper } from "../../services/api";
// it will be always staring a capital letter
function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [securePassword, setSecurePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onLoadingPress = () => {
    setIsLoading(!isLoading);
  };

  const onButtonPress = () => {
    alert(`${email} ${password}`);
  };
  const onEyePress = () => {
    setSecurePassword(!securePassword);
  };

  const attemptToGetUserData = async () => {
    try {
      let response = await apiHelper().get("users");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      style={{ flex: 2 }}
      contentContainerStyle={{ justifyContent: "center", height: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.logoCon}>
          <Image source={splash_logo} style={styles.logo} />
        </View>
        <View style={styles.formCon}>
          <View style={styles.inputCon}>
            <Ionicons name="mail-outline" size={25} color="green" />
            <TextInput
              style={styles.input}
              placeholder={"Email Address"}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputCon}>
            <TextInput
              style={styles.input}
              placeholder={"Password"}
              secureTextEntry={securePassword}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={onEyePress}>
              <Ionicons
                name={securePassword ? "eye-off-outline" : "eye-outline"}
                size={25}
                color="green"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.btnCon}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCon}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoCon}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text>Don't have an account. Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export { Login };
