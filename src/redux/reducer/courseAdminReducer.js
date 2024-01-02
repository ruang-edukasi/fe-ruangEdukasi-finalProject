import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCourse: [],
  myOrder: [],
  courseSummary: {},
  course: [],
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
    setCreateCourse: (state, action) => {
      state.createCourse = action.payload;
    },
    setDeleteCourse: (state, action) => {
      state.course = action.payload;
    },
    setEditCourse: (state, action) => {
      state.course = action.payload;
    },
    setCreateCourseContent: (state, action) => {
      state.course = action.payload;
    },
    setCreateCourseTarget: (state, action) => {
      state.course = action.payload;
    },
  },
});

export const {
  setMyCourse,
  setMyOrder,
  setCourseSummary,
  setCourse,
  setCreateCourse,
  setDeleteCourse,
  setEditCourse,
  setCreateCourseContent,
  setCreateCourseTarget,
} = courseSlice.actions;

export default courseSlice.reducer;
