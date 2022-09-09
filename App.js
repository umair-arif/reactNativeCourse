import { StatusBar } from "expo-status-bar";
import { View ,Text,FlatList,StyleSheet} from "react-native";
import { Nav } from "./src/navigation";
import { Login } from "./src/screens/login/login";
import { HomePage } from "./src/screens/home/home.jsx";

export default function App() {
  const list=[0,1,2,3,4,5,6,7,8,9];
  return (
    <View style={styles.mainCon}>
      <FlatList data={list} renderItem={({item})=>(
      <View style={styles.itemCon}>
        <Text>{item}</Text>
      </View>
  )}
    />
    </View>
  );
}

const styles=StyleSheet.create({
  mainCon:{
    flex: 1,
    backgroundColor:'yellow',
  },
  itemCon:{
    padding:10,
    margin:10,
    backgroundColor:'white',
    width:'90%',
    height:100
    }
})

