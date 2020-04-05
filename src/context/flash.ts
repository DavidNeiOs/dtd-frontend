import { createContext, useContext, Dispatch, SetStateAction } from 'react'

export interface Flash {
  success: boolean;
  message: string;
};

const FlashContext = createContext([[], ()=> {}] as [Flash[], Dispatch<SetStateAction<Flash[]>>]);

export const FlashContextProvider = FlashContext.Provider

export const useFlashes = () => useContext(FlashContext)