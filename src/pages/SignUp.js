import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";

function SignUp() {
    const [birthdate, setBirthdate] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handlePasswordConfirm = (e) => {
        const passwordValue = e.target.value

        setPasswordConfirm(passwordValue)
        
        if (passwordValue != password) {
            console.log('error')
        } 
    }

    return (
    <>
        <div className="bg-main min-h-screen overflow-auto">
             <div className="flex flex-col p-4">
                <div className="h-12 w-full flex flex-row">
                    <a href="/"
                        className="outline outline-2 bg-transparent ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary">Voltar</a>
                </div>
            </div>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/Castle-cuate.svg`}
                className="absolute bg-no-repeat h-full opacity-10 bottom-0 right-0 pointer-events-none -z-1"
                alt="Imagem de fundo"
            />
            <div className="flex flex-col items-center mb-6 mt-6">
                <h2 className="font-semibold text-white text-6xl">Cadastro</h2>
            </div>
            <div className="w-screen flex flex-row justify-center">
                <form className="flex flex-col items-center md:w-2/3" action="/">
                        <div className="w-full flex flex-col justify-center items-center md:flex-row">
                            <div className="w-full flex flex-col p-2 md:basis-1/2">
                                <div className="mb-4">
                                    <Input id="fullname" value={fullname} label="Nome Completo" type="text" size="full" onChange={e => setFullname(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <Input id="password" value={password} label="Senha" type="password" size="full" onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="md:mb-4">
                                <Input id="birthDay" value={birthdate} label="Data de Nascimento" type="date" size="full" onChange={e => setBirthdate(e.target.value)} />
                                </div>
                            </div>
                            <div className="w-full flex flex-col p-2 md:basis-1/2">
                                <div className="mb-4">
                                <Input id="email" value={email} label="Email" type="text" size="full" onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                <Input id="confirmPassword" value={passwordConfirm} label="Confirmar senha" type="password" size="full" onChange={handlePasswordConfirm} />
                                </div>
                                <div className="mb-4">
                                <Input id="username" value={username} label="Nome de usuário" type="text" size="full" onChange={e => setUsername(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center mb-4 md:w-1/3">
                            <Button label={"Confirmar Cadastro"} color="success" action="none" type={'submit'}/>
                        </div>
                </form>
            </div>
        </div>
    </>
    );
}

export default SignUp;