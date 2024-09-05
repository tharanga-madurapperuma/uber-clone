import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onboarding } from "../../constants/index.ts";

const Welcome = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

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
            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {
                    onboarding.map((item) => {
                        <View>
                            <Text className="text-red-300">{item.title}</Text>
                        </View>
                    })
                }
            </Swiper>
        </SafeAreaView>
    );
}

export default Welcome;