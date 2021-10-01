export default function Navbar() {
    return (
        <div className="flex justify-between items-center p-2 mx-4 border-b-2">
            <h1 className="text-2xl">Reminders</h1>
            <div>
                <button className="bg-gray-100 p-2 rounded-md">Sign Up/Login</button>
            </div>
        </div>
    )
}
