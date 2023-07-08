import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import { projectsApi } from '../Features/projects/projectsApi';
// import { quotesApi } from '../Features/quotes/quotesApi';
import AuthSlice from '../Features/User/AuthSlice';
import { userApi } from '../Features/User/UserApi';
import { circularApi } from '../Features/Circular/CircularApi';
import { inboxApi } from '../Features/Inbox/InboxApi';
import { messageApi } from '../Features/Inbox/messageApi';
import { feedbackApi } from '../Features/Feedback/FeedbackApi';
/* import createQuoteSlice from '../Features/quotes/quotesSlice';
import { userApi } from '../Features/User/userApi';
import configureSlice from '../Features/quotes/configureSlice';
import { materialApi } from '../Features/Material/matarialAPI';
import { feedbackApi } from '../Features/Feedback/feedbackApi'; */





const store = configureStore({
  reducer: {
    auth: AuthSlice,
    [userApi.reducerPath]: userApi.reducer,
    [circularApi.reducerPath]: circularApi.reducer,
    [inboxApi.reducerPath]: inboxApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [feedbackApi.reducerPath]: feedbackApi.reducer,


  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(userApi.middleware, circularApi.middleware, inboxApi.middleware, messageApi.middleware,feedbackApi.middleware),

})

setupListeners(store.dispatch)

export default store;