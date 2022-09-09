import { Text,TouchableOpacity,StyleSheet } from "react-native";


function Button({title,primary,secondary}){
    return (
        <TouchableOpacity style={primary? styles.pribtnCon:secondary? styles.secbtnCon:styles.btnCon}>
            <Text style={styles.textCon}>{title}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    btnCon:{
        backgroundColor:'blue',
        padding:10,
        margin:10,
        alignItems: 'center',
        borderRadius:10,

    },
    pribtnCon:{
        backgroundColor:'red',
        padding:10,
        margin:10,
        alignItems: 'center',
        borderRadius:10,
    },
    secbtnCon:{
        backgroundColor:'green',
        padding:10,
        margin:10,
        alignItems: 'center',
        borderRadius:10,

    },
    textCon:{
        color:'white'
    }
});





export {Button};