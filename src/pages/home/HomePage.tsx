import Counter from '$lib/components/Counter.tsx';
import NavButton from '$lib/routing/NavButton.tsx';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <Counter />

      <h2>Routes:</h2>
      <NavButton to="about" label="About" />
    </div>
  );
};

export default HomePage;
