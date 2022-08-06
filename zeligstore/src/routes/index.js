import {BrowserRouter, Routes as ReactRoutes, Route} from 'react-router-dom';

import {ROUTES} from 'config';
import Home from 'pages/home';

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route index path={ROUTES.HOME.path} element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
