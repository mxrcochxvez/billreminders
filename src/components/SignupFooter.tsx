import { Link } from "react-router-dom";
import Section from "../layout/Section";

export default function SignupFooter() {
    return (
        <Section className="bg-gray-800 text-white p-12 flex justify-between mt-4">
            <div>
                <h1 className="text-xl">Sign up for early access!</h1>
                <div className="grid grid-cols-2 gap-4 max-w-sm mt-2">
                    <Link to="/signup">
                        <button className="bg-blue-500 px-4 py-2 rounded-lg ring-4">Sign Up</button>
                    </Link>
                    <button className="underline text-lg">Login</button>
                </div>
            </div>
            <div className="self-end">
                <p>&copy;Marco Chavez 2021</p>
            </div>
        </Section>
    )
}
