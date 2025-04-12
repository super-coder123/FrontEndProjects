import './Styles.css'
function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className={`hover:border-none ${darkMode?"button2":"button1"}`}
      onClick={() => setDarkMode(prev => !prev)}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
