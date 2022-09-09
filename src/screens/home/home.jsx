import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

function HomePage() {
  let explosion;
  const startExplosion = () => {
    explosion.start();
  };
  const stopExplosion = () => {
    explosion.stop();
  };
  const resumeExplosion = () => {
    explosion.resume();
  };
  return (
    <View style={styles.container}>
      <ConfettiCannon
        count={200}
        origin={{ x: -10, y: 0 }}
        autoStart={false}
        ref={(ref) => {
          explosion = ref;
        }}
      />
      <TouchableOpacity onPress={startExplosion} style={styles.button}>
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopExplosion} style={styles.button}>
        <Text>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resumeExplosion} style={styles.button}>
        <Text>Resume</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor:'green',
        padding:10,
        margin:7,
        alignItems: 'center',
        borderRadius:10,
        width:150
  },
});

export { HomePage };
