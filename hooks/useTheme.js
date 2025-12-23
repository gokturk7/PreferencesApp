import { useEffect, useState } from'react';
import AsyncStorage from'@react-native-async-storage/async-storage';
export function useTheme() {
const [theme, setTheme]= useState('light');
8
useEffect(() => {
AsyncStorage.getItem('theme').then(stored => {
if (stored) setTheme(stored);
});
}, []);
const toggleTheme= async () => {
const next = theme=== 'light' ? 'dark' : 'light';
setTheme(next);
await AsyncStorage.setItem('theme'
, next);
};
return { theme, toggleTheme };
}