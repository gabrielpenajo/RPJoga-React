import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";
import { getRpgsByUser } from "../services/RpgService";
import { useState, useEffect } from "react";

function Profile() {
    const [rpgs, setRpgs] = useState([])

    useEffect(() => {
        async function fetchRpgs() {
            const response = await getRpgsByUser()
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
            <Navbar></Navbar>
            <div class="flex flex-col items-center w-full">
                <div class="w-full overflow-hidden h-28 sm:h-32 md:h-64 ">
                    <img class="w-screen" src="https://media.glamourmagazine.co.uk/photos/6138a4931145ea59e77e6e74/16:9/w_2560%2Cc_limit/worldshing-_sf.jpg" alt="Foto de capa" />
                </div>
                <div class="flex flex-col items-start w-full lg:w-2/3 max-w-4xl">
                    <div class="flex flex-row absolute top-24 sm:top-40 items-end px-4 gap-2">
                        <img class="bg-white border-white border-8 rounded-full h-40 w-40 md:h-72 md:w-72" src="https://assets.b9.com.br/wp-content/uploads/2011/10/gato.jpg" alt="Foto de perfil" />
                        <h1 class="font-bold text-xl md:text-5xl h-20 md:h-28">Alligator Gecko</h1>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center">
                <div className="flex flex-col md:w-2/3 max-w-4xl">
                    <div className="flex flex-col items-center gap-8 p-4 w-full">
                        {rpgCards}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}


export default Profile;