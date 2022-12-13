import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import HightLighter from './components/hightLighter/HightLighter';

function App() {
  const [markdown, setMarkdown] = useState<string>('');
  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <article className='result'>
          <ReactMarkdown children={markdown} />
        </article>
      </section>
    </main>
  );
}

export default App;
