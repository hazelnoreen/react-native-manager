/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
    componentDidMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyA5u2LRS7k_EBe9ooA5zauhpShnahDIGoQ',
            authDomain: 'manager-80c91.firebaseapp.com',
            databaseURL: 'https://manager-80c91.firebaseio.com',
            projectId: 'manager-80c91',
            storageBucket: 'manager-80c91.appspot.com',
            messagingSenderId: '388166677674',
            appId: '1:388166677674:web:96527b73ea45d760d58cd3',
            measurementId: 'G-3YBS9Y6Y9C'
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        )
    }
}

export default App