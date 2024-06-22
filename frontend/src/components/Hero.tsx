import hero from "../assets/Hero.png";

const Hero = () => {
  return (
    <div>
      <img
        src={hero}
        className="w-100% max-h-[600px] object-cover border-rounded"
      />
    </div>
  );
};

export default Hero;
