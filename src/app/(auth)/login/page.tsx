"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
 
const formSchema = z.object({
    email: z.string().email({ message: 'Email inválido' }),
    password: z.string().min(2, 'Senha inválida')
})

const Page = () => {

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ''
        },
    })

    function onSubmit() {
        router.push('/painel')
    }

    return(
        <div className="flex justify-center items-center h-full">
            <div className="px-4">
                <div className="text-center mb-5">
                    <h2 className="text-xl text-white font-extrabold">É bom te ver de novo!</h2>
                    <p className="text-gray">Use seu email e senha para entrar</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col sm:min-w-[300px]">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray">Email</FormLabel>
                                    <FormControl>
                                        <div className="linear p-1 rounded-lg">
                                            <Input
                                                placeholder="Seu email"
                                                type="email" {...field}
                                                className="bg-[#16314e] text-white border-none borderLinear z-20 ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
            
                                            />
                                        </div>
            
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-gray">Senha</FormLabel>
                                <FormControl>
                                <div className="linear p-1 rounded-lg">
                                    <Input
                                        placeholder="Sua senha"
                                        type="password" {...field}
                                        className="bg-[#16314e] text-white border-none borderLinear z-20 ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
            
                                    />
                                </div>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="linear py-6 text-lg hover:opacity-70">Entrar</Button>
                    </form>
                </Form>
                <p className="text-center mt-10 text-gray">
                    Não tem uma conta? <Link href={'/register'} className="text-white hover:underline">Inscreva-se</Link>
                </p>
            </div>
        </div>
    )
}

export default Page
