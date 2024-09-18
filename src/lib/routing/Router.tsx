import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/home/HomePage.tsx'));
const AboutPage = lazy(() => import('../../pages/about/AboutPage.tsx'));
const ProfilePage = lazy(
  () => import('../../pages/(protected)/profile/ProfilePage.tsx'),
);

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        {/* Protected routes */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
