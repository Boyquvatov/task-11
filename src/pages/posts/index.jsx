import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [number, setNumber] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setNumber(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
      .then((response) => {
        setPosts(response.data);
      });
  }, [page, limit]);

  const changePage = (type) => {
    if (type === 'prev') {
      setPage((prev) => Math.max(prev - 1, 1));
    } else {
      setPage((prev) => Math.min(prev + 1, Math.ceil(number.length / limit)));
    }
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
    setPage(1);
  };

  return (
    <div className='users'>
      <h1 className='text-center my-3'>Posts</h1>
      <div className='row'>
        <div className='col-md-4'>
          <section>
            <label htmlFor="limitSelect">Limit:</label>
            <select id="limitSelect" className="form-select" onChange={handleLimitChange} value={limit}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </section>
        </div>
      </div>
      <table className='table table-bordered table-hover table-striped'>
        <thead>
          <tr>
            <th>T/r</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <button className='btn btn-primary' onClick={() => changePage('prev')}>
          Prev
        </button>
        <h3 className='fs-4'>{page}</h3>
        <button className='btn btn-primary' onClick={() => changePage('next')}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Index;
