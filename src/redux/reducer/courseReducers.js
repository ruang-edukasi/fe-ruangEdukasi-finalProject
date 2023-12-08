import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  course: [],
  search: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setCategory, setCourse, setSearch } = courseSlice.actions;

export default courseSlice.reducer;
