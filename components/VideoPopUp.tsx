"use client"
import { useEffect, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom';
import { FaXmark } from 'react-icons/fa6'

interface VideoProps {
    url: string;
    closefn: ()=> void;
}

const subscribe = () => ()=> {};
const useIsClient = ()=>
    useSyncExternalStore(
        subscribe,
        ()=>  true,
        ()=> false
    );

const VideoPopUp = ({url, closefn}: VideoProps) => {
    const isClient = useIsClient();


    useEffect(()=>{
        document.body.style.overflow = "hidden";
        return ()=> {
            document.body.style.overflow ="unset";
        }
    },[]);

    if(!isClient) return null;

  return createPortal (
    <div className="fixed flex inset-0 z-50 bg-black/80 backdrop-blur-sm items-center justify-center p-4 animate-fadeIn"
    onClick={closefn}
    >
       <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e)=> e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 text-white hover:bg-site-green rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Modal"
              onClick={closefn}
            >
              <FaXmark size={20} />
            </button>
            <video
              src={`/videos/${url}`}
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
        </div> 
    </div>,
    document.body
  )
}

export default VideoPopUp