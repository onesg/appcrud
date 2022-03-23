import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

import Login from './src/components/Login';

export default function App() {

    //  PASSANDO VALOR NULO PARA USUARIO
    const [user, setUser] = useState(null);

    //  SE USUARIO FOR FALSO, REDIRECIONAR PARA PAGINA DE LOGIN
    if (!user) {
        return <Login />
    }

    return (
        <SafeAreaView style={StyleSheet.container}>
            <Text>LISTAR CARROS</Text>
        </SafeAreaView>
    );

}

//  ESTILOS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 10,
        backgroundColor: '#F2f6fc'
    }
})
