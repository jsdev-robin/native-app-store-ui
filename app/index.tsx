import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientButton from '../components/ui/gradient-button';
import { Text } from '../components/ui/text';

const CATEGORIES = ['Action', 'Family', 'Puzzle', 'Adventure', 'Racing', 'Education', 'Others'];

const index = () => {
  return (
    <LinearGradient
      colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
      className="w-full flex-1">
      <SafeAreaView>
        {/* Header */}
        <View className="flex flex-row justify-between">
          <View>
            <IconButton icon="menu" iconColor="#0D163A" size={24} className="px-0" />
          </View>
          <View>
            <IconButton icon="bell" iconColor="#0D163A" size={24} />
          </View>
        </View>
        <View className="container mx-auto px-4">
          {/* categories */}
          <View className="gap-2">
            <Text variant="h3" className="text-[#0D163A]">
              Browse Games
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}>
              {CATEGORIES.map((item, idx) => (
                <GradientButton key={idx}>{item}</GradientButton>
              ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default index;
