import { createContext } from "react";

export const counterContext = createContext(0)

export const counterProvider = counterContext.Provider