import { Box, Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

function Log() {
    const [isSignup, setIsSignup] = useState(false);
    const [inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(inputs);
    }
    const resetState = () => {
        setIsSignup(!isSignup);
        setInputs({ firstname: "", lastname: "", email: "", password: "" })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    display="flex"
                    flexDirection={'column'}
                    maxWidth={400} alignItems='center'
                    justifyContent={'center'}
                    margin="auto"
                    marginTop={15}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}

                >
                    <Typography variant="h2" padding={3} textAlign={'center'}>
                        {isSignup ? "Sign up" : "Login"}
                    </Typography>

                    {isSignup && <TextField
                        onChange={handleChange}
                        name="firstname"
                        value={inputs.firstname}
                        margin="normal"
                        type={'text'}
                        variant="outlined"
                        placeholder="FirstName"
                    />}
                    {isSignup && <TextField
                        onChange={handleChange}
                        name="lastname"
                        value={inputs.lastname}
                        margin="normal"
                        type={'text'}
                        variant="outlined"
                        placeholder="LastName"
                    />}
                    <TextField
                        onChange={handleChange}
                        name="email"
                        value={inputs.email}
                        margin="normal"
                        type={'email'}
                        variant="outlined"
                        placeholder="Email"
                    />
                    <TextField
                        onChange={handleChange}
                        name="password"
                        value={inputs.password}
                        margin="normal"
                        type={'password'}
                        variant="outlined"
                        placeholder="Password"
                    />

                    <Button
                        endIcon={<LoginOutlinedIcon />}
                        type="submit"
                        sx={{ marginTop: 3, borderRadius: 3 }}
                        variant="contained"
                        color="warning"
                        onClick={handleSubmit}
                    >
                        {isSignup ? "Sign up" : "Login"}
                    </Button>
                    <Button
                        sx={{ marginTop: 3, borderRadius: 3 }}
                        onClick={resetState}
                    >
                        Change To {isSignup ? "Login" : "Sign up"}
                    </Button>
                </Box>

            </form>
        </div>
    );
}

export default Log;