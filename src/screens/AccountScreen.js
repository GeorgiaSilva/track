import React, {useContext} from "react";
import {StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
const AccountScreen = () => {
    const {signout} = useContext(AuthContext)
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2 >AccountScreen</Text>
            <Spacer>
                <Button title='Sign out' onPress={signout}/>
            </Spacer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default AccountScreen 