import { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Job } from './models/JobModel';
import { getJobsService } from './services/getJobsService';
function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [jobs, setJobs] = useState<Job[]>([
    { company: '', dates: '', duties: [''], id: '', order: 0, title: '' },
  ]);
  const [value, setValue] = useState<number>(0);
  const { company, dates, duties, title } = jobs[value];

  useEffect(() => {
    setIsLoading(true);
    const fetchJobs = async (): Promise<void> => {
      try {
        const jobs = await getJobsService();
        setJobs(jobs);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className='section'>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className='title'>
            <h2>experience</h2>
            <div className='underline'></div>
          </div>

          <div className='jobs-center'>
            <div className='btn-container'>
              {jobs.map((job: Job, index: number) => {
                return (
                  <button
                    key={job.id}
                    onClick={() => setValue(index)}
                    className={`job-btn ${index === value && 'active-btn'}`}
                  >
                    {job.company}
                  </button>
                );
              })}
            </div>

            <article className='job-info'>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className='job-date'>{dates}</p>
              {duties.map((duty: string, index: number) => {
                return (
                  <div key={index} className='job-desc'>
                    <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                    <p>{duty}</p>
                  </div>
                );
              })}
            </article>
          </div>
        </>
      )}
    </section>
  );
}

export default App;
