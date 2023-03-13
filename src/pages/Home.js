import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";

function Home() {
    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className="basis-1/2 flex flex-col p-4 gap-8">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-1">
                            <span className="sr-only w-8 aspect-square ">RPJoga</span>
                            <img className="h-10" src={`${process.env.PUBLIC_URL}/logo.png`} alt="RPJoga"/>
                            <h2 className="font-semibold text-main text-3xl">RPJoga</h2>
                        </div>
                        <div className="h-12 w-full flex flex-row-reverse gap-2 items-center md:hidden">
                            <a href="/signup"
                                className="outline outline-2 bg-transparent ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-main shadow-sm hover:bg-secondary">Cadastrar</a>
                            <a href="/login"
                                className="whitespace-nowrap text-base font-medium text-main hover:text-secondary">Login</a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 flex-wrap md:flex-col flex-grow font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-neutral">
                        <span>ENCONTRE</span>
                        <span>MESAS</span>
                        <span>DE</span>
                        <span className="text-main">RPG</span>
                        <span>EM</span>
                        <span>QUALQUER</span>
                        <span>LUGAR!</span>
                    </div>
                </div>
                <div className="basis-1/2 bg-main pt-2 pr-4 flex flex-col">
                    <div className="h-12 w-full md:flex flex-row-reverse gap-2 items-center hidden">
                        <a href="/signup"
                            className="outline outline-2 bg-transparent ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary">Cadastrar</a>
                        <a href="/login"
                            className="whitespace-nowrap text-base font-medium text-white hover:text-secondary">Login</a>
                    </div>
                    <div>
                        <img className="flex-shrink" src={`${process.env.PUBLIC_URL}/assets/images/Group Chat-bro.svg`} alt="Group Chat illustration"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;