import Card from "./Card";

export default function AvailablePlayers({players, setSelectedPlayers, selectedPlayers}) {

    return (
        <>
            <h1>Available Players</h1>
            {players.map((player, idx) => (
                <Card key={idx} player = {player} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}/>
            ))}
        </>
    );
}