import { useContext } from "react";
import React from "react";
import { View, StyleSheet, Text, Button,FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { Title } from "react-native-paper";
const TrackListScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext)
    return (
        <View>
            <NavigationEvents onWillFocus={fetchTracks}/>
            <Text>TrackListScreen</Text>
           
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate('TrackDetail',{_id: item._id})}>
                    <ListItem chevron >
                        <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    </TouchableOpacity>
                );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default TrackListScreen 

TrackListScreen.navigationOptions = () =>{
    return{
        title: 'Tracks',
        headerTitleAlign: 'center'

}
    
}