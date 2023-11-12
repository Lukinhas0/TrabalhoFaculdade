import React from "react";
import { StyleSheet, Text, Image, View} from 'react-native'

function Cabecario(){
    return(
        <View style={styles.cabecario}>
            <Image source={require('../assets/Logotipo.png')} style={styles.logo}/>
            <Text style={styles.nome}>AurorA</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cabecario:{
        flexDirection: 'row',
        height: 200,
        backgroundColor:'#35F8D7',
        width: 390,
        alignItems: 'center',
        padding: 40,
        borderRadius: 30
    },
    nome:{
        fontSize: 60,
        marginTop: 60
    },
    logo:{
        marginTop: 60
    }
})
export default Cabecario;