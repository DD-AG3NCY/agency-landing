import { useCallback } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const ThemeSwitcher = ({ className = "" }) => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <button
      onClick={toggleTheme}
      className={`${className} rounded-full p-2 border-2 border-pink`}
    >
      {resolvedTheme == "light" ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
