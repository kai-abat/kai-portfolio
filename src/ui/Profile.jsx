import OtherProfile from "./OtherProfile";

function Profile() {
  return (
    <div className="flex gap-5 justify-evenly items-center mt-20">
      <div className="flex flex-col gap-8">
        <div className="h1">
          Front-End ReactJs Developer <span>👨‍💻</span>
        </div>
        <div>
          Hi welcome to my portfolio 💼.
          <br />
          I&apos;m Chaim Abat A.K.A. Kai. A passionate Front-End React Developer
        </div>
        <OtherProfile />
      </div>
      <div>
        <img
          className=" rounded-full aspect-square w-96 "
          src="my.jpg"
          alt="me"
        />
      </div>
    </div>
  );
}

export default Profile;
