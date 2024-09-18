import {create} from "zustand";

interface UserStore {
    isAuthenticated: boolean;
    user: string;
    getUser: () => Promise<string>;
}

export const useUserStore = create<UserStore>((set) => ({
    isAuthenticated: false,
    user: "",
    getUser: async () => {
        const user = await fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => data[0].name);
        set({user});
        return user;
    },
}));