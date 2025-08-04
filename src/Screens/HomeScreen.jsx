import { Pressable, StyleSheet, Text, View,TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
    const [ItemName, setItemName] = useState('')
    const [isEdit, setisEdit] = useState(false)
    const [editItemId, seteditItemId] = useState(null)
    const [data, setdata] = useState([
            {id: 1, name: "Buy pencil" },
            {id: 2, name: "Walk the dog" },
            {id: 3, name: "Complete project" },
            {id: 4, name: "Call mom" },
            {id: 5, name: "Read a book" }
    ])

    const addItemHandler = () => { // Add an item
        if (ItemName.trim() === '') return;
        const newItem = {
            id: Date.now(),
            name: ItemName,
        }

        setdata([...data, newItem])
        setItemName('')
        setisEdit(false)
    }

    const editItemHandler = (item) => {  // edit the item name
        setisEdit(true)
        setItemName(item.name)
        seteditItemId(item.id)
    }

    const updateItemHandler = () => { //updating the item
        if (ItemName.trim() === '') return;
        setdata(data.map((item) => (
            item.id === editItemId ? {...item, name: ItemName} : item
        )))
        setItemName('')
        setisEdit(false)
        seteditItemId(null)
    }

    const deleteItemHandler = (id) => { // deleting the item
        setdata(data.filter((item) => item.id !== id))
    }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>To-Do List</Text>
      <TextInput
        placeholder='Enter the text......'
        placeholderTextColor={'#999'}
        style= {styles.input}
        value={ItemName}
        onChangeText={setItemName}
      />
      <Pressable style={styles.btn} onPress={() => isEdit ? updateItemHandler() : addItemHandler()}>
        <Text style={styles.btnText}>{isEdit ? 'Edit Item' : 'ADD'}</Text>
      </Pressable>

      <FlatList
        data = {data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.name}</Text>
                <View style={styles.btnContainer}>
                    <Pressable onPress={() => editItemHandler(item)}>
                        <Text style={{fontSize: 16, fontWeight: '500'}}><Icon name="edit" size={25} color="black" /></Text>
                    </Pressable>
                    <Pressable onPress={() => deleteItemHandler(item.id)}>
                        <Text style={{fontSize: 16, fontWeight: '500'}}><Icon name="delete" size={25} color="black" /></Text>
                    </Pressable>
                </View>
            </View>
        )}
        contentContainerStyle= {{gap: 30}}
       />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        // alignItems: 'center'
    },
    txt: {
        marginTop: '10%',
        fontSize: 30,
        fontWeight: '500',
        borderWidth: 2,
        // paddingHorizontal:10,
        paddingVertical: 5,
        borderStyle: 'dashed',
        marginBottom: '10%',
        borderRadius: 10,
        textAlign: 'center',
    },
    btn: {
        marginVertical: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        // width: '80%',
        alignItems: 'center',
        marginBottom: 35,
    },
    btnText: {
        fontSize: 20,
        fontWeight:'500',
        
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        // width: '80%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 20,
    },
    itemContainer: {
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: 'pink',
        borderColor: '#999',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {
        fontSize: 20,
    },
    btnContainer: {
        flexDirection: 'row',
        gap:30
    }
})