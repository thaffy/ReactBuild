import type React from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import { ROUTES, type RouteKeys } from './routes';

interface NavButtonProps {
  to: RouteKeys;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ to, label }) => {

  return (
    <NavLink to={to}>
      {label}
    </NavLink>
  );
};

export default NavButton;
