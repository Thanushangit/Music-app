import { loginEndpoint } from "../spotify";

export const Login = () => {
  return (
    <div className="min-h-screen login-page flex flex-col items-center justify-center ">
      <div className="w-64  md:w-96  ">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="logo-spotify"
          className="w-full h-fulll object-center object-cover"
        />
      </div>
      <a href={loginEndpoint}>
        <div className="py-3 px-14 bg-gray-100 font-semibold text-black rounded border-0 my-15 transition-all duration-300 hover:bg-gray-200">LOG IN</div>
      </a>
    </div>
  );
};
