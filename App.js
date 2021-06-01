import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import { I18nManager } from 'react-native';


I18nManager.forceRTL(false);

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  }, 
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restu Finder'
    }
  }
); 

export default createAppContainer(navigator);