import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMeal = (props) => {
    return (

        <View>
            <Text>The meals screen </Text>
            <Button title="Meal Detail" onPress={() => { props.navigation.navigate({ routeName: 'MealDetail' }) }} />
        </View>
    )
}


const styles = StyleSheet.create({

})
export default CategoryMeal;
