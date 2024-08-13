import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../modal/user.model";
import Cookies from "js-cookie";

export interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: Cookies.get("user") ? JSON.parse(Cookies.get("user") as string) : null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            const userJSON = JSON.stringify(action.payload);

            const expiresAt = new Date();
            expiresAt.setMinutes(expiresAt.getMinutes() + 10);
            Cookies.set("user", userJSON, {expires: expiresAt, path: "/"});
        },
        logout: (state) => {
            state.user = null;
            Cookies.remove("user");
        },
        register: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            const userJSON = JSON.stringify(action.payload);

            const expiresAt = new Date();
            expiresAt.setMinutes(expiresAt.getMinutes() + 10);
            Cookies.set("user", userJSON, {expires: expiresAt, path: "/"});
        },
    },
});

export const {login, logout,register} = userSlice.actions;
export default userSlice.reducer;