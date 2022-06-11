import { useEffect } from "react";
import { supabase } from "../utils/supabase";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const Login = ({
  baseUrl,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    supabase.auth.signIn(
      {
        provider: "google",
      },
      { redirectTo: `${baseUrl}/dashboard` }
    );
  }, []);

  return <h2>Logging in...</h2>;
};

export const getServerSideProps = async () => {
  return { props: { baseUrl: process.env.NEXT_PUBLIC_URL } };
};
export default Login;
