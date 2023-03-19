import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { getAllRpgs } from "../services/RpgService";

function Rpgs() {
    const [rpgs, setRpgs] = useState([])

    useEffect(() => {
        async function fetchRpgs() {
            const response = await getAllRpgs()
            if (response.status === 200) {
                const json = await response.json();
                setRpgs(json);
            }
        }
        fetchRpgs();
    }, []);

    const rpgCards = rpgs.map(rpg =>
        <Card
            key={rpg.rpg_id}
            title={rpg.title}
            tags={rpg.theme_list}
            description={rpg.description}
            image={rpg.image_url}
        ></Card>
    );

    return (
        <>
            <Navbar focusedLink={"rpg"}></Navbar>
            <div className="flex flex-col w-full items-center">
                <div className="flex flex-col md:w-2/3 max-w-4xl">
                    <div className="flex flex-col items-center gap-8 p-4 w-full">
                        {rpgCards}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rpgs;