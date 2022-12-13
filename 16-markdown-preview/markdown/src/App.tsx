import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
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
