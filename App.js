
import React, {Component} from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import AppContainer from './src/navigators/AppContainer';
import store from './src/store/Store';
import {Provider} from 'react-redux';


const THEME_COLOR = '#285E29';

class App extends Component {
  constructor(properties) {
    super(properties);
  }

  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.bottomSafeArea}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            // backgroundColor={colors.primaryColor}
          />
          <AppContainer />
        </SafeAreaView>
 </Provider>
    );
  }
}

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: THEME_COLOR,
  },
  bottomSafeArea: {
    flex: 1,
  },
});
export default App;
