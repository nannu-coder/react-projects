import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [values, setValues] = useState(0);

  const url = "https://course-api.com/react-tabs-project";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section heading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[values];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={index}
                onClick={() => setValues(index)}
                className={`job-btn ${values === index && "active-btn"}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        {/* jobs info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
