import React from 'react';
import { router } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MotiView, MotiText, MotiImage } from 'moti';
import laundry from '../assets/images/laundry.png'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Animated Logo */}
      <MotiImage
        source={laundry} // replace with your logo
        style={styles.logo}
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'timing', duration: 3000 }}
      />

      {/* Animated Title */}
      <MotiText
        style={styles.title}
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 3000, delay: 500 }}
      >
        Welcome to Lundry
      </MotiText>

      {/* Animated Subtitle */}
      <MotiText
        style={styles.subTitle}
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 3000, delay: 800 }}
      >
        Fresh laundry, at your doorstep
      </MotiText>

      {/* Animated Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
        <MotiText
          style={styles.buttonText}
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'timing', duration: 500, delay: 500 }}
        >
          Get Started
        </MotiText>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Uber-like black background
  },
  logo: {
    width: 180,
    height: 150,
    marginBottom: 40,
  },
  title: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    color: '#CCC',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});






// // WelcomeScreen.js
// import { router } from 'expo-router';
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


// const WelcomeScreen = () => {
 

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: 'https://example.com/lundry-logo.png' }} // replace with your logo
//         style={styles.logo}
//       />
//       <Text style={styles.title}>Welcome to Lundry</Text>
//       <Text style={styles.subTitle}>Fresh laundry, at your doorstep</Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => router.push('/home')}
//       >
//         <Text style={styles.buttonText}>Get Started</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default WelcomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000', // Uber-like black background
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     marginBottom: 40,
//   },
//   title: {
//     color: '#FFF',
//     fontSize: 36,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   subTitle: {
//     color: '#CCC', // Grey text
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 50,
//   },
//   button: {
//     backgroundColor: '#FFF', // White button
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 50,
//   },
//   buttonText: {
//     color: '#000', // Black text for the button
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });
