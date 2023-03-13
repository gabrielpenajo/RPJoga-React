import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const ColoredLine = ({ color }) => (
    <hr size="5" width="20%" color={color} />
);

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="bg-main min-h-screen overflow-auto">
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
                            <form className="mt-8 space-y-6" action="/rpgs">
                                <div className="space-y-px rounded-md shadow-sm">
                                    <div className="mb-6">
                                        <Input id="email" value={email} label="Email" type="email" size="full" onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-4">
                                        <Input id="senha" value={password} label="Senha" type="password" size="full" onChange={e => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div>      
                                    <Button label={"Fazer login"} color="success" action="none" type={"submit"} /> 
                                </div>
                            </form>
                            <div className="flex flex-col items-center justify-center">
                                <ColoredLine color="white" />
                                <span className="text-white m-3">Ainda não tem uma conta?</span>
                                <form className="w-full" action="/signUp">
                                    <Button label={"Cadastre-se"} color="secondary" action="none" />
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