import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { dataFetched } from "../models";

const url = `https://jsonplaceholder.typicode.com/todos/`;
// ! In the most common use cases, 
// ! you should not need to explicitly 
// ! declare any types for the createAsyncThunk call itself.
// * here i just do it for make complete example
export const dataFetchKon = createAsyncThunk<dataFetched[], number, {}>("fetchKon/fetch", async (id) => {
  try {
    console.log(id);
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    console.log("data fetch error error");
  }
});

