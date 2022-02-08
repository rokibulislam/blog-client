import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../../services/httpService'

import { insertReplyIntoComment } from '../../utils/helpers'

export const fetchComments = createAsyncThunk('comments/fetchComments', async (id) => {
    let comments = await httpService.get(`/post/${id}/comment`)
   
    return comments.data;
})

export const addComment = createAsyncThunk('comments/addComment', async ({ content, post, author }) => {
    let comment = await httpService.post(
        `/post/${post}/comment`,
        {
            content, 
            post,
            author: author.id
        }
    );
    return comment
})

export const addReply = createAsyncThunk('posts/addReply', async ({ parent, content, post }) => {
    // let comment = await httpService.post(
    //     `/post/${post}/comment`,
    //     {
    //         content, 
    //         post,
    //         // author: author.id,
    //         parent: parent,
    //     }
    // );  

    // return comment;
    
    let reply = await httpService.post(
        `/post/${post}/comment/${parent}/reply`,
        {
            content
        }
    );
    return reply;
});


export const commentSlice = createSlice({
    name: "comments",
    initialState: {
        items: [],
        status: 'loading',
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [fetchComments.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'succeeded';
        },
        [fetchComments.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [addComment.pending]: (state, action) => {
            state.status = 'loading';
        },
        [addComment.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = [{...action.payload.data}, ...state.items];
        },
        [addComment.rejected]: (state, action) => {
            state.error = action.error.message;
        },
        [addReply.pending]: (state, action) => {
            state.status = 'loading';
        },
        [addReply.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            // console.log(.parent);
            console.log(state.items);
            state.items = insertReplyIntoComment(state.items, action.payload.data.parent, action.payload.data);
        },
        [addReply.rejected]: (state, action) => {
            state.error = action.error.message;
        },
    }
})

export default commentSlice.reducer;