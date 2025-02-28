import React from 'react'
import Image from 'next/image'
import { PiTreeThin } from "react-icons/pi";
import { GoCheckCircleFill } from "react-icons/go";
import { FaPersonSnowboarding } from "react-icons/fa6";
import { GiSailboat } from "react-icons/gi";
import { HiEllipsisVertical } from "react-icons/hi2";
import { MdEmojiFoodBeverage } from "react-icons/md";

export default function Videos() {
  return (
    <div className="flex space-x-5 mt-5 w-full h-[280px]">
      <div className="w-[335px] h-[280px]">
        <div className="w-80 h-48 overflow-hidden rounded-lg relative">
          <Image
            src="/img1.jpg"
            alt="imagem"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-between w-full h-[85px] space-x-1 p-1">
          <button className="flex mt-2"><MdEmojiFoodBeverage className="w-[35px] h-[35px] bg-yellow-200 text-black rounded-full p-1" /></button>
          <div className="p-1 space-y-1 ml-1">
            <h1 className="font-robotoCondensed font-semibold text-pretty">Receitas Rápidas para Começar o Dia</h1>
            <h2 className="text-gray-400 text-sm flex items-center">Despertar Saboroso<GoCheckCircleFill className="text-gray-400 m-1" /></h2>
            <h2 className="text-gray-400 text-sm">209 mil visualizações · há 5 meses</h2>
          </div>
          <button className="flex mt-1"><HiEllipsisVertical size={25} /></button>
        </div>
      </div>

      <div className="w-[335px] h-[280px]">
        <div className="w-80 h-48 overflow-hidden rounded-lg relative">
          <Image
            src="/img2.jpg"
            alt="imagem"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-between p-1 w-full h-[85px] space-x-2">
          <button className="flex mt-2"><PiTreeThin className="w-[35px] h-[35px] bg-blue-700 rounded-full p-1 text-white" /></button>
          <div className="p-1 space-y-1">
            <h1 className="font-robotoCondensed font-semibold">Esquilos: O Mundo das Criaturas Curiosas</h1>
            <h2 className="text-gray-400 text-sm flex items-center">Natureza Viva<GoCheckCircleFill className="text-gray-400 m-1" /></h2>
            <h2 className="text-gray-400 text-sm">26 mil visualizações · há 11 dias</h2>
          </div>
          <button className="flex mt-1"><HiEllipsisVertical size={25} /></button>
        </div>
      </div>

      <div className="w-[335px] h-[280px]">
        <div className="w-80 h-48 overflow-hidden rounded-lg relative">
          <Image
            src="/img3.jpg"
            alt="imagem"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-between w-full h-[85px] space-x-1 mt-1 p-1">
          <button className="flex mt-2"><GiSailboat className="w-[35px] h-[35px] bg-slate-100 text-black rounded-full p-2" /></button>
          <div className="p-1 space-y-1 ml-1">
            <h1 className="font-robotoCondensed font-semibold text-pretty">Paraísos Tropicais: As Praias Mais Incríveis</h1>
            <h2 className="text-gray-400 text-sm flex items-center">Viajante do Litoral</h2>
            <h2 className="text-gray-400 text-sm">294 mil visualizações · há 1 mês</h2>
          </div>
          <button className="flex mt-1"><HiEllipsisVertical size={25} /></button>
        </div>
      </div>

      <div className="w-[335px] h-[280px]">
        <div className="w-80 h-48 overflow-hidden rounded-lg relative">
          <Image
            src="/img4.jpg"
            alt="imagem"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-between w-full h-[85px] space-x-1 p-1">
          <button className="flex mt-2"><FaPersonSnowboarding className="w-[35px] h-[35px] bg-gray-500 rounded-full p-2" /></button>
          <div className="p-1 space-y-1">
            <h1 className="font-robotoCondensed font-semibold">Descendo as Neves: Aventura no Ski</h1>
            <h2 className="text-gray-400 text-sm flex items-center">Rastro de Neve<GoCheckCircleFill className="text-gray-400 m-1" /></h2>
            <h2 className="text-gray-400 text-sm">317 mil visualizações · há 2 anos</h2>
          </div>
          <button className="flex mt-1"><HiEllipsisVertical size={25} /></button>
        </div>
      </div>

    </div >

  )
}
