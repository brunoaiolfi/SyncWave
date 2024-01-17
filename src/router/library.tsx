import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Library } from '../views/library';
import { CreatePlaylist } from '../views/playlist/create';

export function LibraryRoutes() {

    const { Navigator, Screen } = createStackNavigator();

    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='library'
            >
                <Screen name="library" component={Library} />
                <Screen name="createPlaylist" component={CreatePlaylist} options={{
                    headerShown: true,
                    headerTitle: 'Criar Playlist'
                }} />
            </Navigator>
        </NavigationContainer>
    )

}