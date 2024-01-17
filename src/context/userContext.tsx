import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";
import { userNameKey } from "../global/constants/keys/userName";

interface IUserContext {
    userName: string | null;
    saveUserName: (name: string) => Promise<void>;
    getUserName: () => Promise<string | null>;
}

interface IUserProvider {
    children: React.ReactNode;
}

export const UserContext = createContext({} as IUserContext);

export function UserProvider({ children }: IUserProvider) {

    const [userName, setUserName] = useState<string | null>(null)

    async function saveUserName(name: string) {
        try {
            await AsyncStorage.setItem(userNameKey, name)
            setUserName(name)
        } catch (error) {
            throw new Error('Não foi possível salvar o nome do usuário')
        }
    }

    async function getUserName() {
        try {
            const name = await AsyncStorage.getItem(userNameKey)
            setUserName(name)
            return name
        } catch (error) {
            throw new Error('Não foi possível obter o nome do usuário')
        }
    }

    return (
        <UserContext.Provider
            value={{
                userName,
                saveUserName,
                getUserName
            }}
        >
            {children}
        </UserContext.Provider>
    );
};