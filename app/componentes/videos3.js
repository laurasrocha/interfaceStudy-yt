import React from 'react'
import Image from 'next/image'
import { IoPeopleCircleOutline } from "react-icons/io5";
import { GoCheckCircleFill } from "react-icons/go";
import { GiMountaintop } from "react-icons/gi";
import { GiCupcake } from "react-icons/gi";
import { LuMousePointerClick } from "react-icons/lu";
import { HiEllipsisVertical } from "react-icons/hi2";

export default function Videos3() {
    return (
        <div className="flex space-x-5 mt-12 w-full h-[280px]">

            <div className="w-[335px] h-[280px]">
                <div className="w-80 h-48 overflow-hidden rounded-lg relative">
                    <Image
                        src="/img9.jpg"
                        alt="imagem"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex justify-between p-1 w-full h-[85px] space-x-1">
                    <button className="flex mt-2"><IoPeopleCircleOutline className="w-[35px] h-[35px] bg-white rounded-full p-1 text-blue-950" /></button>
                    <div className="p-1 space-y-1">
                        <h1 className="font-robotoCondensed font-semibold">Transformando Ideias em Ação: Como ter Reuniões Produtivas</h1>
                        <h2 className="text-gray-400 text-sm flex items-center">Estratégia Corporativa</h2>
                        <h2 className="text-gray-400 text-sm">50 mil visualizações · há 16 horas</h2>
                    </div>
                    <button className="flex mt-1"><HiEllipsisVertical size={25} /></button>
                </div>
            </div>

            <div className="w-[335px] h-[280px]">
                <div className="w-80 h-48 overflow-hidden rounded-lg relative">
                    <Image
                        src="/img10.jpg"
                        alt="imagem"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex justify-between p-1 w-full h-[85px] space-x-1">
                    <button className="flex mt-2"><GiMountaintop className="w-[35px] h-[35px] text-black bg-green-300 rounded-full p-2" /></button>
                    <div className="p-1 space-y-1">
                        <h1 className="font-robotoCondensed font-semibold">Explorando as Montanhas que Encantam</h1>
                        <h2 className="text-gray-400 text-sm flex items-center">Escalando o Mundo<GoCheckCircleFill className="text-gray-400 m-1" /></h2>
                        <h2 className="text-gray-400 text-sm">1,1 mi de visualizações · há 1 ano</h2>
                    </div>
                    <button className="flex mt-1"><HiEllipsisVertical size={25} /></button>
                </div>
            </div>

            <div className="w-[335px] h-[280px]">
                <div className="w-80 h-48 overflow-hidden rounded-lg relative">
                         <Image
                           src="/img11.jpg"
                           alt="imagem"
                           fill 
                           className="object-cover"
                         />
                       </div>
                <div className="flex justify-between p-1 w-full h-[85px] space-x-1">
                    <button className="flex mt-2"><GiCupcake className="w-[35px] h-[35px] bg-red-600 rounded-full p-1 text-orange-900" /></button>
                    <div className="p-1 space-y-1">
                        <h1 className="font-robotoCondensed font-semibold">Doces Sensações: Como Preparar Sobremesas Incríveis</h1>
                        <h2 className="text-gray-400 text-sm flex items-center">Doce Tentação<GoCheckCircleFill className="text-gray-400 m-1" /></h2>
                        <h2 className="text-gray-400 text-sm">72 mil visualizações · há 5 meses</h2>
                    </div>
                    <button className="flex mt-1"><HiEllipsisVertical size={25} /></button>
                </div>
            </div>

            <div className="w-[335px] h-[280px]">
                <div className="w-80 h-48 overflow-hidden rounded-lg relative">
                    <Image
                        src="/img12.jpg"
                        alt="imagem"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex justify-between p-1 w-full h-[85px] space-x-1 mt-1">
                    <button className="flex mt-2"><LuMousePointerClick className="w-[35px] h-[35px] text-black bg-yellow-400 rounded-full p-1" /></button>
                    <div className="p-1 space-y-1 ml-1">
                        <h1 className="font-robotoCondensed font-semibold text-pretty">Programando o Futuro: Dicas para Iniciantes</h1>
                        <h2 className="text-gray-400 text-sm flex items-center">Mundo do Código<GoCheckCircleFill className="text-gray-400 m-1" /></h2>
                        <h2 className="text-gray-400 text-sm">336 mil visualizações · há 4 anos</h2>
                    </div>
                    <button className="flex mt-1"><HiEllipsisVertical size={25} /></button>
                </div>
            </div>

        </div>
    )
}
