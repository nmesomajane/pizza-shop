'use server';
import { IAttributes } from 'oneentry/dist/base/utils';
import { fetchApiClient } from '@/lib/oneentry';
import { ISignUpData } from 'oneentry/dist/auth-provider/authProvidersInterfaces';

export const getSignupFormData = async (): Promise<IAttributes[]> => {
  try {
    const apiClient = await fetchApiClient();
    const response = await apiClient?.Forms.getFormByMarker('users', 'en_US');
    return response?.attributes as unknown as IAttributes[];
  } catch (error: any) {
    console.error(error);
    throw new Error('Fetching form data failed.');
  }
};

export const handleSignupSubmit = async (inputValues: {
  email: string;
  password: string;
  name: string;
}) => {
  try {
    const apiClient = await fetchApiClient();

    const data: ISignUpData = {
      formIdentifier: 'users',
      authData: [
        { marker: 'email', value: inputValues.email },
        { marker: 'password', value: inputValues.password },
      ],
      formData: [{ marker: 'name', type: 'string', value: inputValues.name }],
      notificationData: {
        email: inputValues.email,
        phonePush: ['+1234567890'], // Dummy phone number
        phoneSMS: '+1234567890', // Dummy phone number
      },
    };

    const value = await apiClient?.AuthProvider.signUp('email', data);
    
    // FIX: Always return something - never undefined
    if (!value) {
      return { message: 'Signup failed - no response from server' };
    }
    
    return value;
    
  } catch (error: any) {
    console.error(error);
    if (error?.statusCode === 400) {
      return { message: error?.message };
    }
    
    // FIX: Return error object instead of throwing
    return { message: 'Account Creation Failed. Please try again later.' };
  }
};