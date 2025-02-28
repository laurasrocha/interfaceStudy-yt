import React from 'react'
import Image from 'next/image'
import { PiBooks } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { HiDesktopComputer } from "react-icons/hi";
import { GoCheckCircleFill } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import { HiEllipsisVertical } from "react-icons/hi2";

export default function Videos2() {
  return (
    <div className="flex space-x-5 mt-12 w-full h-[280px]">

      <div className="w-[335px] h-[280px]">
        <div className="w-80 h-48 overflow-hidden rounded-lg relative">
          <Image
            src="/img5.jpg"
            alt="imagem"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-between p-1 w-full h-[85px] space-x-1">
          <button className="flex mt-2"><PiBooks className="w-[35px] h-[35px] bg-red-900 rounded-full p-1 text-white" /></button>
          <div className="p-1 space-y-1">
            <h1 className="font-robotoCondensed font-semibold">Livros que Marcaram uma Geração</h1>
            <h2 className="text-gray-400 text-sm flex items-center">Biblioteca Esquecida</h2>
            <h2 className="text-gray-400 text-sm">15 mil visualizações · há 1 dia</h2>
          </div>
          <button className="flex mt-1"><HiEllipsisVertical size={25} /></button>
        </div>
      </div>

      <div className="w-[335px] h-[280px]">
        <div className="w-80 h-48 overflow-hidden rounded-lg relative">
          <Image
            src="/img6.jpg"
            alt="imagem"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-between p-1 w-full h-[85px] space-x-1">
          <button className="flex mt-2"><FaLaptopCode className="w-[35px] h-[35px] bg-slate-500 text-black rounded-full p-1" /></button>
          <div className="p-1 space-y-1">
            <h1 className="font-robotoCondensed font-semibold">Criando com códigos: Como dominar o Mundo Digital </h1>
            <h2 className="text-gray-400 text-sm flex items-center">Código Criativo<GoCheckCircleFill className="text-gray-400 m-1" /></h2>
            <h2 className="text-gray-400 text-sm">70 mil visualizações · há 1 ano</h2>
          </div>
          <button className="flex mt-1"><HiEllipsisVertical size={25} /></button>
        </div>
      </div>

      <div className="w-[335px] h-[280px]">
        <div className="w-80 h-48 overflow-hidden rounded-lg relative">
          <Image
            src="/img7.jpg"
            alt="imagem"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-between p-1 w-full h-[85px] space-x-1">
          <button className="flex mt-2"><HiDesktopComputer className="w-[35px] h-[35px] bg-slate-300 text-black rounded-full p-2" /></button>
          <div className="p-1 space-y-1">
            <h1 className="font-robotoCondensed font-semibold">Tecnologia e Design: O Notebook Perfeito</h1>
            <h2 className="text-gray-400 text-sm flex items-center">Tech Style<GoCheckCircleFill className="text-gray-400 m-1" /></h2>
            <h2 className="text-gray-400 text-sm">32 mil visualizações · há 2 anos</h2>
          </div>
          <button className="flex mt-1"><HiEllipsisVertical size={25} /></button>
        </div>
      </div>

      <div className="w-[335px] h-[280px]">
        <div className="w-80 h-48 overflow-hidden rounded-lg relative">
          <Image
            src="/img8.jpg"
            alt="imagem"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-between p-1 w-full h-[85px]">
          <button className="flex mt-2"><GiBrain className="w-[35px] h-[35px] text-orange-300 bg-gray-600 rounded-full p-2" /></button>
          <div className="p-1 space-y-1">
            <h1 className="font-robotoCondensed font-semibold">Inspire-se e Comece a Escrever Hoje</h1>
            <h2 className="text-gray-400 text-sm flex items-center">Mentes Criativas<GoCheckCircleFill className="text-gray-400 m-1" /></h2>
            <h2 className="text-gray-400 text-sm">354 mil visualizações · há 3 meses</h2>
          </div>
          <button className="flex mt-1"><HiEllipsisVertical size={25} /></button>
        </div>
      </div>

    </div>
  )
}
