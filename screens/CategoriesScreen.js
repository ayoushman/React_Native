import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";


const CategoriesScreen = (props) => {
    return (
        <View>
            <Text>
                HOLA
            </Text>

            <Button title="GO meals" onPress={() => { props.navigation.navigate({ routeName: 'CategoryMeal' }) }} />
        </View>
    )
}


const styles = StyleSheet.create({

})

export default CategoriesScreen
