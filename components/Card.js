import React from 'react'
import { View,StyleSheet } from 'react-native'
import Colors from '../constants/colors'
export default  function Card({children}) {
  return (
<View style={styles.Card}>
{children}
</View>
  )
}

const styles = StyleSheet.create({

    Card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginHorizontal: 25,
        borderRadius: 8,
        padding: 16,
        backgroundColor:Colors.color900,
        // Used for showdow in Android
        elevation: 8,
        // Now for ios showdow
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
    
   
})