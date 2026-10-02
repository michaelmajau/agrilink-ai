import React from 'react' 
import { ArrowRight, MapPin, Plus } from "lucide-react";
import Coffee from "../assets/FeaturedCoffee.avif"
import { Link } from "react-router-dom";
import Plantains from "../assets/FeaturedPlantains.webp"
import Eggs from "../assets/FeaturedEggs.avif"
import Tomatoes from "../assets/FeaturedTomatoes.avif"

 
const Featured = () => { 
  return ( 
   <section className='bg-[#F5F3EA] h-[600px]'> 
      <div className="flex items-end justify-between pt-20 pl-10 mb-10">

        <div>
          <h1 className="text-[#BF7E28] text-xs font-semibold">
            HAND PICKED
          </h1>

          <p className="font-serif text-4xl font-medium leading-[1.05] tracking-[1px] text-[#17200D] mt-3">
            Featured Listings

          </p>
        </div>

    <a
    href="#categories"
    className="group relative flex items-center gap-1 font-serif text-xl font-bold text-[#286B16] pr-10"
    >
    <span className="relative">
        See all
        <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-[#286B16] transition-all duration-700 ease-out group-hover:w-full"></span>
    </span>

    <ArrowRight size={18} />
    </a>
      </div>

    {/* Coffee */}
<div className="grid grid-cols-1 gap-4 h-[350px] md:grid-cols-2 lg:grid-cols-4 pl-10 flex pr-10">
    <Link to="/products/coffee">

        <div className="group w-full max-w-[420px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-400 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
            <div className="relative h-[210px]">

            <img src={Coffee} 
            alt="Coffee"
            className='h-full w-full object-cover transition-transform duration-400 group-hover:scale-110 ease-out '>
            </img>
            </div>
            <div className="p-4">
        <div >
            <div className="flex items-center justify-between">
                <h2 className="text-1xl font-medium text-gray-900">
            Ready-to-Brew Coffee
            </h2>

            <p className="text-xs font-bold text-[#286B16]">
            KSh 1,500
            </p>
            </div>
            
            <p className='p-1 flex text-xs items-center tracking-wide gap-1 text-gray-500'>
                <MapPin size={10}/>  
                Meru, Kenya</p>

            <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#286B16] py-2 text-base font-medium text-white transition duration-200 hover:bg-[#1F5411]">
            <Plus size={19} />
            Add to Cart
            </button>

        </div>

            
        </div>
       
      
      </div>

    </Link>

{/* Plantains */}
    <Link to="/products/plantains">

        <div className="group w-full max-w-[420px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-400 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
            <div className="relative h-[210px]">

            <img src={Plantains} 
            alt="Plantains"
            className='h-full w-full object-cover transition-transform duration-400 group-hover:scale-110 ease-out '>
            </img>
            </div>
            <div className="p-4">
        <div >
            <div className="flex items-center justify-between">
                <h2 className="text-1xl font-medium text-gray-900">
            Plantains
            </h2>

            <p className="text-xs font-bold text-[#286B16]">
            KSh 700/kg
            </p>
            </div>
            
            <p className='p-1 flex text-xs items-center tracking-wide gap-1 text-gray-500'>
                <MapPin size={10}/>  
                Tharaka, Kenya</p>

            <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#286B16] py-2 text-base font-medium text-white transition duration-200 hover:bg-[#1F5411]">
            <Plus size={19} />
            Add to Cart
            </button>

        </div>

            
        </div>
       
      
      </div>

    </Link>


{/* Eggs */}
    <Link to="/products/eggs">

        <div className="group w-full max-w-[420px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-400 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
            <div className="relative h-[210px]">

            <img src={Eggs} 
            alt="Eggs"
            className='h-full w-full object-cover transition-transform duration-400 group-hover:scale-110 ease-out '>
            </img>
            </div>
            <div className="p-4">
        <div >
            <div className="flex items-center justify-between">
                <h2 className="text-1xl font-medium text-gray-900">
            Eggs
            </h2>

            <p className="text-xs font-bold text-[#286B16]">
            KSh 480/tray
            </p>
            </div>
            
            <p className='p-1 flex text-xs items-center tracking-wide gap-1 text-gray-500'>
                <MapPin size={10}/>  
                Nairobi, Kenya</p>

            <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#286B16] py-2 text-base font-medium text-white transition duration-200 hover:bg-[#1F5411]">
            <Plus size={19} />
            Add to Cart
            </button>

        </div>

            
        </div>
       
      
      </div>

    </Link>

{/* Tomatoes */}
    <Link to="/products/tomatoes">

        <div className="group w-full max-w-[420px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-400 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
            <div className="relative h-[210px]">

            <img src={Tomatoes} 
            alt="Tomatoes"
            className='h-full w-full object-cover transition-transform duration-400 group-hover:scale-110 ease-out '>
            </img>
            </div>
            <div className="p-4">
        <div >
            <div className="flex items-center justify-between">
                <h2 className="text-1xl font-medium text-gray-900">
            Fresh Tomatoes
            </h2>

            <p className="text-xs font-bold text-[#286B16]">
            KSh 200/kg
            </p>
            </div>
            
            <p className='p-1 flex text-xs items-center tracking-wide gap-1 text-gray-500'>
                <MapPin size={10}/>  
                Kiambu, Kenya</p>

            <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#286B16] py-2 text-base font-medium text-white transition duration-200 hover:bg-[#1F5411]">
            <Plus size={19} />
            Add to Cart
            </button>

        </div>

            
        </div>
       
      
      </div>

    </Link>
    </div>
    </section>
  ) 
} 
 
export default Featured 
