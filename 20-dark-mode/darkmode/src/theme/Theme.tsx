import { ReactNode, FC } from 'react';
import useTheme from '../hooks/useTheme';
import SwitchTheme from '../shared/switch/Switch';

interface ThemeProps {
  children: ReactNode | ReactNode[];
}
const Theme: FC<ThemeProps> = ({ children }) => {
  const { checked, darkMode, setChecked, setDarkMode } = useTheme();
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';
  return (
    <main className={mainClass}>
      <SwitchTheme
        setDarkMode={setDarkMode}
        checked={checked}
        setChecked={setChecked}
      />

      {children}
    </main>
  );
};

export default Theme;
