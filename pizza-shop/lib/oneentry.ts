import { defineOneEntry } from 'oneentry'

import type { IError } from 'oneentry/dist/base/utils'

import retrieveRefreshToken from '@/actions/auth/retriveRefreshToken'
import storeRefreshToken from '@/actions/auth/storeRefreshToken'

export type ApiClientType=ReturnType<typeof defineOneEntry> | null

let apiClient: ApiClientType = null;

async function setupApiClient():Promise<ReturnType<typeof defineOneEntry>> {
  const apiUrl= process.env.ONEENTRY_PROJECT_URL;

  if(!apiUrl) {
    throw new Error('API URL is not defined');
  }
  if (!apiClient) {
    try{
        const refreshToken= await retrieveRefreshToken();

        apiClient = defineOneEntry(apiUrl, {
            token: process.env.ONEENTRY_TOKEN || '',
            langCode: 'en_US',
  auth: {
    refreshToken: refreshToken|| undefined,
    customAuth:false,
    saveFunction: async (newToken: string) => {
      await storeRefreshToken(newToken);
    },
  }, errors: {
    isShell: false,
    customErrors: {
      400: (error?: IError) => console.error('Bad Request:', error?.message),
      404: (error?: IError) => console.error('Not Found:', error?.message),
      500: (error?: IError) => console.error('Internal Server Error:', error?.message),
    },
  },

        });
    } 
    catch (error) {
        console.error('Error fetching refresh token:', error);
        throw error;
    }
    if (!apiClient) {
        throw new Error('API client is not initialized');
    }
    
}
return apiClient;


}
export async function fetchApiClient(): Promise<ApiClientType> {
    if (!apiClient) {
        apiClient = await setupApiClient();
    }
    if (!apiClient) {
        throw new Error('API client is not initialized');
    }
    return apiClient;
}
