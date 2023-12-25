import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  course: [],
  search: [],
  detail: [],
  courseContent: [],
  popular: [],
  myCourse: [],
  orderCourse:[],
  coupon:[],
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
    setOrderCourse: (state, action) => {
      state.orderCourse = action.payload;
    },
    setCoupon: (state, action) => {
      state.coupon = action.payload;
    },
  },
});


export const { setCategory, setCourse, setSearch, setPopular,setDetail, setMyCourse,
  setCourseContent,setOrderCourse, setCoupon } = courseSlice.actions;

export default courseSlice.reducer;
