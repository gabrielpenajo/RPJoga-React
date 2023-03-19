import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { loginUser } from "../services/AuthService";
import { Navigate } from "react-router-dom";

const ColoredLine = ({ color }) => (
    <hr size="5" width="20%" color={color} />
);

function Login({ token, setToken }) {
    const [email, setEmail] = useState('')
    const [isEmailFilled, setIsEmailFilled] = useState(false)
    const [password, setPassword] = useState('')
    const [isPasswordFilled, setIsPasswordFilled] = useState(false)

    const [isLoginInvalid, setIsLoginInvalid] = useState(false)
    const handleEmail = (e) => {
        const emailInput = e.target.value
        setEmail(emailInput)
        setIsEmailFilled(emailInput.length > 0 && emailInput.search(/@/g) !== -1)
    }

    const handlePassword = (e) => {
        const passwordInput = e.target.value
        setPassword(passwordInput)
        setIsPasswordFilled(passwordInput.length > 0)
    }

    const isValid = () => {
        return (isEmailFilled && isPasswordFilled)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = await loginUser({
                email,
                password
            })
            if (await token !== 'Authorized') {
                setIsLoginInvalid(true)
                return
            }
            setToken(token)
        } catch (e) {
            setIsLoginInvalid(true)
        }    
    }

    return (
        <div className="bg-main min-h-screen overflow-auto">
            {token === 'Authorized' && (
                <Navigate to="/rpgs" replace={true} />
            )}
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/Castle-cuate.svg`}
                className="absolute bg-no-repeat h-full opacity-10 bottom-0 right-0 pointer-events-none -z-1"
                alt="Imagem de fundo"
            />
            <div className="flex flex-col p-4">
                <div className="h-12 w-full flex flex-row gap-2">
                    <a href="/"
                        className="outline outline-2 bg-transparent ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary">Voltar</a>
                </div>
            </div>
            <div className="flex flex-row justify-center min-h-1/2">
                <div className="basis-1/2">
                    <div className="flex min-h-full items-center justify-center">
                        <div className="w-full max-w-md space-y-8">
                            <div className="flex flex-row justify-center m-2 p-2">
                                <span className="sr-only">RPJoga</span>
                                <h2 className="font-semibold text-white text-6xl">RPJoga</h2>
                            </div>
                            <form className="mt-8 space-y-6" onSubmit={handleSubmit} action="/rpgs">
                                <div className="space-y-px rounded-md shadow-sm">
                                    { isLoginInvalid &&
                                        <p className="w-full justify-center bg-red-700 text-white rounded-lg h-8 items-center flex mb-8">E-mail ou senha inválidos</p>
                                    }
                                    <div className="mb-6">
                                        <Input id="email" value={email} label="Email" type="email" size="full" onChange={handleEmail}/>
                                    </div>
                                    <div className="mb-4">
                                        <Input id="senha" value={password} label="Senha" type="password" size="full" onChange={handlePassword}/>
                                    </div>
                                </div>
                                <div>      
                                    <Button label={"Fazer login"} color="success" action="none" type={"submit"} isValid={isValid()}/> 
                                </div>
                            </form>
                            <div className="flex flex-col items-center justify-center">
                                <ColoredLine color="white" />
                                <span className="text-white m-3">Ainda não tem uma conta?</span>
                                <form className="w-full" action="/signUp">
                                    <Button label={"Cadastre-se"} color="secondary" action="none"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;