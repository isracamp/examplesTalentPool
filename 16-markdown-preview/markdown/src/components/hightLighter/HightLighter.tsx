import { FC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
interface HightLighterProps {
  value: string;
  language: string;
}
const HightLighter: FC<HightLighterProps> = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={docco}>
      {value}
    </SyntaxHighlighter>
  );
};

export default HightLighter;
