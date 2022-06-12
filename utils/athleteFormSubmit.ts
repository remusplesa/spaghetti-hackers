import { NextRouter } from "next/router";
import { supabase } from "../utils/supabase";

type FormValues = {
  username: string,
  experience: string,
  dateOfBirth: string,
  gender: string,
  location: string,
  isOkRemote: boolean,
  termsOfService: boolean,
  height: number,
  weight: number,
  targetDistance: number,
  daysAvailable: number,
  raceDate: string,
}

export const athleteFormSubmit = (
  values: FormValues,
  router: NextRouter
) => {
  (async () => {
    const { data: profileData, error: profileError } = await supabase
      .from("profile")
      .upsert([
        {
          id: supabase.auth.user()?.id,
          date_of_birth: values.dateOfBirth,
          gender: values.gender,
          height: values.height,
          weight: values.weight,
          location: values.location,
          is_ok_remote: values.isOkRemote,
          username: values.username,
          is_coach: false,
        },
      ]);

    if (profileError) {
      alert(`SUBMIT ERROR ${profileError}`);
      return;
    }

    console.log("Profile Dataaa ===> ", profileData);
    if (profileData && profileData?.length > 0) {
      const { data: coachProfileData, error: coachProfileError } =
        await supabase
          .from("coach_profile")
          .upsert([{
            profile_id: profileData[0].id,
            experience: values.experience,
            days_available: values.daysAvailable,
            target_distance: values.targetDistance,
            race_date: values.raceDate
          }]);

      if (coachProfileError) {
        console.error(`SUBMIT ERROR ${coachProfileError}`);
      }
      console.log(coachProfileData);
    }

    router.push("/dashboard");
  })();
};
