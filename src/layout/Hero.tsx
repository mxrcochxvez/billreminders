type HeroProps = {
    title: string,
    subtitle?: string
}

export default function Hero({ title, subtitle }: HeroProps): JSX.Element {
    return (
        <div className="w-screen h-96 flex justify-center items-center bg-gray-100">
            <div className="container mx-auto flex flex-col items-center">
                <h1 className="text-4xl">{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}
