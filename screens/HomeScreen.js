import { View, Text } from'react-native';
export default function HomeScreen({ route }) {
const { username }= route.params;
5
return <Text>Welcome, {username}</Text>;
}