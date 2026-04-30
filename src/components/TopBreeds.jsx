const TopBreeds = () => {
  return (
    <>
      
        <p className="text-2xl text-center mt-4 mb-5 font-bold">Top Breeds</p>
     
      <div className="px-5 py-5 md:py-10">
        <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:justify-between ">
          <div className="text-center">
            <p className="text-gray-500">Local Deshi</p>
            <h3 className="text-2xl font-bold">200K</h3>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Friesian</p>
            <h3 className="text-2xl font-bold">400K</h3>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Brahman</p>
            <h3 className="text-2xl font-bold">100K</h3>
          </div>
        </div>
        <div className="pt-12">
            <hr/>
        </div>
      </div>
    </>
  );
};

export default TopBreeds;
