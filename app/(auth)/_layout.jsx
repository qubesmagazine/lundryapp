import React from "react";
import {Stack} from 'expo-router'
// import Login from "./Login";

import { StatusBar } from "expo-status-bar";



function App() {

  return (
    <>
      <Stack>
        <Stack.Screen
          name="trackorder"
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="pricerates"
          options={{ headerShown: false }}
        />
                 <Stack.Screen
          name="commerciallaundry"
          options={{ headerShown: false }}
        />
                    <Stack.Screen
          name="now"
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar backgroundColor='#161622' style='light'/>
      </>
  );
}

export default App;
