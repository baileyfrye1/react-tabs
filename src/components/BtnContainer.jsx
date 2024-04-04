const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <article className='btn-container'>
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            type='button'
            className={`job-btn ${currentItem === index && 'active-btn'}`}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </article>
  );
};
export default BtnContainer;
