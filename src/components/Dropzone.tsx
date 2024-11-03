import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { Button } from '@/components/ui/button'
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa6";
import { Progress } from './ui/progress';
import { filesize } from 'filesize'
import { IoClose } from "react-icons/io5";
import { VscError } from "react-icons/vsc";

export const Dropzone = () => {

    const [files, setFiles] = useState<File | null>(null)

    const onDrop = useCallback((files: File[]) => {
        setFiles(files[0])
    }, [])

    const dropzone = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
        }
    })

    const { isDragActive, isDragReject } = dropzone

    return (
        <>
            {!files &&
                <div 
                    {...dropzone.getRootProps()} 
                    className='bordGradiant p-5 rounded-xl border-dashed text-center flex items-center flex-col justify-center gap-5  '
                    style={{ opacity: isDragActive ? '0.7' : '', borderColor: isDragReject ? 'red' : '' }}
                >
                    {isDragReject &&
                        <>
                            <div className='text-red-600 text-4xl'>
                                <VscError />
                            </div>

                            <p className='text-red-600 font-bold'>Só é aceito arquivo PDF</p>
                        </>   
                    }
                
                    {!isDragReject &&
                        <>
                            <div className='text-5xl text-center text-secondary'>
                                <IoCloudUploadOutline />
                            </div>
                            <h4>Selecione ou arraste um arquivo e solte aqui.</h4>
                            <p className='text-gray'>DOCX ou PDF, tamanho de arquivo não superior a 10 MB</p>

                            <Button className='linear hover:opacity-70'>Selecione o arquivo</Button>

                            <input {...dropzone.getInputProps()} className='hidden'/>
                        </>
                    }
                    
                </div>
            }
            

            {files && 
                <div>
                    <h6 className='my-5'>Arquivo carregando</h6>

                    <div>
                        <div className='flex items-center gap-2 bordGradiant p-2 rounded-xl w-full relative'>
                            <div className='text-xl'>
                                <FaRegFilePdf />
                            </div>

                            <div className='flex flex-col flex-1 gap-2'>
                                <div className='flex justify-between items-center text-sm'>
                                    <p>{files.name}</p>
                                    <p>{filesize(files.size)}</p>
                                </div>
                                <div>
                                    <Progress value={33} className='h-1'/>
                                </div>
                            </div>

                            <div onClick={() => setFiles(null)} className='absolute bg-black p-1 text-white rounded-full cursor-pointer -top-3 -right-3'>
                                <IoClose />
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
        
    )
}