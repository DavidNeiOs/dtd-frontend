import { createContext, useContext, Dispatch, SetStateAction } from 'react'



const FlashContext = createContext([[], ()=> {}] as [any[], Dispatch<SetStateAction<any[]>>]);

export const FlashContextProvider = FlashContext.Provider

export const useFlashes = () => useContext(FlashContext)