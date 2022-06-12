import type { InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import Head from "next/head";
import { Container, Title, Button, Space, Group } from "@mantine/core";
import { Navbar, Banner, AthleteDashboard, ClientList } from "../components";
import { supabase } from "../utils/supabase";
import { FitDistanceTile } from "../components/FitDistanceTile";
import { useUser } from '../hooks/useUser';
import { RunningWorkout } from "../types/Workout";
import { PackagePicker } from "../components/PackagePicker";
import { Package } from "../types/Package";

const Dashboard: NextPage = () => {
  const emptyPackage: Package = {
    id: '',
    target_distance: 0,
    is_C25K: false,
    price: 0,
    is_remote: false,
    location: '',
    duration: 0,
    coach_id: '',
  }
  const router = useRouter();
  const [user, setUser] = useUser((state) => [state.user, state.setUser]);
  const [activities, setActivities] = useState(Array<RunningWorkout>)
  const [runnerPackage, setRunnerPackage] = useState(emptyPackage)
  const [session, setSession] = useState()
  const [lastActivity, setActivity] = useState({ distance: 0, duration: 0 })


  useEffect(() => {
    setTimeout(
      (async () => {
        const user = supabase.auth.user();
        setUser(user)
        let { data: dbProfile, error } = await supabase
          .from("profile")
          .select("*")
          .eq("id", user?.id);
        console.log("👀", dbProfile);

        if (!dbProfile?.length) {
          router.push("/create");
        }
        setUser({ ...user, ...dbProfile![0] })
      }), 250)
    getLastActivity();
  }, []);


  const verifyExistingPackage = async () => {
    const user = supabase.auth.user();
    let { data: dbPackage, error } = await supabase
      .from('runner_package')
      .select('*')
      .eq('runner_id', user)
    // setRunnerPackage(dbPackage || {})
  }



  const getLastActivity = async () => {
    console.log("get last activity")
    const res = await fetch('/api/garmin-connect')
    const resText = await res.text()
    const arrWorkouts = JSON.parse(resText);
    console.log("🅿️", arrWorkouts)
    // setActivities(arrWorkouts)
    setActivity(arrWorkouts[arrWorkouts.length - 1])
    console.log("🎾", activities)
    return activities
  }

  const getActivityDistance = (activity: RunningWorkout) => {
    if (!activity) return "0"
    let distance = 0
    distance = parseInt((activity.distance / 1000).toFixed(2))
    return distance.toString()
  }

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar  title={"myCoach 🏃‍♀️"} />
        <Space h="xl" />

        {user && user?.is_coach ? <ClientList></ClientList> : <AthleteDashboard></AthleteDashboard>}
        <FitDistanceTile distance={getActivityDistance(lastActivity)} unit='km' />
      </main>
    </Container>
  );
};


export default Dashboard;
