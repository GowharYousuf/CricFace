import React from 'react';

const  AboutContent = () => {
  return (
    <div>
      <section className="bg-black container border-white">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 rounded-lg shadow-md">
 <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
   <div className="max-w-lg">
   <h2 className="text-3xl font-extrabold text-green-600 sm:text-4xl pl-10">About Us</h2>
     <p className="mt-1 p-10 text-gray-600 sm:text-1xl">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque suscipit provident, sapiente incidunt accusamus. Dolore nemo tempora, aperiam doloremque neque aliquid numquam cupiditate quos debitis, ipsam expedita, itaque quas.
     </p>
   </div>
   <div className="mt-12 md:mt-0">
     <img
       src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
       alt="About Us"
       className="object-cover rounded-lg shadow-md"
     />
   </div>
 </div>
</div>
        </div>
      </section>
      <div className="bg-black p-4 min-h-screen">
 <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
   <div className="md:w-2/3 lg:w-1/2">
     <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">How we manufacture cricket bats?</h2>
   </div>
   <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-400 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
     <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
       <div className="relative space-y-8 py-12 p-8">
         <svg
           stroke="currentColor"
           fill="none"
           strokeWidth="2"
           viewBox="0 0 24 24"
           strokeLinecap="round"
           strokeLinejoin="round"
           color="white"
           style={{ color: 'white' }}
           height="50"
           width="50"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
           <path
             d="M14 10a3.5 3.5 0 0 0 -7 0v1h3v-1a.5.5 0 0 1 1 0v5a2 2 0 0 1 -2 2h-2"
           />
           <path d="M7 21a3 3 0 0 0 6 0" />
           <path d="M4 18v-11a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
         </svg>
         <div className="space-y-2">
           <h5 className="text-xl font-semibold text-white transition group-hover:text-green-500">
             Wood Selection
           </h5>
           <p className="text-gray-400">
             We carefully select the best quality willow wood for our cricket bats, ensuring optimal performance and durability.
           </p>
         </div>
       </div>
     </div>
     <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
       <div className="relative space-y-8 py-12 p-8">
         <svg
           stroke="currentColor"
           fill="none"
           strokeWidth="2"
           viewBox="0 0 24 24"
           strokeLinecap="round"
           strokeLinejoin="round"
           color="white"
           style={{ color: 'white' }}
           height="50"
           width="50"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
           <path d="M3 19v-14l9 6l9 -6v14" />
         </svg>
         <div className="space-y-2">
           <h5 className="text-xl font-semibold text-white transition group-hover:text-green-500">Shaping and Pressing</h5>
           <p className="text-gray-400">After selecting the wood, we shape and press the bats into the desired form using specialized equipment and techniques.</p>
         </div>
       </div>
     </div>
     <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
       <div className="relative space-y-8 py-12 p-8">
         <svg
           stroke="currentColor"
           fill="none"
           strokeWidth="2"
           viewBox="0 0 24 24"
           strokeLinecap="round"
           strokeLinejoin="round"
           color="white"
           style={{ color: 'white' }}
           height="50"
           width="50"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
           <path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 0 -1.414 -1.414h-12m2 -2h14a2 2 0 0 0 2 -2v-8c0 -.547 -.453 -1 -1 -1h-14c-.547 0 -1 .453 -1 1v2" />
         </svg>
         <div className="space-y-2">
           <h5 className="text-xl font-semibold text-white transition group-hover:text-green-500">Finishing and Customization</h5>
           <p className="text-gray-400">We apply various finishing techniques, such as sanding, polishing, and customization, to ensure a smooth and personalized feel for each cricket bat.</p>
         </div>
       </div>
     </div>
     <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
       <div className="relative space-y-8 py-12 p-8">
         <svg
           stroke="currentColor"
           fill="none"
           strokeWidth="2"
           viewBox="0 0 24 24"
           strokeLinecap="round"
           strokeLinejoin="round"
           color="white"
           style={{ color: 'white' }}
           height="50"
           width="50"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
           <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
           <path d="M7 12h14l-3 -3m0 6l3 -3" />
         </svg>
         <div className="space-y-2">
           <h5 className="text-xl font-semibold text-white transition group-hover:text-green-500">Quality Assurance</h5>
           <p className="text-gray-400">Each cricket bat undergoes strict quality assurance checks to ensure it meets our high standards before being shipped to customers.</p>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
    </div>
  );
};

export default  AboutContent;