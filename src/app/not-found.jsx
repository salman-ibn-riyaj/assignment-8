// NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-peach-100 to-orange-100 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Cute Eye */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32">
            {/* Eye */}
            <div className="w-32 h-32 bg-white rounded-full border-8 border-pink-400 shadow-xl flex items-center justify-center">
              {/* Pupil */}
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                {/* Eye shine */}
                <div className="w-6 h-6 bg-white rounded-full ml-3 mt-1 opacity-70"></div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-7xl font-bold text-pink-500 mb-2 tracking-tighter">404</h1>
        <h2 className="text-3xl font-medium text-gray-700 mb-4">Oops! Page not found</h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like this page wandered off... 
          <span className="text-orange-400">Maybe it's having a peachy day somewhere else?</span>
        </p>

        <button
          onClick={() => window.location.href = '/'}
          className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;