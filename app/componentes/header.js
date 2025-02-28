import { BsList } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { AiFillAudio } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";

export default function Header() {
    return (
        <div className="flex justify-between w-full p-1 mt-2">
            <div className="flex w-[200px] h-[40px]">
                <button className="w-[40px] h-[40px] p-2 ml-4 mt-2 mr-5 rounded-full hover:bg-gray-600 transition-collors duration-300"><BsList size={25} /></button>
                
            </div>

            <div className="flex">
                <input className="w-[450px] h-[40px] p-2 rounded-s-full text-white bg-[#121212] border border-[#2E2E2E]" placeholder="Pesquisar"></input>
                <button className="bg-[#1C1C1C] border border-[#2E2E2E] h-[40px] w-[40px] rounded-e-full p-1 hover:bg-gray-700 transition-collors duration-300"><CiSearch size={25} /></button>
                <button className="bg-[#2E2E2E] ml-4 rounded-full w-[40px] h-[45px] p-2 hover:bg-gray-600 transition-collors duration-300"><AiFillAudio size={25} /></button>
            </div>

            <div className="flex space-x-4 mr-6">
                <button className="text-white w-[90px] h-[40px] rounded-2xl text-sm bg-[#2E2E2E] flex items-center gap-2 font-anton hover:bg-gray-600 transition-collors duration-300"><IoAddOutline size={30} className="" />Criar</button>
                <button className="h-[40px] w-[40px] p-1"><IoIosNotifications size={30} /></button>
                <button className="rounded-full bg-[#121212] w-[40px] h-[40px] p-2 border-2 border-green-400 hover:bg-gray-400 transition-collors duration-300"><IoCodeSlash size={20} color="white" /></button>
            </div>

        </div>
    )
}