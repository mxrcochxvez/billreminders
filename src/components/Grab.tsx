import Convo from "../layout/Convo"

export default function Grab() {
    return (
        <div className="px-10 my-8 grid grid-cols-3 gap-6">
            <Convo question="We get it. We don't like paying our bills either!" answer="That's why we've devised a system that allows you to create nofications in a way that make sense for you."/>
            <Convo question="How?" answer="Like I mentioned, we get it. Most people don't like having to either check their bank account to see if they've already been charged for something."/>
            <Convo question="Why?" answer="Because we are people, this platform will remain free until we've hit a user amount that succeeds what we can afford on our own (you'll get a warning with great detail before we ever charge for anything)."/>
        </div>
    )
}
