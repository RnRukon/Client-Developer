import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Routes/Routes';
import { useDispatch } from 'react-redux';
import { getMe } from './Redux/Features/User/AuthSlice';
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch])

  return (
    <React.Fragment>
      <RouterProvider router={routers} />
    </React.Fragment>
  );
}

export default App;
