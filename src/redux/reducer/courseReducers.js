import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  course: [],
  search: [],
  popular: [],
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
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
  },
});

export const { setCategory, setCourse, setSearch, setPopular } =
  courseSlice.actions;

export default courseSlice.reducer;
