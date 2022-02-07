import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../../services/httpService'


export const fetchPosts = createAsyncThunk('posts/fetchposts', async () => {
    let posts = await httpService.get('/post/')
    return posts.data;
})

export const addPost = createAsyncThunk('posts/addPost', async ( { title, content, author } ) => {
    let posts = await httpService.post('/post/',{
        title: title, 
        content: content,
        author: author.id
    })
    return posts.data;
})

export const fetchSinglePost = createAsyncThunk('posts/fetchSinglePost', async (id) => {
    let post = await httpService.get(`/post/${id}`)
    return post.data;
})

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
        status: 'loading',
        post: {},
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'succeeded';
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [addPost.pending]: (state, action) => {
            state.status = 'loading';
        },
        [addPost.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items.data = [{...action.payload}, ...state.items];
        },
        [addPost.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [fetchSinglePost.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchSinglePost.fulfilled]: (state, action) => {
            state.post = action.payload;
            state.status = 'succeeded';
        },
        [fetchSinglePost.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    }
})

export default postSlice.reducer;