
import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';
import './AllGun.css'
const AllGun = ({ countIncrease }) => {

    //useState : load or set data to a variable
    const [guns, setGuns] = useState([]);



    //useEffect for fetch data from server
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, []);

    return (
        <div className='mt-5'>
            <div className='my-4'>
                <h1 className='text-5xl font-semibold text-center py-5'>Welcome to Kopa Samsu Store</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quo inventore nemo similique enim delectus odio omnis fugiat minima reprehenderit hic fugit consectetur error, ea non fuga quisquam veniam numquam possimus laboriosam repudiandae rerum dolor excepturi molestiae? Minima vero ab quia doloribus deserunt ducimus dignissimos numquam cum quos repellat. Vitae veniam nostrum non sapiente nihil corporis corrupti eligendi, atque </p>
            </div>

            <div className='w-[90%]  mx-auto grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    guns.map(gun => <SingleGun countIncrease={countIncrease} gun={gun} />)
                }
            </div>


        </div>
    );
};

export default AllGun;