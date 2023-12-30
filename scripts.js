document.addEventListener('DOMContentLoaded', async () => {
  const postsContainer = document.getElementById('posts-container');

  // Fetch posts from the server
  const response = await axios.get('/posts');
  const posts = response.data;

  // Display posts on the page
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
  });
});
