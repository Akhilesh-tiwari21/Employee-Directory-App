import { Routes, Route } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import EmployeeDetails from "./pages/EmployeeDetails";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./hooks/theme";

function App() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className={darkMode ? "min-h-screen bg-gray-800" : "min-h-screen bg-white" }>
      <div
      className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 px-4"
      >
        <h1 className={`text-3xl font-bold ${ darkMode ? "text-white" : "text-black"}`}>
          Employee Directory
        </h1>

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <Routes>
        <Route path="/" element={<EmployeeList darkMode={darkMode} setDarkMode={setDarkMode}/>} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
      </Routes>

    </div>
  );
}

export default App;