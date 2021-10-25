import Convo from "../layout/Convo"
import useWindowSize from "./hooks/useWindowSize"

export default function Grab() {

    // eslint-disable-next-line
    const { width } = useWindowSize()

    const handleScreenSize = (): JSX.Element => {
        if (width && width > 768) {
            return (
                <div className="px-10 my-8 grid grid-cols-3 gap-6">
                    <Convo size="xl" question="We get it. We don't like paying our bills either!" answer="That's why we've devised a system that allows you to create nofications in a way that make sense for you." />
                    <Convo size="xl" question="How?" answer="Like I mentioned, we get it. Most people don't like having to either check their bank account to see if they've already been charged for something." />
                    <Convo size="xl" question="Why?" answer="Because we are people, this platform will remain free until we've hit a user amount that succeeds what we can afford on our own (you'll get a warning with great detail before we ever charge for anything)." />
                </div>
            )
        } else {
            return (
                <div className="px-2 my-8 grid grid-cols-1 gap-6">
                    <Convo size="md" question="We get it. We don't like paying our bills either!" answer="That's why we've devised a system that allows you to create nofications in a way that make sense for you." />
                    <Convo size="md" question="How?" answer="Like I mentioned, we get it. Most people don't like having to either check their bank account to see if they've already been charged for something." />
                    <Convo size="md" question="Why?" answer="Because we are people, this platform will remain free until we've hit a user amount that succeeds what we can afford on our own (you'll get a warning with great detail before we ever charge for anything)." />
                </div>
            )
        }
    }

    return (
        <div>
            {handleScreenSize()}
        </div>
    )
}
