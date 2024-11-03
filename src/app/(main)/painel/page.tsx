'use client'

import { Dropzone } from "@/components/Dropzone"

const page = () => {
    return(
        <div className="flex  gap-4 h-full">
            <div className=" bordGradiant glassbg py-7 pl-5 pr-12 rounded-xl self-start">
                <h2 className="text-2xl text-white mb-3 font-bold">Bem vindo (a) <br /> de volta!</h2>
                <p>Bom te ver, Arthur Gabriel</p>
            </div>

            <div className="bordGradiant glassbg rounded-xl flex-1">
                <div> 
                    <div className="flex items-center gap-2 justify-center mt-8 w-full px-5">
                        <p>Colocar link da vaga:</p>
                        <input placeholder="hhttps//vaga.com.br" className="bg-[#0F1535] flex-1 outline-none text-sm bordGradiant p-1 px-3 rounded-xl"/>
                    </div>

                    <div className="p-5">
                        <h3 className="text-2xl text-center mb-8">Carregar currículo</h3>
                        <Dropzone />
                    </div>


                </div>
                
            </div>
        </div>
    )
}

export default page