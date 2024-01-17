import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useUser } from '../hooks/useUser';
import { useEffect, useState } from 'react';
import { SaveUserName } from '../views/saveUserName';
import { Splash } from '../views/splash';
import { Home } from './home';

const Stack = createStackNavigator();

export function IndexNavigator() {

    const { getUserName, userName } = useUser()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        handleGetUserName()
    }, [])

    async function handleGetUserName() {
        try {
            setLoading(true)
            await getUserName()
        } finally {
            setLoading(false)
        }
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {
                    loading ?
                        <Stack.Screen name="splash" component={Splash} />
                        :
                        !userName ?
                            <Stack.Screen name="salvarNomeUsuario" component={SaveUserName} />
                            :
                            <Stack.Screen name="home" component={Home} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}