export async function onCreatePost(event) {}




document.getElementById('createPostForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.target;
  
    const tagsInput = form.tags.value.trim();
    
    if (tagsInput.length === 0) {
      alert('Please enter at least one tag.');
      return; 
    }
  
    const tagsArray = tagsInput.split(',').map(tag => tag.trim());
    
    if (tagsArray.length === 1 && tagsArray[0] === '') {
      alert('Please enter a valid tag.');
      return; 
    }
  
    const postData = {
      title: form.title.value,
      body: form.body.value,
      tags: tagsArray,
      media: {
        url: form.image.value,
        alt: 'Post Image',
      },
    };
  
    try {
      await createPost(postData);
      alert('Post created successfully!');
      window.location.href = '/';
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post.');
    }
  });
  
  