import Content from './Content';
import OtherProfile from './OtherProfile';
import TechStack from './TechStack';

function Profile() {
  return (
    <Content title="profile" isNoTitle={true}>
      <div
        id="profile-content"
        className="flex flex-col items-center justify-start gap-5"
      >
        <p className="text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl md:tracking-wider lg:text-5xl">
          Hi, I am Chaim Abat.
        </p>
        <p className="text-lg font-semibold tracking-wide">
          Front-End Developer
        </p>
        <OtherProfile />
        {/* className="mx-auto w-11/12 indent-4 sm:w-10/12 lg:w-3/6" */}
        <p className="mx-auto text-center sm:w-10/12 sm:indent-10 lg:w-3/4 2xl:w-[40rem]">
          I&apos;m a MERN-Stack developer based in philippines. I&apos;m
          pasionate about crafting user-friendly web experience with a strong
          foundation. I stay updated on the latest trends and eager to
          contribute to innovative projects.
        </p>
        <TechStack />
      </div>
    </Content>
  );
}

export default Profile;
