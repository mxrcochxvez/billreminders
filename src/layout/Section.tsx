type SectionProps = {
    children: React.ReactNode,
    className?: string,
}

export default function Section({ children, className }: SectionProps): JSX.Element {
    return (
        <div className={`${className} w-screen`}>
            {children}
        </div>
    )
}
