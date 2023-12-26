import React from 'react'
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider.jsx';
import {slides} from '../Slider/SliderData.json'

export default function Home() {
    return (
        <div className=" mx-auto w-full bg-cover bg-no-repeat bg-left bg-[url('../images/bg-home.jpg')] ">
            <h1 className=" text-rose-700/75 text-center text-2xl sm:text-5xl pt-10 font-extrabold">Welcome to Talaja Memon Jamat</h1>
            <div className="relative overflow-hidden sm:mx-16 mx-2">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 sm:py-24 mx-auto sm:px-6 lg:px-8">
                <Slider data={slides} />
                </div>
            </div>
        </div>
    );
}