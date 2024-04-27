import React, { useState, useEffect } from 'react';
import Tile from './Tile';

function ClothingList({ filter }) {
  // Define clothing items as arrays
  const [allClothingItems] = useState([
    { name: "Facial mask", worn_on: "face" ,image:"./Clothes/Facial mask.jpeg" },
    { name: "Mood ring", worn_on: "finger",image:"./Clothes/Mood ring.jpeg"  },
    { name: "Eyeglasses", worn_on: "face",image:"./Clothes/Eyeglasses.jpeg"  },
    { name: "Mitten", worn_on: "hand" ,image:"./Clothes/Mitten.jpeg" },
    { name: "Knee pads", worn_on: "leg",image:"./Clothes/Knee pads.jpeg"  },
    { name: "Shoes", worn_on: "foot",image:"./Clothes/Shoes.jpeg"  },
    { name: "Gloves", worn_on: "hand" ,image:"./Clothes/Gloves.jpeg" },
    { name: "Socks", worn_on: "leg" ,image:"./Clothes/Socks.jpeg" },
    { name: "Ring", worn_on: "finger" ,image:'./Clothes/rings.jpeg'},
    { name: "Sunglasses", worn_on: "face" ,image:"./Clothes/Sunglasses.png" },
    { name: "Ankle bracelet", worn_on: "leg",image:"./Clothes/Ankle bracelet.jpeg"  },
    { name: "Garter", worn_on: "leg" ,image:"./Clothes/Garter.jpeg" },
    { name: "Nose ring", worn_on: "face",image:"./Clothes/Nose ring.jpeg"  },
    { name: "Mask", worn_on: "face",image:"./Clothes/Mask.jpeg"  },
    { name: "Leg warmers", worn_on: "leg",image:"./Clothes/Leg warmers.jpeg"  },
    { name: "Wedding band", worn_on: "finger",image:"./Clothes/Wedding band.jpeg"  },
    { name: "Slippers", worn_on: "foot",image:"./Clothes/Slippers.jpeg" },
    { name: "Bracelet", worn_on: "hand" ,image:"./Clothes/Bracelet.jpeg" },
    { name: "Flip-flops", worn_on: "foot" ,image:"./Clothes/Flip-flops.jpeg" },
    { name: "Hand warmer", worn_on: "hand",image:"./Clothes/Hand warmer.jpeg"  },
    { name: "Thumb ring", worn_on: "finger",image:"./Clothes/download.jpeg" },
    { name: "Handkerchief", worn_on: "hand" ,image:"./Clothes/Handkerchief.jpeg" },
    { name: "Boots", worn_on: "foot" ,image:"./Clothes/Boots.jpeg" },
    { name: "Sandals", worn_on: "foot",image:"./Clothes/Sandals.jpeg" },
    { name: "Fingerless gloves", worn_on: "hand",image:"./Clothes/Fingerless gloves.jpeg"  },
    { name: "Earrings", worn_on: "face",image:"./Clothes/Earrings.jpeg" },
    { name: "Necklace", worn_on: "face" ,image:"./Clothes/Necklace.jpeg" },
    { name: "Arm band", worn_on: "hand" ,image:"./Clothes/Arm band.jpeg" },
    { name: "Headband", worn_on: "head" ,image:"./Clothes/Headband.jpeg" },
    { name: "Wristwatch", worn_on: "" ,image:"./Clothes/Wristwatch.jpeg" },
    { name: "Ankle socks", worn_on: "leg" ,image:"./Clothes/Ankle socks.jpeg" },
    { name: "Toe rings", worn_on: "foot",image:"./Clothes/Toe rings.jpeg" },
    { name: "Footies", worn_on: "foot" ,image:"./Clothes/Footies.jpeg" },
    { name: "Handbag", worn_on: "hand" ,image:"./Clothes/Handbag.jpeg" },
    { name: "Finger band", worn_on: "finger" ,image:"./Clothes/Finger band.jpeg" },
    { name: "Leggings", worn_on: "leg",image:"./Clothes/Leggings.jpeg" },
    { name: "Face shield", worn_on: "face" ,image:"./Clothes/Face shield.jpeg" },
    { name: "Gloves with touchscreen fingertips", worn_on: "hand",image:"./Clothes/Gloves with touchscreen fingertips.jpeg" },
    { name: "Toe socks", worn_on: "foot" ,image:"./Clothes/Toe socks.jpeg" },
    { name: "Hair tie", worn_on: "head" ,image:"./Clothes/Hair tie.jpeg" },
    { name: "Ear warmer", worn_on: "ear",image:"./Clothes/Ear warmer.jpeg" },
    { name: "Ankle boots", worn_on: "foot" ,image:"./Clothes/Ankle boots.jpeg" },
    { name: "Thigh-high socks", worn_on: "leg",image:"./Clothes/Thigh-high socks.jpeg" },
    { name: "Handkerchief", worn_on: "hand" ,image:"./Clothes/Handkerchief.jpeg" },
  ]);

  // State to store filtered items
  const [filteredClothingItems, setFilteredClothingItems] = useState(allClothingItems);

  // Function to filter items based on worn_on
  const handleFilter = (wornOn) => {
    console.log("Filter value:", wornOn); // Log the filter value
    if (wornOn === '') {
      // If no filter is selected, show all items
      setFilteredClothingItems(allClothingItems);
    } else {
      // Filter items based on worn_on property
      const filtered = allClothingItems.filter(item => item.worn_on === wornOn);
      setFilteredClothingItems(filtered);
    }
  };

  // Call the filter function when component is mounted to set initial items
  useEffect(() => {
    handleFilter('');
  }, []);

  // Call the filter function whenever filter prop changes
  useEffect(() => {
    filter('');
  }, [filter]);

  return (
    <div>
      {filteredClothingItems.map((item, index) => (
        <Tile
          key={index}
          name={item.name}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ClothingList;
