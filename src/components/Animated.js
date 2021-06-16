import React,{useState, useEffect} from 'react'
import {View, Text, StyleSheet, Animated, LogBox} from 'react-native';


export const AnimatedInit = () => {

    const [animated] = useState(new Animated.ValueXY(0,0))

useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
}, [])

    useEffect(()=>{
         Animated.spring( animated,{
             toValue:{x:200, y:500},
            
         }).start()
    },[])

    return (
        <View
        style={styles.container}
        >
            <Animated.View style={animated.getLayout()}>
            <View style={styles.ball} />
            </Animated.View>
           
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
    },
    ball:{
        height: 60,
        width: 60,
        borderRadius:30,
        borderWidth:30,
        borderColor:'black',
    }
})