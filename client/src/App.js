import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className="container">
      <h1>Create posts</h1>
      <PostCreate />
      <hr />
      <h1>Post Lists</h1>
      <PostList />
    </div>
  );
}

export default App;
