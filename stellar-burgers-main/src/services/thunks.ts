import { getFeedsApi, getIngredientsApi, getUserApi, loginUserApi, logoutApi, registerUserApi, TLoginData, TRegisterData, updateUserApi } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getIngredients = createAsyncThunk(
    "ingredients/all",
    async () => await getIngredientsApi()
);

export const getFeeds = createAsyncThunk(
    "feeds/all",
    async () => await getFeedsApi()
)

export const registerUser = createAsyncThunk(
    "auth/register",
    async (data: TRegisterData) => await registerUserApi(data)
)

export const loginUser = createAsyncThunk(
    "auth/login",
    async (data: TLoginData) => await loginUserApi(data)
)

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async () => await logoutApi()
)

export const loginOnEnterApp = createAsyncThunk(
    "auth/auto-login",
    async () => await getUserApi()
)

export const updateUser = createAsyncThunk(
    "auth/user",
    async (data: TRegisterData) => await updateUserApi(data)
)