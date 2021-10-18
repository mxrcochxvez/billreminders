import Input from "../layout/Input";
import Section from "../layout/Section";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const SIGNUP = gql`
    mutation Signup($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        createUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            _id
        }
    }
`

export default function Signup() {

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    // eslint-disable-next-line
    const [signup, { data, loading, error }] = useMutation(SIGNUP, {errorPolicy: "all"});

    const submit = async () => {
        await signup({
            variables: {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                password: userData.password
            }
        })
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred</p>;

    return (
        <Section className="mt-12 mb-12">
            <h1 className="text-2xl text-center">Signup</h1>
            <div className="border-2 border-black rounded-md m-auto max-w-md px-12 py-4">
                <div className="grid grid-cols-1 gap-2">
                    <div>
                        <Input label="Username" type="text" placeholder="Username"
                            value={userData.username}
                            onChange={e => setUserData({ ...userData, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <Input label="First Name" type="text" placeholder="First Name"
                            value={userData.firstName}
                            onChange={e => setUserData({ ...userData, firstName: e.target.value })}
                        />
                    </div>
                    <div>
                        <Input label="Last Name" type="text" placeholder="Last Name"
                            value={userData.lastName}
                            onChange={e => setUserData({ ...userData, lastName: e.target.value })}
                        />
                    </div>
                    <div>
                        <Input label="Email" type="text" placeholder="Email"
                            value={userData.email}
                            onChange={e => setUserData({ ...userData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <Input label="Password" type="password" placeholder="*******"
                            value={userData.password}
                            onChange={e => setUserData({ ...userData, password: e.target.value })}
                        />
                    </div>
                    <div className="text-center mt-2 bg-gray-200 rounded-md">
                        <button onClick={submit}>Submit</button>
                    </div>
                </div>
            </div>
        </Section>
    )
}
