
import { createSlice } from '@reduxjs/toolkit';
import { registerCraftsman, fetchCraftsmanDetails, fetchCraftsmen } from './craftmanthunks';

const initialState = {
  craftsman: null,
  craftsmen: [], // Array for storing multiple craftsmen
  pageNumber: 1,
  pageSize: 10,
  totalItems: 0,
  isLoading: false,
  error: null,
  success: false,
};

const craftsmanSlice = createSlice({
  name: 'craftsman',
  initialState,
  reducers: {
    clearCraftsmanState: (state) => {
      state.craftsman = null;
      state.craftsmen = [];
      state.isLoading = false;
      state.error = null;
      state.success = false;
      localStorage.removeItem('craftsman');
    },
    setCraftsmanData: (state, action) => {
      state.craftsman = action.payload;
      state.success = true;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCraftsman.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerCraftsman.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.craftsman = action.payload;
      })
      .addCase(registerCraftsman.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Registration failed';
      })
      .addCase(fetchCraftsmanDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCraftsmanDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.craftsman = action.payload;
      })
      .addCase(fetchCraftsmanDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch craftsman details';
      })
      .addCase(fetchCraftsmen.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCraftsmen.fulfilled, (state, action) => {
        state.isLoading = false;
        state.craftsmen = action.payload.items; // Adjust based on your API response
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchCraftsmen.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch craftsmen';
      });
  },
});

export const { clearCraftsmanState, setCraftsmanData, setPageNumber, setPageSize, setTotalItems } = craftsmanSlice.actions;

export default craftsmanSlice.reducer;
