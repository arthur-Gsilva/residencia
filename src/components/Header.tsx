import { LuBell } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

export const Header = () => {
    return(
        <header className="text-white w-full px-10 pt-2 mb-10">
            <div className="flex items-center justify-between w-full gap-4">
                <div className="flex items-center justify-center ">
                    <div className="h-[50px] w-[50px] bg-white"></div>
                </div>
                
                <div className="flex items-center justify-between flex-1">
                    <div className="text-sm">
                        <div><span className="text-gray">Páginas</span> / perfil</div>
                        <div>Perfil</div>
                    </div>

                    <div className="flex items-center gap-7">

                        <div className="linear p-[1px] rounded-lg">
                            <div className="flex items-center gap-2  bg-[#0F1535] rounded-lg px-2">
                                <GoSearch />
                                <input className="bg-transparent border-0 outline-none flex-1 placeholder:text-sm" placeholder="Digite aqui..."/>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 btnLinear py-1 px-2 rounded-xl shadow-[0px_4px_20px_0px_#F9067E] hover:opacity-70 transition-all cursor-pointer">
                            <LuBell />
                            2

                        </div>

                        <div className="h-[28px] w-[28px] bg-white"></div>

                        <div className="flex items-center gap-1 text-secondary">
                            <p>Arthur Gabriel</p>
                            <FaChevronDown />
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    )
}