import React, {useState} from 'react';

function App() {
  const [color, setColor] = useState('olive');

  //function changeColor(color){
    //setColor(color);
  
  return (
    

    
    <div className="w-full h-screen duration-200 bg-black flex flex-col justify-between" style={{backgroundColor: color}}>
      {/* Content area (centered content) */}
      <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2"></div>
      
      {/* Button area at the bottom */}
      <div className="flex justify-center mb-6">
      <button
        onClick={() => setColor('red')}
        className="relative bg-white text-white px-6 py-3 rounded-xl shadow-lg"
        style={{ zIndex: 1 }}
      >
        <span
          className="absolute inset-0 bg-red-500 rounded-xl"
          style={{ zIndex: -1 }}
        ></span>
        Red
      </button>
      <button
        onClick={() => setColor('green')}
        className="relative bg-white text-white px-6 py-3 rounded-xl shadow-lg"
        style={{ zIndex: 1 }}
      >
        {/* Outer layer (white background) */}
        <span
          className="absolute inset-0 bg-green-500 rounded-xl"
          style={{ zIndex: -1 }}
        ></span>
        Green
      </button>
  
      </div>
    </div>
    
  );
}

export default App;
