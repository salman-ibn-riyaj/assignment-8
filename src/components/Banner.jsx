const Banner = () => {
  return (
    <div
      className="flex items-center justify-center h-100 bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.avif')" }}
    >
      <div className="mt-20 flex items-center justify-center">
        <h2 className="w-[500px] mx-auto text-red-500 font-bold text-4xl">QurbaniHat – Livestock Booking Platform</h2>
      </div>
    </div>
  );
};

export default Banner;
