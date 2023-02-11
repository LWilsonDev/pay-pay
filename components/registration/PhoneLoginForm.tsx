import React, {FC} from 'react';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {KeyboardAvoidingView, View} from 'react-native';
import tw from '../../lib/tailwind';
import BaseButton from '../buttons/BaseButton';
import PhoneInput from '../forms/inputs/specific/PhoneInput';

type FormValues = {
  phone: number | undefined;
};

interface PhoneLoginFormProps {
  onSubmit: (values: FormValues) => void;
}

const PhoneLoginForm: FC<PhoneLoginFormProps> = ({onSubmit}) => {
  const {...methods} = useForm({defaultValues: {phone: undefined}});

  const handleSubmit: SubmitHandler<FormValues> = (data) => {
    console.log({data});
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log(errors);
  };

  return (
    <KeyboardAvoidingView>
      <FormProvider {...methods}>
        <View style={tw`mt-4 mb-4`}>
          <PhoneInput
            name="phone"
            label="Phone number"
            rules={{required: 'Phone number is required'}}
            onSubmitEditing={methods.handleSubmit(handleSubmit, onError)}
            returnKeyType={'done'}
            error={methods.formState.errors.phone?.message}
          />
        </View>

        <View>
          <BaseButton
            variant="primary"
            text="Login"
            onPress={methods.handleSubmit(onSubmit, onError)}
          />
        </View>
      </FormProvider>
    </KeyboardAvoidingView>
  );
};

export default PhoneLoginForm;
