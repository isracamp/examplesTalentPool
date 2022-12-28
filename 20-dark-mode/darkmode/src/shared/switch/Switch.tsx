import { useRef, FC } from 'react';

interface SwitchThemeProps {
  checked: boolean;
  setDarkMode: (checked: any) => void;
  setChecked: (checked: any) => void;
}
const SwitchTheme: FC<SwitchThemeProps> = ({
  checked,
  setDarkMode,
  setChecked,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleChange = () => {
    setChecked(ref?.current?.checked);
    setDarkMode(ref?.current?.checked);
  };

  return (
    <div className='dark-mode'>
      <input
        ref={ref}
        onChange={handleChange}
        type='checkbox'
        checked={checked}
        className='checkbox'
        id='checkbox'
      />
      <label className='switch' htmlFor='checkbox'></label>
    </div>
  );
};

export default SwitchTheme;
