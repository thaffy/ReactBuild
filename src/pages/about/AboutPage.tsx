import NavButton from '$lib/routing/NavButton.tsx';
import type React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page</p>
    </div>
  );
};

export default AboutPage;
