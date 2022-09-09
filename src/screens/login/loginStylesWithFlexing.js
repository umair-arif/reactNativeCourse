import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "red",
  },
  logoCon: {
    flex: 1,
    backgroundColor: "orange",
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
    flex: 1,
    backgroundColor: "pink",
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
    flex: 1,
    backgroundColor: "purple",
  },
});

export { styles };
