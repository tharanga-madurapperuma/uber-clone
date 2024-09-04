import { Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            <TouchableOpacity
                onPress={() => {
                    router.replace('/(auth)/sign-up');
                }}
                className="w-full flex justify-end items-end p-5"
            >
                <Text className="text-md text-black font-JakartaBold">Skip</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Welcome;