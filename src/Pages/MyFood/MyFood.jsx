
import {  useEffect, useState } from "react";

import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import './table.css'
import { Helmet } from "react-helmet";
import axios from "axios";
import useAuth from "../../Hooks/UseAuth/useAuth";

const MyFood = () => {
    const { state,user } = useAuth()
    const [foods, setFoods] = useState([])
    useEffect(() => {
       
        axios.get(`${import.meta.env.VITE_API_URL}/add/${user?.email}`, {
            withCredentials:true
        })
            .then(res => {
                setFoods([res.data])
            })
    }, [state, user?.email])
    console.log(foods);

    return (
        <div>
            <h1 className="text-center my-2">Foods added by me</h1>
            <Helmet>
                <title>Nurturing Energetics|| My Foods</title>
            </Helmet>
            <table className="custom-table">
                <thead>
                    <tr>

                        <th className="lg:p-2">Name</th>
                        <th className="lg:p-2 hide" >Category</th>
                        <th className="lg:p-2">Price</th>
                        <th className="hide lg:p-2">Purchase</th>
                        
                        <th className="lg:p-2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map(item => (
                        <tr key={item._id}>
                            <td className="lg:p-2">{item.food_name}</td>
                            <td className="hide p-2">{item.food_category}</td>
                            <td className="lg:p-2">{item.price}</td>
                            <td className="hide p-2">{item.purchase_amount|| 0 }</td>
                           
                            <td><Link to={`/details/${item._id}`}><Button className="flex items-center text-secondary bg-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 border border-secondary">View Details</Button> </Link>  </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyFood;