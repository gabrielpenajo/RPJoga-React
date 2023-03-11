import { Card } from "../components/Card";
import { useRef, useEffect } from 'react';


function Home() {
    return (
        <div>
            <Card
                title={"Oi"}
                content={<p>Olá</p>}
                image={"https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"}
                imageAlt={"Amogus"}
                details={
                    <div class="flex flex-row gap-2">
                        <label for="tags" class="font-semibold">Tags:</label>
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
                    <div class="flex flex-row gap-2">
                        <label for="tags" class="font-semibold">Tags:</label>
                        <ul>
                            <li>Terror</li>
                            <li>Suspense</li>
                            <li>Fred Desimpedidos</li>
                        </ul>
                    </div>
                }
            />
        </div>
    );
}

export default Home;