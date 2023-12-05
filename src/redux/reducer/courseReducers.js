import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  course: [],
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
  },
});

export const { setCategory, setCourse } = courseSlice.actions;

export default courseSlice.reducer;
