export async function onCreatePost(event) {}




document.getElementById('createPostForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.target;
  
    const tagsInput = form.tags.value.trim();
    // Check if tags are separated by commas
    if (!tagsInput.includes(',')) {
      alert('Please separate tags with commas.');
      return; // Stop submission if the format is incorrect
    }
  
    const postData = {
      title: form.title.value,
      body: form.body.value,
      tags: tagsInput.split(',').map(tag => tag.trim()),
      media: {
        url: form.image.value,
        alt: 'Post Image',
      },
    };
  
    // Call your createPost function to handle the API request
    try {
      await createPost(postData);
      alert('Post created successfully!');
      window.location.href = '/';
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post.');
    }
  });
  