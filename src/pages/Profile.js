import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";
import { getRpgsByUser } from "../services/RpgService";
import { useState, useEffect } from "react";
import { getUser } from "../services/UserService";

function Profile() {
    const [rpgs, setRpgs] = useState([]);
    const [user, setUser] = useState();

    useEffect(() => {
        async function fetchUser() {
            const response = await getUser('dani@email.com');
            if (response.status === 200) {
                const json = await response.json();
                setUser(json);
                console.log(user);
            }
        }
        fetchUser();
    });



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
            <Navbar focusedLink={"profile"}></Navbar>
            <div className="flex flex-col items-center w-full">
                <div className="w-full overflow-hidden h-28 sm:h-32 md:h-64 ">
                    <img className="w-screen" src="https://media.glamourmagazine.co.uk/photos/6138a4931145ea59e77e6e74/16:9/w_2560%2Cc_limit/worldshing-_sf.jpg" alt="Foto de capa" />
                </div>
                <div className="flex flex-col items-start w-full lg:w-2/3 max-w-4xl">
                    <div className="flex flex-row absolute top-24 sm:top-40 items-end px-4 gap-2">
                        <img className="bg-white border-white border-8 rounded-full h-40 w-40 md:h-72 md:w-72" src="https://assets.b9.com.br/wp-content/uploads/2011/10/gato.jpg" alt="Foto de perfil" />
                        <h1 className="font-bold text-xl md:text-5xl h-20 md:h-28">{user.fullname} ({user.username})</h1>
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