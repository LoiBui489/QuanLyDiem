import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import cookie from "react-cookies";
// import { Navigate, useNavigate } from "react-router-dom";
// import { MyUserContext } from "../App";
import Api, { authApi, endpoints } from "../configs/Api";

const Login = () => {
    // const [user, dispatch] = useContext(MyUserContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    const login = (evt) => {
        evt.preventDefault();

        const process = async () => {
            try {
                let res = await Api.post(endpoints['login'], {
                    "username": username,
                    "password": password
                });
                cookie.save("token", res.data);
                
                let {data} = await authApi().get(endpoints['currentUser']);
                cookie.save("user", data);

                // dispatch({
                //     "type": "login",
                //     "payload": data
                // });
            } catch (err) {
                console.error(err);
            }
        }

        process();
    }

    // if (user !== null)
    //     return <Navigate to="/" />

    return <>
        <h1 className="text-center text-info">ĐĂNG NHẬP NGƯỜI DÙNG</h1>

        <Form onSubmit={login}>
            <Form.Group className="mt-3 mx-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tên đăng nhập</Form.Label>
                <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Tên đăng nhập" />
            </Form.Group>
            <Form.Group className="mt-3 mx-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Mật khẩu" />
            </Form.Group>
            <Form.Group className="mt-3 mx-3" controlId="exampleForm.ControlInput3">
                <Button variant="info" type="submit">Đăng nhập</Button>
            </Form.Group>
        </Form>
    </>
}

export default Login;