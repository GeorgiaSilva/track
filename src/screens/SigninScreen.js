import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";



const SigninScreen = ({navigation}) => {

    const {state, signin, clearErrorMessage} = useContext(AuthContext)

    return (
        <View style={styles.container}> 
        <NavigationEvents onWillFocus={clearErrorMessage}/>


            <AuthForm 
                headerText='Sign In for Tresor'
                errorMessage={state.errorMessage}
                buttonText='Sign In'
                onSubmit={signin}
            />
            
        <NavLink 
            content="Don't have a account? Sign in instead"
            routeName="Signup"
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

export default SigninScreen 

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
      
    };
  };