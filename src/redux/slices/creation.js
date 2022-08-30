import axios from '../../axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fechDriver = createAsyncThunk('driver/fechDriver', async (params) => {
  const { data } = await axios.post('accounts/add/driver', params);
  return data;
});

export const getDrivers = createAsyncThunk('driver/getDrivers', async (params) => {
  const { data } = await axios.get(`accounts/all/drivers?organizationId=${params}`);
  return data;
});

export const fetchTrailer = createAsyncThunk('trailer/fetchTrailer', async (params) => {
  const { data } = await axios.post('trailers/create', params);
  return data;
});

export const fetchAddress = createAsyncThunk('trailer/fetchAddress', async (params) => {
  const { data } = await axios.post('tractors/create', params);
  return data;
});



export const fetchTractor = createAsyncThunk('tractor/fetchTractor', async (params) => {
  const { data } = await axios.post('tractors/create', params);
  return data;
});

export const getTractor = createAsyncThunk('tractor/getTractors', async (params) => {
  const { data } = await axios.get(`tractors/all/tractors?organizationId=${params}`);
  return data;
});


const initialState = {
  drivers: null,
  tractors: null,
};

const creationSlice = createSlice({
  name: 'creation',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getDrivers.pending]: (state) => {
      state.status = 'loading';
      state.drivers = null;
    },
    [getDrivers.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.drivers = action.payload.drivers;
      
    },
    [getDrivers.rejected]: (state) => {
      state.status = 'error';
      state.drivers = null;
    },

    [getTractor.pending]: (state) => {
      state.status = 'loading';
      state.tractors = null;
    },
    [getTractor.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.tractors = action.payload.tractors;
      
    },
    [getTractor.rejected]: (state) => {
      state.status = 'error';
      state.tractors = null;
    },
  },
});

export const selectDrivers = (state) => state.creation.drivers;
export const selectTractors = (state) => state.creation.tractors;
export const creationReducer = creationSlice.reducer;
