
const Banner = () => {

  return (
    <div className="h-[200px] lg:h-[600px] object-cover bg-[url('https://i.ibb.co/3hsWGZV/Rectangle-4281.png')]">
      <div className="hero-overlay bg-opacity-80 bg-white">
        <h2 className="text-xl lg:text-5xl font-bold text-center pt-24 ">
          I Grow By Helping People In Need
        </h2>
        <div className="mx-auto justify-center flex mt-10">
          <input  className="w-20px lg:w-64 h-[20px] lg:h-[53px] lg:text-2xl text-xl font-bold" type="text" placeholder="Search...."/>
          <button id="search-input-card" className="bg-red-600 text-white  lg:p-4">Search</button>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
