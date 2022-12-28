import { useState, useEffect } from 'react';

const useTheme = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const changeMediaQuery = (mq: any): void => {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  };

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme:dark)');
    mq.addListener(changeMediaQuery);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }, []);

  return {
    darkMode,
    checked,
    setDarkMode,
    setChecked,
  };
};

export default useTheme;
