import { FC, useState, useEffect } from 'react';
interface SelectedColorProps {
  rgb: number[];
  weight: number;
  index: number;
  hexColor: string;
}
const SelectedColors: FC<SelectedColorProps> = ({
  rgb,
  weight,
  index,
  hexColor,
}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hexColor}`;
  const clipClipboard = (): void => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={clipClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SelectedColors;
