// import { createStackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreens';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);