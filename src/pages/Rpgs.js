import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { getAllRpgs } from "../services/RpgService";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../services/AuthService";

function Rpgs() {
    const navigate = useNavigate()

    const [rpgs, setRpgs] = useState([])

    useEffect(() => {
        async function fetchRpgs() {
            const response = await getAllRpgs()
            if (response.status === 200) {
                const json = await response.json();
                setRpgs(json);
            }
        }
        checkAuth(navigate);   
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
            <Navbar focusedLink={"rpgs"}></Navbar>
            <div className="flex flex-col w-full items-center">
                <div className="flex flex-col md:w-2/3 w-full">
                    <div className="flex flex-col items-center gap-8 p-4 w-full">
                        {rpgCards}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rpgs;