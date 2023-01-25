import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const api2 = "http://localhost:8080/api/";


const initialState = {
    todoList: {},
    todoDetail: {},
  };

  
  const todoListGet = createAsyncThunk("todos/", async (data) => {
    return axios.get(`${api2}`, data).then((response) => {
      return response.data;
    });
  });
  export const todoSlice = createSlice({
    name: "todoSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(todoListGet.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
      
    },
  });



  export {
    todoListGet
  };