import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  course: [],
  search: [],
  detail: [],
  courseContent: [],
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
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
    setCourseContent: (state, action) => {
      state.courseContent = action.payload;
    },
  },
});

export const {
  setCategory,
  setCourse,
  setSearch,
  setDetail,
  setCourseContent,
} = courseSlice.actions;

export default courseSlice.reducer;
