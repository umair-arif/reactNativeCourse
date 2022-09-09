import {
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Pressable,
    ImageBackground,
  } from "react-native";
  import { styles } from "./registerStyles";
  import dp_2 from "../../../assets/images/dp_2.jpg";
  import splash_logo from "../../../assets/images/splash_logo.jpg";
  
  // it will be always staring a capital letter
  function Register({navigation}) {
    const alertFunc = () => {
      Alert.alert("hello", "hie how are you");
    };
    return (
      <View style={styles.container}>
       
        <View style={styles.logoCon}>
          <Image source={splash_logo} style={styles.logo} />
        </View>
        <View style={styles.formCon}>
          <TextInput style={styles.inputCon} placeholder={"Email Address"} />
          <TextInput style={styles.inputCon} placeholder={"Password"} secureTextEntry={true}/>
          <Button title="Register" onPress={() => navigation.navigate('Home')}/>
        </View>
        <View style={styles.infoCon}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <Text>Already registered goes to sing in</Text>
            </TouchableOpacity>
  
            
        </View>
      </View>
    );
  }
  
  
  export { Register };
  