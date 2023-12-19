import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: [],
  search: [],
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
  },
});

export const { setCourse, setSearch } = courseSlice.actions;

export default courseSlice.reducer;
