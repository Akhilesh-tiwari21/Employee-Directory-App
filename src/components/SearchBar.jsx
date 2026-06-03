function SearchBar({ value, onChange }) {
    return (
    <input
    type="text"
    placeholder="Search employee..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full max-w-md p-3 rounded-xl borderborder-gray-300 bg-gray-200 outline-none"
    />
);
}

export default SearchBar;