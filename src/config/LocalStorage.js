import AsyncStorage from '@react-native-async-storage/async-storage'

const LocalData ={
    storeLoginDetailData : async (val) => {
        try {
            AsyncStorage.clear()
          await AsyncStorage.setItem('loginDetail',JSON.stringify(val))
        } catch (e) {
        }
      },

    getData : async () => {
        try {
          const value = await AsyncStorage.getItem('loginDetail')
          const data = JSON.parse(value)
          return data
        } catch(e) {
        }
    },
    clearData : async () => {
        const asyncStorageKeys = await AsyncStorage.getAllKeys();
        if (asyncStorageKeys.length > 0) {
          AsyncStorage.clear();
        }
    }
}

export default LocalData

export const isEmpty = obj => {
  if (!obj) return true;
  const string = JSON.stringify(obj);
  return string === '{}' || string === '[]';
};
