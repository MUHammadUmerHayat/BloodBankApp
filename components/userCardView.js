import React,{useState} from 'react'
import {View,Text,Image,Modal,Pressable,FlatList} from 'react-native'
import {cardStyle as style} from '../styles/style.js'

export const userCardView=(props)=>{
    const [optionsMenu,setOptionsMenu]=useState(false)
    const renderItem = ({ item }) => (
        <View style={style.cardMain}>
            <View style={style.menuView}>
                    <View style={style.textWithIcons}>
                        <Text>Name: {item.name} </Text>
                    </View>
                    <Pressable style={style.icons} onPress={()=>{setOptionsMenu(true)}}>
                        <Image source={require('../images/menu.png')}/>
                    </Pressable>
            </View>
            <View style={style.textView}>
                <Text>Place: {item.place}</Text>
            </View>
            <View style={style.textView}>
                <Text>Panchayath: {item.panchayath}</Text>
            </View>
            <View style={style.menuView}>
                <View style={style.textWithIcons}>
                    <Text>Last Donated: {item.lastDonated}</Text>
                </View>
                <View style={style.icons}>
                    <View>
                        <Image source={require('../images/phone-call.png')}/>
                    </View>
                </View>
            </View>
        </View>
      );
        //placeholder views based on the search data
      const Card = () => (
        <View style={style.main}>
            <FlatList
                    data={props.cardData}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id.toString()}
            />
            <Modal
                visible={optionsMenu}
                transparent={true}
            >
                <Pressable style={style.menuModal} onPress={()=>{setOptionsMenu(false)}}>
                    <View style={style.menu}>
                        <Text style={style.menuText}>Report as False Data</Text>
                        <View style={style.line}></View>
                        <Text style={style.menuText}>Mark as Donated</Text>
                    </View>
                </Pressable>
            </Modal>
        </View>
    ) 
    const NoCard = () => (
        <View style={style.emptyView}>
           <Text style={style.emptyText}>No Such Data Found</Text>
           <Text>Please Enter Correct Data</Text>
        </View>
    )
    return(
        props.cardData.length == 0 ? NoCard():Card()
    )
}