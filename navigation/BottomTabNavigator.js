import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import Favorites from '../screens/Favorites/MyFavorites';
import HomeScreen from '../screens/HomeScreen';
import Reading from '../screens/Preferences/Reading';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-compass" />,
        }}
      />
      <BottomTab.Screen
        name="Reading"
        component={Reading}
        options={{
          title: 'Reading',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />

      <BottomTab.Screen
        name="Favs"
        component={Favorites}
        options={{
          title: 'Favorites',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-heart" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Manga World';
    case 'Reading':
      return 'Actually Reading';
    case 'Favs':
      return 'My Favorites';
  }
}
