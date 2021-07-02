import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeal from "../screens/CategoryMeal";
import MealDetail from "../screens/MealDetail";



// Now we will just call the  createStackContainer function and pass the different screens as javascript object
// in the function argument 


const MealsNavigator = createStackNavigator({
    Category: CategoriesScreen,
    CategoryMeal: CategoryMeal,
    MealDetail: MealDetail
})

export default createAppContainer(MealsNavigator);