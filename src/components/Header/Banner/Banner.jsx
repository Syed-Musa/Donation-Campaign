
const Banner = () => {

  return (
    <div className="h-[600px] object-cover bg-[url('https://i.ibb.co/3hsWGZV/Rectangle-4281.png')]">
      <div className="hero-overlay bg-opacity-80 bg-white">
        <h2 className="text-5xl font-bold text-center pt-24 ">
          I Grow By Helping People In Need
        </h2>
        <div className="mx-auto justify-center flex mt-10">
          <input  className="w-80 h-[53px] text-2xl font-bold" type="text" placeholder="Search...."/>
          <button id="search-input-card" className="bg-red-600 text-white p-4">Search</button>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
