'use client'

import { Dropzone } from "@/components/Dropzone"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import axios from "axios";

const Page = () => {

    const [file, setFile] = useState<File | null>()
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = async () => {
        const vagaUrl: string | undefined = inputRef.current?.value;


        console.log("file:", file);
        console.log("vagaUrl:", vagaUrl);
        
        const formData = new FormData();
        formData.append("vaga_url", vagaUrl as string);
        formData.append("arquivo_pdf", file as File);
        

        console.log("FormData conteúdo:", formData.get("arquivo_pdf"), formData.get("vaga_url"));

        try {
            const response = await axios.post("http://localhost:8000/analisar/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",  // `multipart/form-data` permite envio de arquivos
                },
            });
            console.log("Resposta da API:", response.data);
            
        } catch (error) {
            console.error("Erro ao enviar dados para a API:", error);
        }

    }

    return(
        <div className="flex  gap-4 h-full">
            <div className="hidden md:block bordGradiant glassbg py-7 pl-5 pr-12 rounded-xl self-start">
                <h2 className="text-2xl text-white mb-3 font-bold">Bem vindo (a) <br /> de volta!</h2>
                <p>Bom te ver, Arthur Gabriel</p>
            </div>

            <div className="bordGradiant glassbg rounded-xl flex-1">
                <div> 
                    <div className="flex items-center gap-2 justify-center mt-8 w-full px-5">
                        <p>Colocar link da vaga:</p>
                        <input 
                            placeholder="https//vaga.com.br" 
                            className="bg-[#0F1535] flex-1 outline-none text-sm bordGradiant p-1 px-3 rounded-xl"
                            ref={inputRef}
                        />
                    </div>

                    <div className="p-5">
                        <h3 className="text-2xl text-center mb-8">Carregar currículo</h3>
                        <Dropzone setData={setFile}/>
                    </div>


                    <div className="w-full text-center mt-7">
                        <Button disabled={!file} onClick={handleClick}>Fazer análise do perfil</Button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Page