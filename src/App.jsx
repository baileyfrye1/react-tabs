import { useState, useEffect } from 'react';

import JobInfo from './components/JobInfo';
import BtnContainer from './components/BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <main>
      <section className='jobs-center'>
        <BtnContainer
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <JobInfo currentItem={currentItem} jobs={jobs} />
      </section>
    </main>
  );
};
export default App;
