const http = new easyHTTP();

//Get Posts
/* http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
}); */

//Create data
const data = {
  title: "Custom Post",
  body: "This is a custom post"
};

//Create Post
/* http.post("https://jsonplaceholder.typicode.com/posts", data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
}); */

//Update post
//num variable is example, any number could be here and it will feed to the url to target any post we need
/* let num = 6;
http.put(`https://jsonplaceholder.typicode.com/posts/${num}`, data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
}); */

//delete post
//num variable is example, any number could be here and it will feed to the url to target any post we need
let num = 90;
http.delete(`https://jsonplaceholder.typicode.com/posts/${num}`, function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
