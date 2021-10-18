import { gql } from "@apollo/client";

const SIGNUP = gql`
    mutation Signup($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        createUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            _id
        }
    }
`

export default SIGNUP;