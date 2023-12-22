import OtherProfile from './OtherProfile';

function Profile() {
  return (
    <div className="flex items-center justify-center gap-y-5 ">
      <div className=" mt-20 flex flex-col items-center justify-center gap-2">
        <p className="text-2xl font-bold tracking-wide sm:text-4xl md:tracking-wider lg:text-5xl">
          Hi, I am Chaim Abat.
        </p>
        <p className="text-lg font-semibold tracking-wide">
          Front-End Developer
        </p>
        <p className=" mt-9 sm:mx-16 lg:mx-28 lg:w-[30rem]">
          I'm a junior front-end developer based in philippines. I'm pasionate
          about crafting user-friendly web experience with a strong foundation.
          I stay updated on the latest trends and eager to contribute to
          innovative projects.
        </p>

        <OtherProfile />
      </div>
    </div>
  );
}

export default Profile;
