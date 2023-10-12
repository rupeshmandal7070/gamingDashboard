import { useContext } from 'react';
import { AuthContext } from '../context/JWTauthContext';

export const useAuth = () => useContext(AuthContext);
