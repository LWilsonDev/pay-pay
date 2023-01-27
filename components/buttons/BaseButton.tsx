import {Pressable, PressableProps, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface BaseButtonProps extends PressableProps {
  text: string;
}

const BaseButton: FC<BaseButtonProps> = ({text}) => {
  return (
    <Pressable
      style={{borderRadius: 4, backgroundColor: '#FF0063', padding: 8}}
      activeOpacity={0.5}
    >
      {text}
    </Pressable>
  );
};

export default BaseButton;

const styles = StyleSheet.create({});
