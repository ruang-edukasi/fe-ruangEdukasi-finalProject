import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: [],
  search: [],
  createCourse: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCreateCourse: (state, action) => {
      state.createCourse = action.payload;
    },
  },
});

export const { setCourse, setSearch, setCreateCourse } = courseSlice.actions;

export default courseSlice.reducer;
