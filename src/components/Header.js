const Header = () => {
    return (
      <div className="header w-full bg-blue-600 text-white px-8 py-4 shadow-md flex items-center justify-between font-serif">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">Gemini AI Chatbot</h1>
          <p className="text-sm text-blue-100">Smart. Fast. Integrated — Enhance your experience with Google Gemini AI</p>
        </div>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-xl shadow hover:bg-blue-100 transition duration-200">
            Chat Now
          </button>
          <button className="bg-blue-500 border border-white text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    );
  };
  
  export default Header;
  