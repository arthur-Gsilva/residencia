import { redirect } from "next/navigation"

const Page = () => {
    redirect('/login')

    return(
        <div className="bg-red-300 text-secondary">xxx</div>
    )
}

export default Page