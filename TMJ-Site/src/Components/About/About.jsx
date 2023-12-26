import React from 'react'

export default function About() {
  return (
      <div className=" bg-cover bg-no-repeat bg-left bg-[url('../images/bg-home.jpg')]  py-16 ">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src='../src/assets/main-logo.jpeg'
                          alt="image" className='rounded-3xl ml-20'
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Our Vision
                      </h2>
                      <p className="mt-6 text-gray-600">
                      <b>Talaja Memon Jamat</b> is a Non-Government social organization having member Jamats all across India and are engaged in providing Housing, Medical, Rehabilitation, Economic Upliftment Scheme, and Women Empowerment Programmes to the under privileged alongwith services of Matrimonial Wing & Govt Scheme Guidance Wing. The organization has been actively participating in the forefront for providing relief in case of disasters as well.
                      The total population of Memons in India is approximately 15,00,000 people spread across 12 regions and around 482 Jamats. A majority of this population is still living below the poverty line and has to struggle to meet with the basic necessities in life. There are various problems like Housing, Low Economic Status, Unemployment, Low level of Education, Sanitation and Unhealthy Environment, Shortage of Medical Assistance, Atrocities against Women, Matrimonial imbalance, and various other such problems.
                      </p> 
                  </div>
              </div>
          </div>
      </div>
  );
}