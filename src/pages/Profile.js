import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";
import { getRpgsByUser } from "../services/RpgService";
import { useState, useEffect } from "react";
import { getEmail, getUser } from "../services/UserService";
import { checkAuth } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [rpgs, setRpgs] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUser() {
            const response = await getUser(getEmail());
            if (response.status === 200) {
                const json = await response.json();
                setUser(json);
            }
        }
        checkAuth(navigate);
        fetchUser();
    }, []);


    useEffect(() => {
        async function fetchRpgs() {
            const response = await getRpgsByUser(getEmail());
            checkAuth(navigate);
            if (response.status === 200) {
                const json = await response.json();
                setRpgs(json);
                console.log(rpgs)
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

    const userName = <h1 className="font-bold text-3xl p-2 md:text-5xl h-20 md:h-28">{user && user.fullname || "Nome completo"} ({user && user.username || "Username"})</h1>
    return (
        <>
            <Navbar focusedLink={"profile"}></Navbar>
            <div className="flex flex-col items-center w-full">
                <div className="w-full overflow-hidden h-28 sm:h-32 md:h-64 ">
                    <img className="w-screen" src="https://media.glamourmagazine.co.uk/photos/6138a4931145ea59e77e6e74/16:9/w_2560%2Cc_limit/worldshing-_sf.jpg" alt="Foto de capa" />
                </div>
                <div className="flex flex-col items-start w-full lg:w-2/3 max-w-4xl">
                    <div className="flex flex-row absolute top-24 sm:top-40 items-end px-4 gap-2">
                        <img className="bg-white border-white border-8 rounded-full h-40 w-40 md:h-72 md:w-72" src={user && user.profile_pic} alt="Foto de perfil" />
                        {userName} 
                    </div>
                </div>
                <div class="flex flex-col w-full md:w-2/3 mt-28 md:mt-36">
                    <h1 class="p-4 font-semibold text-2xl">Meus RPGs adicionados</h1>
                        <div class="flex flex-col">
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