import React from 'react'
import { StyleSheet} from 'react-native'
import {Appbar, Text} from 'react-native-paper'

const Header = () => {

    const _handleMore = () =>{

    }
    return (
       <Appbar.Header style={styles.header} >
           <Appbar.Content
           title={
               <Text style={styles.titleContent}>
                   Rw
               </Text>
           }
           style={styles.content}
           />
           <Appbar.Action icon="dots-vertical" onPress={_handleMore}/>
       </Appbar.Header>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#57abff",
        height:'5%'
    },
    titleContent:{
        fontSize:30,
        fontWeight:'bold',
        color:"#fff"
    },
    content:{
        width:'100%'
    }
})
