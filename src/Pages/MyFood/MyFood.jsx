
import {  useEffect, useState } from "react";

import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import './table.css'
import { Helmet } from "react-helmet";
import axios from "axios";
import useAuth from "../../Hooks/UseAuth/useAuth";
import Swal from "sweetalert2";

const MyFood = () => {
    const { state,user,setState } = useAuth()
    const [foods, setFoods] = useState([])
    useEffect(() => {
       
        axios.get(`${import.meta.env.VITE_API_URL}/add/${user?.email}`, {
            withCredentials:true
        })
            .then(res => {
           
                setFoods(res.data)
            })
    }, [state, user?.email])
    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`${ import.meta.env.VITE_API_URL }/delete/${id}`, {
                    method: 'DELETE',
                    credentials: 'include'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Art has been deleted.',
                                'success'
                            )

                            setState(!state);
                        }
                    })

            }
        })


    }

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
                        <th className="lg:p-2">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map(item => (
                        <tr key={item._id}>
                            <td className="lg:p-2">{item.food_name}</td>
                            <td className="hide p-2">{item.food_category}</td>
                            <td className="lg:p-2">{item.price}</td>
                            <td className="hide p-2">{item.purchase_amount|| 0 }</td>
                           
                            <td><Link to={`/update/${item._id}`}><Button
                                className={`flex items-center text-secondary bg-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 border border-secondary`}
                                >Update</Button> </Link>  </td>
                            <td><Button onClick={() => handelDelete(item._id)}
                                className={`flex items-center text-secondary bg-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 border border-secondary`}
                                >Delete</Button>  </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyFood;