import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { cn } from '../../lib/utils';

export default function GradientButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <LinearGradient
      colors={['rgba(9, 181, 211, 0.9)', 'rgba(58, 131, 244,0.9)']}
      end={{ x: 1, y: 1 }}
      start={{ x: 0.1, y: 0.2 }}
      className={cn(className, 'rounded-full')}>
      <TouchableOpacity className="p-3 px-4">
        <Text className="font-bold text-white">{children}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
