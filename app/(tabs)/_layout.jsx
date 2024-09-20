import React, { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import { Appearance, useColorScheme as nativeUseColorScheme } from 'react-native'; // Import Appearance API

import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
    const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  // Listen for changes in color scheme
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });
    return () => subscription.remove();
  }, []);


  return (
    <>
      <Tabs
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === "home"){
              iconName = "home"
            } else if (route.name === "search") {
              iconName = "search-outline";
            } else if (route.name === "account") {
              iconName = "person-outline";
            }

            const customizeSize = 25;

            return (
              <Ionicons
              name={iconName}
              size={customizeSize}
              color={focused ? 'black' : "gray"}
              
              />
            )
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "SpaceGroteskMedium"
          },
          tabBarStyle: {
            backgroundColor: colorScheme === "dark" ? 'black' : "white"  
          }
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />

<Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            headerShown: false,
          }}
        />
            <Tabs.Screen
          name="account"
          options={{
            title: 'Account',
            headerShown: false,
          }}
        />
      
      
      </Tabs>
    </>
  );
};


export default TabsLayout;




