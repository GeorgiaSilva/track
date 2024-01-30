//import '../_mockLocation' -> use this to test the user location in case the emulator doesn't work

import React, { useContext, useCallback} from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import { Context as LocationContext} from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer"
const TrackCreateScreen = ({isFocused}) => {
    
    const {state,addLocation} = useContext(LocationContext)
    const callback = useCallback((location)=>{
        addLocation(location,state.recording)
    },[state.recording])
    const [Err] = useLocation(isFocused, callback)

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2 >create a track</Text>
            <Map />
            {Err ? <Text style={styles.errLocation}>Please enable your location</Text> : null}
            <Spacer>
                <TrackForm />
            </Spacer>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    errLocation: {
        color: 'red'
    }
})
    
export default withNavigationFocus(TrackCreateScreen) 