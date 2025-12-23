import{View,Text,Pressable}from'react-native';
import{useTheme}from'../hooks/useTheme';
export default function SettingsScreen(){
const{theme,toggleTheme}=useTheme();
return(
<View>
<Text>Current theme: {theme}</Text>
<Pressable onPress={toggleTheme}>
<Text>Toggle Theme</Text>
</Pressable>
</View>
);
}
