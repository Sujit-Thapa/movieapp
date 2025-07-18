import { Text, View } from "react-native";
import "../global.css";
 
export default function mainpage() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-primary">
        Welcome to Nativewind!
      </Text>
    
    </View>
  );
}