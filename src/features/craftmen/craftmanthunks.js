import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerCraftsmanApi, fetchCraftsmanDetailsApi } from '../../api/craftmenAPI';


export const registerCraftsman = createAsyncThunk(
  'craftsman/register',
  async (craftsmanData, { rejectWithValue }) => {
    try {
       const data = await registerCraftsmanApi(craftsmanData);

       const response = data.data
       localStorage.setItem('craftsman', JSON.stringify(response));
      return response;
    } catch (error) {
      // Handle errors and return the error message
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const fetchCraftsmanDetails = createAsyncThunk(
  'craftsman/fetchDetails',
  async (craftsmanId, { rejectWithValue }) => {
    try {
      const response = await fetchCraftsmanDetailsApi(craftsmanId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Failed to fetch craftsman details');
    }
  }
);