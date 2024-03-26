import {create} from 'zustand'; //create the store
import {produce} from 'immer'; //update the store
import {persist, createJSONStorage} from 'zustand/middleware'; //persistance
import AsyncStorage from '@react-native-async-storage/async-storage'; //store the datas
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeansList: BeansData,
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      OrderHistoryList: [],
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
