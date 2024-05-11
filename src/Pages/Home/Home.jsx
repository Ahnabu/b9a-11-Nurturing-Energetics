import axios from "axios";
import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";

const Home = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
         axios.get(`${import.meta.env.VITE_API_URL}/top`)
     .then((res) => {
        setFoods(res.data)
     })
    },[])
   
  
    return (
        <div className="text-center mt-4 p-4">
            <h1 className="text-secondary">Top Foods</h1>
            <p>
                Discover our top picks! Savor the flavors loved by countless customers. From mouthwatering classics to innovative delights, explore our collection curated based on popular demand. Indulge in the dishes that have garnered the most purchases, promising satisfaction with every bite. Join the ranks of delighted customers and experience culinary excellence like never before. Dive into our top food section today!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-auto justify-between text-center">
                 {
                foods.map(food =><HomeCard key={food._id} food={food}></HomeCard>)
            }
            </div>
           
        </div>
    );
};

export default Home;