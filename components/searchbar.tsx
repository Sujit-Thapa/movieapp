import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface props {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: props) => {
  return (
    <View className="flex-row items-center bg-black rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />

      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        onChangeText={() => {}}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 text-white ml-2"
      />
    </View>
  );
};

export default SearchBar;
