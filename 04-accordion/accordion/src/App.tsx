import Questions from './components/questions/Questions';
import { getQuestionService } from './services/getQuestionsService';

function App() {
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'></section>
        {getQuestionService().map((question) => (
          <Questions
            key={question.id}
            title={question.title}
            info={question.info}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
