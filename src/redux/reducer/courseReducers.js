import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  course: [],
  search: [],
  detail: [],
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
  },
});

export const { setCategory, setCourse, setSearch, setDetail } =
  courseSlice.actions;

export default courseSlice.reducer;
