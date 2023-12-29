import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCourse: [],
  myOrder: [],
  courseSummary: {},
  course: [],
  search: [],
  createCourse: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setMyCourse: (state, action) => {
      state.myCourse = action.payload;
    },
    setMyOrder: (state, action) => {
      state.myOrder = action.payload;
    },
    setCourseSummary: (state, action) => {
      state.courseSummary = action.payload;
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCreateCourse: (state, action) => {
      state.createCourse = action.payload;
    },
    setDeleteCourse: (state, action) => {
      state.course = action.payload;
    },
    setUpdateCourse: (state, action) => {
      state.course = action.payload;
    },
  },
});

export const {
  setMyCourse,
  setMyOrder,
  setCourseSummary,
  setCourse,
  setSearch,
  setCreateCourse,
  setDeleteCourse,
  setUpdateCourse,
} = courseSlice.actions;

export default courseSlice.reducer;
