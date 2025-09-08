import React from 'react'

const Navbar = () => {
  return (
   <nav class="bg-white shadow-md">
  <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
    
  
    <a href="#" class="text-xl font-bold text-blue-600">SikshyaGhar</a>
    
   
    <div class="hidden md:flex space-x-6">
      <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
      <a href="#" class="text-gray-700 hover:text-blue-600">About</a>
      <a href="#" class="text-gray-700 hover:text-blue-600">Courses</a>
      <a href="#" class="text-gray-700 hover:text-blue-600">Contact</a>
    </div>
    
    
    <a href="#" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      Sign Up
    </a>
  </div>
</nav>

  )
}

export default Navbar