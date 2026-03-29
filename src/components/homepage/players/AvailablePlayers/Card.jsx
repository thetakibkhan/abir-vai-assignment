import { useEffect } from "react";

export default function Card({player, setSelectedPlayers, selectedPlayers}){
    
    useEffect(()=>{
        console.log(selectedPlayers)
    }, [selectedPlayers])
    return (<>
        {
            
            <div className="border m-2" key={player.id}>
                <h2>{player.playerName}</h2>
                <h3>{player.playerCountry} </h3>
                <h3>{player.rating}</h3>
                <h3>{player.battingStyle}</h3>
                <h3>{player.price}</h3>
                <button className="btn" onClick={()=>{
                  setSelectedPlayers([...selectedPlayers, player]);  
                  
                }}>
                    Add

                </button> 
            </div>

        }
    </>);
}