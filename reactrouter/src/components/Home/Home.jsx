function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-black via-[#0e0e0ed5] to-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Welcome Home
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-6">
          This is the home page of your awesome React app. Explore your features, enjoy the speed, and build amazing experiences.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
