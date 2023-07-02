import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "./firebase";

export const Feed = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [postList, setPostList] = useState([]);
  const [user, setUser] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const postDB = collection(db, "BlogCom-backend-new");

  const createPost = async () => {
    if (!post.trim()) {
      alert("Post content cannot be empty");
      return;
    }

    const newPost = {
      title,
      post,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
      like: 0,
      date: new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      comment: [],
      showComments: false,
      commentCount: 0,
      profilePic : user.photoURL,
    };
    await addDoc(postDB, newPost);
    setPostList((prevPostList) => [newPost, ...prevPostList]); // Add new post at the beginning of the list
    setTitle("");
    setPost("");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(postDB);
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      setPostList(posts);
    };
    fetchPosts();
  }, []);

  const updateLike = async (postId) => {
    const postRef = doc(db, "BlogCom-backend-new", postId);
    const postSnapshot = await getDoc(postRef);

    if (postSnapshot.exists()) {
      const postData = postSnapshot.data();
      const updatedLikeCount = postData.like + 1;

      await updateDoc(postRef, { like: updatedLikeCount });

      // Update the like count in the local post list
      setPostList((prevPostList) =>
        prevPostList.map((post) =>
          post.id === postId ? { ...post, like: updatedLikeCount } : post
        )
      );
    }
  };

  const handleLike = (postId) => {
    if (!likedPosts.includes(postId)) {
      updateLike(postId);
      setLikedPosts((prevLikedPosts) => [...prevLikedPosts, postId]);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const addComment = async (postId) => {
    const postRef = doc(db, "BlogCom-backend-new", postId);
    const postSnapshot = await getDoc(postRef);

    if (postSnapshot.exists()) {
      const postData = postSnapshot.data(); // Retrieve post data

      const newComment = {
        content: commentInput,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
        date: new Date().toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      };

      await updateDoc(postRef, {
        comment: [...postData.comment, newComment],
        commentCount: postData.commentCount + 1,
      });

      setPostList((prevPostList) =>
        prevPostList.map((post) =>
          post.id === postId
            ? {
                ...post,
                comment: [...post.comment, newComment],
                commentCount: post.commentCount + 1,
              } // Update commentCount in local state
            : post
        )
      );
      setCommentInput("");
    }
  };

  const deletePost = async (postId) => {
    const postRef = doc(db, "BlogCom-backend-new", postId);
    await deleteDoc(postRef);

    // Remove the deleted post from the local post list
    setPostList((prevPostList) =>
      prevPostList.filter((post) => post.id !== postId)
    );
  };

  const toggleComments = (postId) => {
    setPostList((prevPostList) =>
      prevPostList.map((post) =>
        post.id === postId
          ? { ...post, showComments: !post.showComments }
          : post
      )
    );
  };

  return (
    <>
      <div className="flex flex-col h-screen mx-auto max-w-2xl p-4">
        <div className="flex flex-col bg-white bg-opacity-25 rounded p-4 backdrop-filter backdrop-blur-lg shadow-lg">
          <input
            className="bg-indigo-100 border border-indigo-200 rounded p-2 mb-2 backdrop-filter backdrop-blur-sm"
            placeholder="Add Your title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="bg-indigo-100 border border-indigo-200 rounded p-2 mb-2 h-24 backdrop-filter backdrop-blur-sm"
            placeholder="Enter your post here"
            rows="4"
            cols="50"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />

          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded"
            onClick={createPost}
          >
            Add Post
          </button>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Recent Posts:</h2>
          {postList.map((post) => (
            <div
              key={post.id}
              className="bg-white bg-opacity-25 rounded p-4 mb-4 backdrop-filter backdrop-blur-lg shadow-lg"
            >
              <div className="flex items-center mb-2">
                <img
                  className="w-8 h-8 rounded-full mr-2 shadow-lg"
                  src={post.profilePic}
                  alt="Profile"
                />
                <div className="flex items-left flex-col">
                  <strong className="text-sm text-black-500">
                    {post.author.name}
                  </strong>
                  <span className="text-sm text-gray-500">
                    Posted on: {post.date}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Title : {post.title}</h3>
              <p className="bg-indigo-50 p-5 border-2 border-solid border-indigo-200 rounded">
                {post.post}
              </p>
              <div>
                <div>{`Like : ${post.like}`}</div>
                <button
                  className={`bg-indigo-500 text-white py-1 px-2 mt-3 rounded ${
                    likedPosts.includes(post.id)
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                  onClick={() => handleLike(post.id)}
                  disabled={likedPosts.includes(post.id)}
                >
                  {likedPosts.includes(post.id) ? "Liked" : "Like"}
                </button>
                {user.uid === post.author.id && (
                    <button
                      className="ml-2 bg-red-500 text-white py-1 px-2 mt-3 rounded"
                      onClick={() => deletePost(post.id)}
                    >
                      Delete Post 
                    </button>
                  )}
              </div>
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <h4 className="text-lg font-bold">{`Comments(${post.commentCount}):`}</h4>
                
                  <button
                    className="ml-2 text-sm text-indigo-500"
                    onClick={() => toggleComments(post.id)}
                  >
                    {post.showComments ? "Hide" : "Show"}
                  </button>
                </div>
                {post.showComments && (
                  <div className="mt-2">
                    {post.comment.map((comment, index) => (
                      <div
                        key={index}
                        className="bg-indigo-50 p-2 border-2 border-solid border-indigo-200 rounded"
                      >
                        <p className="text-sm font-bold mb-1">
                          {comment.author.name}
                        </p>
                        <p className="text-sm mb-1">{comment.content}</p>
                        <p className="text-xs text-gray-500">{comment.date}</p>
                      </div>
                    ))}
                    <div className="mt-2">
                      <input
                        className="bg-indigo-100 border border-indigo-200 rounded p-2 w-full backdrop-filter backdrop-blur-sm"
                        placeholder="Add a comment"
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                      />
                      <button
                        className="bg-indigo-500 text-white py-1 px-2 mt-2 rounded"
                        onClick={() => addComment(post.id)}
                      >
                        Add Comment
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feed;
