import { NextRouter } from "next/router";import { supabase } from "../utils/supabase";


type FormValues = {
  username: string,
  about: string,
  dateOfBirth: string,
  gender: string,
  location: string,
  isOkRemote: boolean,
  termsOfService: boolean,
}

export const coachFormSubmit = (
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
          location: values.location,
          is_ok_remote: values.isOkRemote,
          username: values.username,
          is_coach: true,
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
          .upsert([{ about: values.about, profile_id: profileData[0].id }]);

      if (coachProfileError) {
        console.error(`SUBMIT ERROR ${coachProfileError}`);
      }
      console.log(coachProfileData);
    }

    router.push("/dashboard");
  })();
};
