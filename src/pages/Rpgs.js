import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";

function Rpgs() {
    return (
        <>
            <Navbar focusedLink={"rpg"}></Navbar>
            <Card
                title={"Oi"}
                content={<p>Olá</p>}
                image={"https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"}
                imageAlt={"Amogus"}
                details={
                    <div className="flex flex-row gap-2">
                        <label for="tags" className="font-semibold">Tags:</label>
                        <ul>
                            <li>Terror</li>
                            <li>Suspense</li>
                            <li>Fred Desimpedidos</li>
                        </ul>
                    </div>
                }
            />
            <Card
                title={"Oi"}
                content={<p>Olá</p>}
                image={"https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"}
                imageAlt={"Amogus"}
                details={
                    <div className="flex flex-row gap-2">
                        <label for="tags" className="font-semibold">Tags:</label>
                        <ul>
                            <li>Terror</li>
                            <li>Suspense</li>
                            <li>Fred Desimpedidos</li>
                        </ul>
                    </div>
                }
            />
        </>
    );
}

export default Rpgs;