import { useState, use } from "react"
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

export default function Players({playersPromise}) {
    const [selectedType, setSelectedType] = useState('selected');
    const players = use(playersPromise);
   const [selectedPlayers, setSelectedPlayers] = useState([]);
    return (
        <>
            <div className="container mx-auto my-[60px] ">
                <div className="flex justify-between gap-4 items-center">
                    <div >
                    {selectedType === 'available' ? (
                        <h2>Available Players</h2>
                    ):(
                        <h2>Selected Players</h2>
                    )}
                    </div>
                    <div>
                        <button className={`btn ${selectedType==='available'?"bg-yellow-400" : ""}`} onClick={()=>{
                            setSelectedType('available');

                        }}>

                            Available 
                        </button>
                        <button className={`btn ${selectedType==='selected'?"bg-yellow-400" : ""}`} onClick={()=>{
                        setSelectedType('selected') 
                        }}>
                            Selected
                        </button>
                    </div>
                </div>
                <div>
                    {selectedType==='available' ? (<AvailablePlayers players={players} setSelectedPlayers
                    ={setSelectedPlayers} selectedPlayers={selectedPlayers}/>):(<SelectedPlayers setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}/>) }
                </div>
            </div>
           
        </>
    )
}


