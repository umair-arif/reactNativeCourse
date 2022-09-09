import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
     // height: "100%",
      width: "100%",
      //backgroundColor: "red",
    },
    logoCon: {
      width: "100%",
      //height: "30%",
      //backgroundColor: "yellow",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    logo: {
      width: 200,
      height: 200,
      borderRadius: 100,
      resizeMode: "center",
      // tintColor: "rgba(0,0,0,0.5)",
    },
    formCon: {
      width: "100%",
      height: "50%",
      padding: 10,
      justifyContent: "center",
      //backgroundColor: "purple",
    },
    inputCon: {
      flexDirection:'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: "brown",
      marginVertical: 10,
      padding: 10,
      borderRadius: 20,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
      width:'100%'
    },
    input:{
      width:'90%',
    },
    btnCon:{
      backgroundColor:'green',
        padding:10,
        margin:10,
        alignItems: 'center',
        borderRadius:10,
    },
    btnText:{
      color:'white'
  },
    infoCon: {
      alignItems: "center",
      width: "100%",
      height: "20%",
      //backgroundColor: "#C8B6FF",
    },
  });

export { styles };
