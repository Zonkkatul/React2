import gallery1 from "../assets/Images/gallery-1.jpg";
import gallery2 from "../assets/Images/gallery-2.jpg";
import gallery3 from "../assets/Images/gallery-3.jpg";
import gallery4 from "../assets/Images/gallery-4.jpg";
import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <button className="home-btn" onClick={handleIncrement}>Increment</button>
        <button className="home-btn" onClick={handleDecrement}>Decrement</button>
        <button className="home-btn" onClick={handleReset}>Reset</button>
     <h2>Counter: {count}</h2>
      </div>
      <div className="grid">
        <div className="item">

    <h2>Dynamic Number: {count}</h2>

    
          <img src={gallery1} alt="Safari Adventure Package" />
        </div>
        <div className="item">
          <img src={gallery2} alt="Hot Air Balloon Ride" />
          <h3>Hot Air Balloon Ride</h3>
          <p>$15.00</p>
          <p>Experience the sunrise from above in a magical hot air balloon ride. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero accusamus nam nulla doloribus nisi iusto? Veniam alias nobis tenetur, necessitatibus totam qui quos voluptatem! Nihil facere dicta ipsa quaerat nobis.</p>
        </div>
        <div className="item">
          <img src={gallery3} alt="Eco Retreat Day Pass" />
          <h3>Eco Retreat Day Pass</h3>
          <p>$8.00</p>
          <p>Immerse yourself in nature and rejuvenate at our exclusive eco retreat.</p>
        </div>
        <div className="item">
          <img src={gallery4} alt="Tropical Beach Getaway" />
          <h3>Tropical Beach Getaway</h3>
          <p>$20.00</p>
          <p>Relax on the pristine sands of a private tropical paradise. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo fugiat, veniam soluta ipsam et laudantium nihil cum quasi unde eos autem rerum officia repellat commodi quisquam incidunt facere eaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quasi minima, dicta fugiat corrupti temporibus exercitationem asperiores quae repudiandae perferendis quis corporis, molestias consequatur? Nam omnis natus quas nihil dolores.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
