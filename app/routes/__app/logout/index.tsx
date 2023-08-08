import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';

const windowRef = typeof window !== 'undefined' ? window : null;

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    windowRef?.localStorage.clear();
    navigate('/login');
  }, []);

  return <></>;
}
