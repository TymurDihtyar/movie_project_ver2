import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICast, IChar, IData, IGenre, IGenres, IMovie, IOneMove} from "../../interfaces";
import {AxiosError} from "axios";
import {characterService, genresService, moviesService, searchService} from "../../services";

interface IState {
    total_pages: number
    movies: IMovie[]
    movieById: IOneMove
    characters: ICast[]
    genres: IGenre[]
    moviesByGenres: IMovie[]
    moviesByKeyWord: IMovie[]
}

const initialState: IState = {
    total_pages: 500,
    movies: [],
    movieById: null,
    characters: null,
    genres: null,
    moviesByGenres: [],
    moviesByKeyWord: []
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

const getGenres = createAsyncThunk<IGenres, void>(
    'moviesSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMoviesByGenre = createAsyncThunk<IData, {page:string, with_genres:string}>(
    'moviesSlice/getMoviesByGenre',
    async ({page, with_genres}, {rejectWithValue})=> {
        try {
            const {data} = await genresService.getMoviesByGenre(page, with_genres)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMoviesByKeyWord = createAsyncThunk<IData, {page:string, query:string}>(
    'moviesSlice/getMoviesByKeyWord',
    async ({page, query}, {rejectWithValue})=> {
        try {
            const {data} = await searchService.getByKeyWord(page, query)
            return data
        }catch (e) {
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
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
            .addCase(getMoviesByGenre.fulfilled,(state, action) => {
                const {total_pages, results} = action.payload
                state.moviesByGenres = results
                state.total_pages = total_pages
            })
            .addCase(getMoviesByKeyWord.fulfilled, (state, action) => {
                const {total_pages, results} = action.payload
                state.moviesByKeyWord = results
                state.total_pages = total_pages
            })
})

const {reducer: moviesReducer, actions} = moviesSlice

const moviesActions = {
    ...actions,
    getMovies,
    getMovieById,
    getCharacters,
    getGenres,
    getMoviesByGenre,
    getMoviesByKeyWord
}
export {moviesReducer, moviesActions}