import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICast, IChar, IData, IMovie, IOneMove} from "../../interfaces";
import {AxiosError} from "axios";
import {characterService, moviesService} from "../../services";

interface IState {
    total_pages: number
    movies: IMovie[],
    movieById: IOneMove
    characters: ICast[]
}

const initialState: IState = {
    total_pages: null,
    movies: [],
    movieById: null,
    characters: null
}

const getMovies = createAsyncThunk<IData, { page: string }>(
    'moviesSlice/getMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMovieById = createAsyncThunk<IOneMove, { id: string }>(
    'moviesSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getCharacters = createAsyncThunk<IChar, { id: string }>(
    'moviesSlice/getCharacters',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await characterService.getById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                const {total_pages, results} = action.payload
                state.movies = results
                state.total_pages = total_pages
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movieById = action.payload
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.characters = action.payload.cast
            })
})

const {reducer: moviesReducer, actions} = moviesSlice

const moviesActions = {
    ...actions,
    getMovies,
    getMovieById,
    getCharacters
}
export {moviesReducer, moviesActions}