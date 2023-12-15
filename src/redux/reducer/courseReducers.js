import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  course: [],
  search: [],
  detail: [],
  courseContent: [],
  popular: [],
  myCourse: [],
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
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setMyCourse: (state, action) => {
      state.myCourse = action.payload;
    },
  },
});


export const { setCategory, setCourse, setSearch, setPopular,setDetail, setMyCourse,
  setCourseContent, } = courseSlice.actions;

export default courseSlice.reducer;
