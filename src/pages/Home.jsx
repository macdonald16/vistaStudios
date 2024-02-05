import cam3 from '../assets/cam3.jpg';

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${cam3})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity:0.8,
      }}
    >
      <div className="w-11/12 mx-auto ">
        <div className=' '>
          <h1 className="text-5xl font-bold text-white">Welcome </h1>
          <h2> We Are Vista</h2>
          
        </div>
        <div>
          <p> We capture the </p>
          <p> Best moments </p>
          <p> For you. </p>
         
        </div>
      </div>
    </div>
  );
};

export default Home;