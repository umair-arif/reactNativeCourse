import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import { styles } from "./homeStyles";
function HomePage({ navigation, route }) {
  const { dummyData } = route.params;

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.age}</Text>
            <Image
              source={{ uri: item.img }}
              style={{ height: 100, width: 100 }}
            />
          </View>
        )}
      /> */}

      <View>
        {
          dummyData.map((user)=>(
            <>
            <Text style={styles.text}>{user.name}</Text>
            <Text style={styles.text}>{user.age}</Text>
            <Image
              source={{ uri: user.img }}
              style={{ height: 100, width: 100 }}
            />
            </>
          ))
        }
      </View>
    </View>
  );
}

export { HomePage };
