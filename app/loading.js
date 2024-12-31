// app/Loading.js
"use client"
import { BounceLoader } from "react-spinners";


export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-2xl">
      <BounceLoader color="#808080" size={100} /> {/* Customize color and size as needed */}
      </div>
    </div>
  );
}
