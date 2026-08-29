import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

type HeaderProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const navigation = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Capabilities", "#capabilities"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Yonathan Million, home">
        YM<span aria-hidden="true">.</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="icon-button"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button
          className="icon-button mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navigation.map(([label, href], index) => (
          <a href={href} key={href} onClick={() => setMenuOpen(false)}>
            <span>0{index + 1}</span>
            {label}
          </a>
        ))}
      </nav>
      <div className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
