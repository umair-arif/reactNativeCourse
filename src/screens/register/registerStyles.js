import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  logoCon: {
    width: "100%",
    height: "30%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: "center",
  },
  formCon: {
    width: "100%",
    height: "50%",
    padding: 20,
    justifyContent: "center",
  },
  inputCon: {
    borderWidth: 1,
    borderColor: "brown",
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  infoCon: {
    alignItems: "center",
    width: "100%",
    height: "20%",
  },
});

export { styles };
