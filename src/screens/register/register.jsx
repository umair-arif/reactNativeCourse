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
    const dummyData=[
      {
        'name': 'Umair',
        'gender': 'male',
        'age': 22,
        'city': 'Gujrat',
        'img':"https://cdn.pixabay.com/photo/2016/05/17/22/16/baby-1399332__480.jpg"
      },
      {
        'name': 'Ali',
        'gender': 'male',
        'age': 25,
        'city': 'Zafarwal',
        'img':"https://cdn.pixabay.com/photo/2012/03/04/00/36/baby-21971__480.jpg"
      }
    ]
    return (
      <View style={styles.container}>
       
        <View style={styles.logoCon}>
          <Image source={splash_logo} style={styles.logo} />
        </View>
        <View style={styles.formCon}>
          <TextInput style={styles.inputCon} placeholder={"Email Address"} />
          <TextInput style={styles.inputCon} placeholder={"Password"} secureTextEntry={true}/>
          <Button title="Register" onPress={() => navigation.navigate('HomePage',{dummyData})}/>
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
  