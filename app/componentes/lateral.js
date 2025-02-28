import React from 'react'
import { FaHouseChimney } from "react-icons/fa6";
import { CiFolderOn } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";

export default function Lateral() {
  return (
    <div className="flex justify-center p-1 flex-col h-[300px] w-[90px] space-y-3 mt-2">

      <button className="text-xs w-[70px] h-[80px] flex-col justify-items-center rounded-xl hover:bg-gray-600 transition-collors duration-300"><FaHouseChimney size={20}/>Início</button>
      <button className="text-xs w-[70px] h-[80px] flex-col justify-items-center rounded-xl hover:bg-gray-600 transition-collors duration-300"><CiFolderOn size={25} />Inscrições</button>
      <button className="text-xs w-[70px] h-[80px] flex-col justify-items-center rounded-xl hover:bg-gray-600 transition-collors duration-300"><BsPersonCircle size={22}/>Você</button>

    </div>
  )
}
