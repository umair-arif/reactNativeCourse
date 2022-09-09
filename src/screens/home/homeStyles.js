import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // backgroundColor: "red",
  },
  logoCon: {
    flex: 1,
    //backgroundColor: "orange",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    //borderRadius: 150,
    resizeMode: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },

  infoCon: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "20%",
    //backgroundColor: "#C8B6FF",
  },
});

export { styles };
