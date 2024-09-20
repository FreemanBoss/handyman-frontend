import { createSlice } from '@reduxjs/toolkit';
import { registerCraftsman, fetchCraftsmanDetails } from './craftmanthunks'; // Ensure this path is correct

const initialState = {
  craftsman: null,
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
      state.isLoading = false;
      state.error = null;
      state.success = false;
      localStorage.removeItem('craftsman');
    },
     setCraftsmanData: (state, action) => {
      state.craftsman = action.payload;
      state.success = true;
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
        state.craftsman = action.payload; // Now only the data object
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
        state.craftsman = action.payload; // Ensure payload matches expected data structure
      })
      .addCase(fetchCraftsmanDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch craftsman details';
      });
  },
});

export const { clearCraftsmanState, setCraftsmanData } = craftsmanSlice.actions;

export default craftsmanSlice.reducer;
