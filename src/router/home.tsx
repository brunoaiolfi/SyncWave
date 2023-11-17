import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Library } from '../views/library';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#000',
        },
        tabBarActiveTintColor: '#ffff',
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={Library}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" color={color} size={20} />
          ),
          tabBarLabel: 'Pesquisar',
        }}
        name="Search"
        component={Library}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="book-open" color={color} size={20} />
          ),
          tabBarLabel: 'Bibliotecas'
        }}
        name="Library"
        component={Library}
      />
    </Tab.Navigator>
  );

}