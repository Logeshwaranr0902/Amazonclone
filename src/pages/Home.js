import React from 'react'
import Banner from '../components/home/Banner'
import Products from '../components/home/Products'


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="w-full bg-gray-100 -mt-16 lgl:-mt-24 xl:-mt-36 py-10">
                <Products />
            </div>
        </div>
    )
}

export default Home