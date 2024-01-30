import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return{errorMessage: '', token: action.payload}
        case 'clear_error':
            return {...state,errorMessage: ''}
        case 'signout':
            return {token: null, errorMessage: '' }

        default:
            return state;
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if(token) {
        dispatch({type: 'signin', payload: token})
        navigate('TrackList')
    } else {
        navigate('signup')
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error'})
}
const signup = (dispatch) => async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {email,password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type:'signin', payload: response.data.token})
            navigate('TrackList')
        }catch (err) {
            dispatch({type:'add_error', payload: 'Algo deu errado'})

        }
    }


const signin = (dispatch) => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signin', {email,password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'signin', payload: response.data.token})
        navigate('TrackList')
    } catch (err) {
        dispatch({type:'add_error', payload:'algo deu errado'})
    }
}

const signout = (dispatch) => async () => {
        await AsyncStorage.removeItem('token')
        dispatch({type:'signout'})
        navigate('loginFlow')
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup,signin,signout, clearErrorMessage, tryLocalSignin },
    {token: null, errorMessage: ''}
)

/*
{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWE1YTcxNTlkYjlkNmZkMGJmNzkwYmUiLCJpYXQiOjE3MDUzNTUwMjl9.PE4W9Hqg2_14fxo84mqZZiVpPWr5X_3sXoZYX8Ivqdg"}
*/