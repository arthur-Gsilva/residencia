import { MdHome } from "react-icons/md";
import { CgLoadbarSound } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiMiniWrench } from "react-icons/hi2";

export const Sidebar = () => {
    return(
        <div className="h-full">
            <nav className="bordGradiant p-3 rounded-xl h-full bg-white/5 backdrop-blur-md">
                <div className="flex flex-col gap-3">
                    <div className="menuItem hover:bordGradiant hover:bg-[#324A5980] hover:glassbg">
                        <div className="bg-[#1BA4E580] p-2 rounded-lg">
                            <MdHome className="text-secondary"/>
                        </div>
                        Painel
                    </div>
                    <div className="menuItem hover:bordGradiant hover:bg-[#324A5980] hover:glassbg">
                        <div className="bg-[#1BA4E580] p-2 rounded-lg">
                            <CgLoadbarSound className="text-secondary "/>
                        </div>
                        Atividades
                    </div>
                    <div className="menuItem hover:bordGradiant hover:bg-[#324A5980] hover:glassbg">
                        <div className="bg-[#1BA4E580] p-2 rounded-lg">
                            <FaBell className="text-secondary"/>
                        </div>
                        Notificação
                    </div>
                    <div className="menuItem hover:bordGradiant hover:bg-[#324A5980] hover:glassbg">
                        <div className="bg-[#1BA4E580] p-2 rounded-lg">
                            <FaUser className="text-secondary"/>
                        </div>
                        Perfil
                    </div>
                    <div className="menuItem hover:bordGradiant hover:bg-[#324A5980] hover:glassbg">
                        <div className="bg-[#1BA4E580] p-2 rounded-lg">
                            <HiMiniWrench className="text-secondary"/>
                        </div>
                        Configurações
                    </div>
                </div>
            </nav>
        </div>
    )
}