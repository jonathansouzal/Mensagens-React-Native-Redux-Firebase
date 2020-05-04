import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export default props => (
    <View>
        <View>
            <Text>Logo - MensaggensApp</Text>
        </View>
        <View>
            <TextInput placeholder='E-mail' />
            <TextInput placeholder='Senha' />
            <Text>Não tem um conta? Crie aqui.</Text>
            <Text>Esqueci a senha</Text>
        </View>
        <View>
            <Button title="Entrar" onPress={() => false} />
        </View>
    </View>
)