import axios from "axios";
import { useEffect, useState, React } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import { apiHelper } from "../../services/api";
import { styles } from "./homeStyles";
function HomePage({ navigation }) {
  const [users, setUsers] = useState();

  useEffect(() => {
    apiHelper()
      .get("users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Text style={styles.text}>{item.login}</Text>
            <Image
              source={{ uri: item.avatar_url }}
              style={{ height: 50, width: 50, borderRadius: 25 }}
            />
          </View>
        )}
      />
    </View>
  );
}

export { HomePage };
