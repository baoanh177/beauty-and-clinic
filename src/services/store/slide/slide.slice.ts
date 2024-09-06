import { createSlice } from "@reduxjs/toolkit";

const slideSlice = createSlice({
  name: "slide",
  initialState: {
    slideWidth: document.body.clientWidth < 600 ? document.body.clientWidth - 40 : 550,
    slideGap: 100,
    slideNumber: 6,
    currentPage: 1,
    currentPosition: 0,
  },
  reducers: {
    next: (state) => {
      state.currentPosition = state.currentPosition - (state.slideWidth + state.slideGap);
      state.currentPage++;
    },
    prev: (state) => {
      state.currentPosition = state.currentPosition + (state.slideWidth + state.slideGap);
      state.currentPage--;
    },
    reset: (state) => {
      state.currentPage = 1
      state.currentPosition = 0
    },
    setSlideWidth: (state, { payload }) => {
      state.slideWidth = payload
    }
  },
});

export { slideSlice };

export const { next, prev, reset, setSlideWidth } = slideSlice.actions;
