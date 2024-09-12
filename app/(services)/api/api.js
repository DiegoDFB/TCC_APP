import axios from "axios";

const loginUser = async ({email, password}) => {

        const response = await axios.post(
            "http://10.0.2.2:8080/api/users/login", FormData,
            {
                email,
                password,
            }
        );
        return response.data;
}

const registerUser = async ({email, password}) => {
    
    const response = await axios.post(
        "http://10.0.2.2:8080/api/users/register",
        {
            email,
            password,
        }
    );
    return response.data;
}

export { loginUser, registerUser }