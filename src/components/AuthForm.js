import React,{useState} from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
const AuthForm = ({headerText,errorMessage,onSubmit, buttonText}) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    return (
        <>
            <Spacer>
            <Text h3>{headerText}</Text>
            </Spacer> 
            <Input 
                label= "Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize = "none"
                autoCorrect = {false}
            />
            <Spacer />
            <Input 
                label= "Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize = "none"
                autoCorrect = {false}
                secureTextEntry
            />
            {errorMessage ? 
            <Text style={styles.error}>{errorMessage}</Text>:
            null
            }
            <Spacer>
            <Button  
                title={buttonText}
                onPress={()=> onSubmit({email,password})}
            />
            </Spacer>
        </>
    )

}

const styles = StyleSheet.create({
    error:{
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 15
    }, 

})

export default AuthForm

