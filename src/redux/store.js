//Before

// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// // // Початкове значення стану Redux для кореневого редюсера,
// // // якщо не передати параметр preloadedState.
// // const initialState = {
// //   tasks: [
// //     { id: 0, text: 'Learn HTML and CSS', completed: true },
// //     { id: 1, text: 'Get good at JavaScript', completed: true },
// //     { id: 2, text: 'Master React', completed: false },
// //     { id: 3, text: 'Discover Redux', completed: false },
// //     { id: 4, text: 'Build amazing apps', completed: false },
// //   ],
// //   filters: {
// //     status: 'all',
// //   },
// // };

// // const rootReducer = (state = initialState, action) => {
// //   return state;
// // };

// // Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

// After
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
