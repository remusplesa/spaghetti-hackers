import { useEffect } from 'react';
import { supabase } from '../utils/supabase';

const Login = () => {
  useEffect(() => {
    supabase.auth.signIn({
      provider: 'github',
    })
  }, []);

  return <h2>Logging in...</h2>
}

export default Login;
