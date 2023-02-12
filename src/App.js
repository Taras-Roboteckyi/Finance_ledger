import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

/* import HomePage from './views/HomePage'; */
/* import { ThanksMessage } from '../components/ThanksMessage/ThanksMessage'; */

import AppLoader from './components/Loader/Loader';

const HomePage = lazy(() =>
  import('./views/HomePage').then(module => ({
    default: module.HomePage,
  })),
);

const ThanksMessage = lazy(() =>
  import('./components/ThanksMessage/ThanksMessage').then(module => ({
    default: module.ThanksMessage,
  })),
);

export default function App() {
  return (
    <>
      <Suspense fallback={<AppLoader />}>
        {/* Лоадер працює лише при розподілу коду на чанки */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thanks" element={<ThanksMessage />} />
        </Routes>
      </Suspense>
    </>
  );
}
