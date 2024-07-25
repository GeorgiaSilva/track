import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ComentsScreen } from './src/screens/ComentsScreen'
import { ComentsDetailScreen } from './src/screens/ComentsDetailScreen'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const navigator = createStackNavigator ({
  Search: SearchScreen,
  ResultsShow: createMaterialBottomTabNavigator({
    Home: ResultsShowScreen,
    Comentario: ComentsScreen
  })
}, 
{
  initialRouteName:'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})




export default createAppContainer(navigator)