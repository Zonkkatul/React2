
import gallery1 from "../assets/Images/gallery-1.jpg";
import gallery2 from "../assets/Images/gallery-2.jpg";
import gallery3 from "../assets/Images/gallery-3.jpg";
import gallery4 from "../assets/Images/gallery-4.jpg";
import gallery5 from "../assets/Images/gallery-5.jpg";
import gallery6 from "../assets/Images/gallery-6.jpg";
import gallery7 from "../assets/Images/gallery-7.jpg";
import gallery8 from "../assets/Images/gallery-8.jpg";
import gallery9 from "../assets/Images/gallery-9.jpg";
import gallery10 from "../assets/Images/gallery-10.jpg";
import "../index.css"

function Tour() {
  return (
    <div className="grid">
      <div className="item">
        <img src={gallery1} alt="Safari Adventure Package" />
        <h3>Safari Adventure Package</h3>
        <p>$10.00</p>
        <p>Explore breathtaking landscapes and encounter wildlife on this guided safari tour.</p>
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
      <div className="item">
        <img src={gallery5} alt="National Park Exploration Tour" />
        <h3>National Park Exploration Tour</h3>
        <p>$18.00</p>
        <p>Discover serene landscapes and wildlife in this national park guided hike.</p>
      </div>
      <div className="item">
        <img src={gallery6} alt="Stargazing Experience" />
        <h3>Stargazing Experience</h3>
        <p>$12.00</p>
        <p>Spend a magical evening under the stars in a mountain-top stargazing retreat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure odio doloribus iste praesentium nulla delectus libero sint, facilis quia inventore dolorem voluptate amet aliquam quaerat, natus corporis dolore obcaecati dolorum.</p>
      </div>
      <div className="item">
        <img src={gallery7} alt="Countryside Ride" />
        <h3>Countryside Ride</h3>
        <p>$22.00</p>
        <p>Ride through rolling green hills and enjoy the beauty of the countryside. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor voluptatum iure reprehenderit doloribus sequi voluptates obcaecati ullam consequuntur nulla, reiciendis adipisci quisquam delectus accusamus perferendis impedit cum at? Porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus eum eligendi voluptates dolore? Dignissimos, vitae deserunt. Neque voluptatem quaerat ullam placeat facere nihil, modi animi nesciunt, id nisi aperiam.</p>
      </div>
      <div className="item">
        <img src={gallery8} alt="Forest Photoshoot Session" />
        <h3>Forest Photoshoot Session</h3>
        <p>$5.00</p>
        <p>Book a professional photoshoot in a stunning redwood forest setting.</p>
      </div>
      <div className="item">
        <img src={gallery9} alt="Photography Workshop" />
        <h3>Photography Workshop</h3>
        <p>$14.00</p>
        <p>Learn the art of photography with hands-on training from professionals. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint numquam officia ducimus vitae, iure corporis fuga cupiditate id ipsam. Voluptas saepe necessitatibus ducimus laboriosam impedit ab sunt minima dolores.</p>
      </div>
      <div className="item">
        <img src={gallery10} alt="City Cycling Tour" />
        <h3>City Cycling Tour</h3>
        <p>$11.00</p>
        <p>Join a fun and energetic cycling tour through the city streets.</p>
      </div>
    </div>
  )
}

export default Tour;
