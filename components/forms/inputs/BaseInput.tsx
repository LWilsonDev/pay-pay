import {TextInput, View, Text, TextInputProps} from 'react-native';
import React, {FC, useState} from 'react';
import tw from 'twrnc';
import {useController, UseControllerProps} from 'react-hook-form';

export interface BaseInputProps
  extends Omit<TextInputProps, 'defaultValue'>,
    UseControllerProps {
  name: string;
  label: string;
  leftSideContent?: React.ReactNode;
  defaultValue?: string;
  rightSideContent?: React.ReactNode;
  error?: string;
}

const BaseInput: FC<BaseInputProps> = ({
  leftSideContent,
  rightSideContent,
  error,
  label,
  ...props
}) => {
  const {name, rules, defaultValue} = props;
  const [focused, setFocused] = useState(false);

  const {field} = useController({name, rules, defaultValue});

  const wrapStyles = tw.style(`flex-row border rounded-xl p-2.5`, {
    'border-green-600': focused && !error,
    'border-red-600': !!error,
    'border-gray-300': !focused && !error,
  });
  const labelStyles = tw.style(`text-sm`, {
    'text-green-600': focused && !error,
    'text-red-600': !!error,
    'text-gray-300': !focused && !error,
  });
  const placeholderColor = tw.color('gray-400');

  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
    field.onBlur();
  };

  return (
    <>
      {focused ? (
        <View
          style={[
            tw`bg-white p-1 ml-3 z-1 absolute`,
            {transform: [{translateY: -14}]},
          ]}
        >
          <Text style={[labelStyles]}>{label}</Text>
        </View>
      ) : null}

      <View style={wrapStyles}>
        {leftSideContent ?? null}
        <TextInput
          {...props}
          onChangeText={field.onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={field.value}
          style={tw`text-base pb-1 pr-1 flex-1 text-gray-900`}
          placeholderTextColor={placeholderColor}
        />
        {rightSideContent ?? null}
      </View>
      {error ? (
        <Text style={tw`text-red-600 text-base self-center pt-2 font-light`}>
          {error}
        </Text>
      ) : null}
    </>
  );
};

export default BaseInput;
