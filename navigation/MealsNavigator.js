import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/colors';


const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
    navigationOptions:{
    
    }},
  MealDetail: MealDetailScreen
}

defaultNavigationOptions:{

headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor

}

}


);



export default createAppContainer(MealsNavigator);