
function ThemeToggle({ darkMode, setDarkMode }) {
    return (
    <button onClick={() => setDarkMode(!darkMode)}
    className={`px-4 py-2 rounded-lg font-medium border transition-all mt-3
        ${darkMode ? "bg-white text-black border-white" : "bg-black text-white border-black"}`}
    >
    {
        darkMode ? "☀ Light Mode" : "🌙 Dark Mode"
    }
    </button>
    );
}

export default ThemeToggle;