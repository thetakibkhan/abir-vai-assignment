export default function Navbar() {

    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <img src="../src/assets/logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        Coins
                    </button>
                </div>
            </div>
        </>
    )
}