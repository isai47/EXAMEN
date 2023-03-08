import { View, Text, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HeroImage } from '../assets';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="bg-[#fefefe] flex-1 relative">
            {/* primera sección */}
            <View className="flex-row px-6 mt-8 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#8cff00] text-3xl font-semibold">Go</Text>
                </View>
                <Text className="text-[#333333] text-3xl font-semibold">Travel</Text>
            </View>

            {/* segunda sección */}
            <View className="px-6 mt-8 space-y-3">
                <Text className="text-[#b8f59e] text-[42px]">Enjoy the trip with</Text>
                <Text className="text-[#67fd09] text-3xl font-semibold">Good Moments</Text>

                <Text className="text-[#3C6072] text-base">
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    xxxxxxxxxxx
                </Text>
            </View>

            {/* seccion circular  */}
            <View className="w-[450px] h-[450px] bg-[#00c90d] rounded-full absolute -bottom-8 -right-36"></View>
            <View className="w-[450px] h-[450px] bg-[#00bcc9] rounded-full absolute -bottom-40 -left-36"></View>

            {/* imagen del hero */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out" 
                    source={HeroImage}
                    className="w-[300px] h-full mt-20 object-cover"
                />

                <TouchableOpacity className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00c90d] rounded-full items-center justify-center"
                onPress={() => navigation.navigate("Discover")}
                >
                        <Animatable.View 
                            animation={"pulse"}
                            easing="ease-in-out"
                            iterationCount={"infinite"}
                            className="w-20 h-20 items-center justify-center rounded-full bg-[#00c90d]">
                            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
                        </Animatable.View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;