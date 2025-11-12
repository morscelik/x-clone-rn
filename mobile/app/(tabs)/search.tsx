import { View, Text, TextInput,  TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const TRENDING_TOPICS = [
  { topic: "#ReactNative", tweets: "125K" },
  { topic: "#TypeScript", tweets: "89K" },
  { topic: "#WebDevelopment", tweets: "234K" },
  { topic: "#AI", tweets: "567K" },
  { topic: "#TechNews", tweets: "98K" },
];


export default function serach() {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      {/* HEADER */}
      <View className='px-4 py-2 border-b border-gray-200'>
        <View className='flex-row items-center bg-gray-100 p-3 rounded-full'>
          <Feather name="search" size={20} color="#657786" />
          <TextInput 
            placeholder='Search Twitter'
            className='ml-2 flex-1 text-base text-gray-800'
            placeholderTextColor="#657786"
          />
        </View>
      </View>

      {/* TRENDING TOPICS */}
      <ScrollView className='flex-1'>
        <View className='px-4 py-2'>
          <Text className='text-xl font-bold mb-4 text-gray-900'>Trending for you</Text>
          {TRENDING_TOPICS.map((item, index) => (
            <TouchableOpacity key={index} className='py-3 border-b border-gray-200'>
              <Text className='text-gray-500 text-sm'>Trending</Text>
              <Text className='text-base font-semibold text-gray-900'>{item.topic}</Text>
              <Text className='text-gray-500 text-sm'>{item.tweets} Tweets</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}