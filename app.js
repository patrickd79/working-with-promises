const posts = [
  { title: "Post 1", body: "This is post 1." },
  { title: "Post 2", body: "This is post 2." }
];

/* function createPosts() {
    setTimeout(function(post) {
      posts.push(post);
    }, 2000);
  }
  
  function getPosts() {
    setTimeout(function() {
      let output = "";
      posts.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  createPosts({ title: "Post 3", body: "This is post 3." });
  
  getPosts(); */

//adding getPosts function as a callback to createPosts here allows it to asynchronously get the posts before creating them to make sure it is getting the most up to date data
function createPosts(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPosts({ title: "Post 3", body: "This is post 3." }).then(getPosts);
