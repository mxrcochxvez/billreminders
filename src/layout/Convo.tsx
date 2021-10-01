type ConvoProps = {
    question: string;
    answer: string;
    alignment?: "left" | "right" | "center";
}

export default function Convo({question, answer, alignment}: ConvoProps) {
    return (
        <div className={`${alignment ? `text-${alignment}` : ``} bg-gray-200 py-2 px-4 rounded-lg max-w-lg`}>
            <h3 className="text-xl">{question}</h3>
            <p className="text-gray-500">{answer}</p>
        </div>
    )
}
