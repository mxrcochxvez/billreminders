import { useLocation } from "react-router";

type HeroProps = {
    title: string,
    subtitle?: string
}

export default function Hero({ title, subtitle }: HeroProps): JSX.Element {

    const location: any = useLocation();
    const { status } = location.state || "";

    return (
        <div>
            {status && <div className="mx-4 my-1">
                <p className="text-green-800 border-2 border-green-500 rounded-md bg-green-200  p-2">✅ You're on the list! You will get an email when your account is ready to use.</p>
                <p className="text-yellow-800 border-2 border-yellow-500 rounded-md bg-yellow-200 p-2 mt-1">⚠️ Please do not try to sign up multiple times. ⚠️</p>    
            </div>}
            <div className="w-screen h-96 flex justify-center items-center bg-gray-100">
                <div className="container mx-auto flex flex-col items-center">
                    <h1 className="text-4xl">{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}
