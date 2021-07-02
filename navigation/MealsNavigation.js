import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from "../screens/CategoriesScreen";
// Now we will just call the  createStackContainer function and pass the different screens as javascript object
// in the function argument 


createStackNavigator({
    Categories: CategoriesScreen
})