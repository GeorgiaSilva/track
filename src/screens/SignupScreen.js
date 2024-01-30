import React, {useContext, useEffect} from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({navigation}) => {
    
    const {state, signup, clearErrorMessage} = useContext(AuthContext)
    
    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                headerText='Sign Up for Tresor'
                errorMessage={state.errorMessage}
                buttonText='Sign Up'
                onSubmit={signup}
            />
            <NavLink 
                content='Already have a account? Sign in instead'
                routeName="Signin"
            />
            
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200

    }
    
})

export default SignupScreen 


SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
    
  };
};
