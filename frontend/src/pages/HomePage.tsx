import LandingFood from "../assets/LandingFood.png";
import Tupperware from "../assets/Tupperware.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg border-primary shadow-md py-8 flex flex-col gap5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-primary">
          Get your weekly meals today !
        </h1>
        <span className="text-xl my-4">Food is just a click away !</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={LandingFood} className="ml-20" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter text-primary">
            Join our community as a Raccook...
          </span>
          <span>...and make a living out of your passion !</span>
          <img src={Tupperware} className="w-48 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
