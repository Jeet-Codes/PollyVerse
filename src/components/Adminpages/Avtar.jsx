import React from 'react'
import Layout from './Layout'
import { banner1, banner2 } from '../../assets'
import Manager from './Manger'

const Avtar = () => {
  return (
    <Layout>
      <Manager>
 <div className="bg-gray-100 ">
  <div className="container mx-auto ">
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={banner2} alt="User Avatar"/>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
          <h2 className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl">John Doe</h2>
          <p className="mt-2 text-gray-500">john.doe@example.com</p>
          <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <div className="mt-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit Profile</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</Manager>
    </Layout>
   
  )
}

export default Avtar