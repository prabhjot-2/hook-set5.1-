import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormPosts = () => {
  const [posts, setPosts] = useState([]); // To store the fetched posts
  const [userId, setUserId] = useState(''); // To store the user input for User ID
  const [postId, setPostId] = useState(''); // To store the user input for Post ID
  const [filteredPosts, setFilteredPosts] = useState([]); // To store the filtered posts based on User ID and Post ID

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data); // Store the response data in state
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handleSearch = () => {
    // Filter posts based on the entered User ID and Post ID
    const filtered = posts.filter((post) => {
      const matchesUserId = userId ? post.userId === parseInt(userId) : true;
      const matchesPostId = postId ? post.id === parseInt(postId) : true;
      return matchesUserId && matchesPostId;
    });
    setFilteredPosts(filtered);
  };

  // Generate ID ranges for each user
  const idRanges = () => {
    const ranges = {};
    posts.forEach((post) => {
      if (!ranges[post.userId]) {
        ranges[post.userId] = { start: post.id, end: post.id };
      } else {
        ranges[post.userId].end = post.id;
      }
    });
    return ranges;
  };

  const ranges = idRanges();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Search Posts by User ID and Post ID</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="number"
          placeholder="Enter Post ID"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={handleSearch} style={{ padding: '5px 10px' }}>
          Search
        </button>
      </div>

      <h2>User ID Post ID Ranges</h2>
      <ul>
        {Object.entries(ranges).map(([user, range]) => (
          <li key={user}>
            <strong>User ID:</strong> {user}, <strong>Post ID Range:</strong>{' '}
            {range.start} - {range.end}
          </li>
        ))}
      </ul>

      {filteredPosts.length > 0 ? (
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id} style={{ marginBottom: '10px' }}>
              <strong>User ID:</strong> {post.userId} <br />
              <strong>Post ID:</strong> {post.id} <br />
              <strong>Title:</strong> {post.title}
            </li>
          ))}
        </ul>
      ) : userId || postId ? (
        <p>No posts found for the given criteria.</p>
      ) : (
        <p>Please enter criteria to see posts.</p>
      )}
    </div>
  );
};

export default FormPosts;
