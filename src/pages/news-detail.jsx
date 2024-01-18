import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function NewsDetail() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const postResponse = await axios.get(`http://localhost:3000/posts/${id}`);
        setPost(postResponse.data[0]);

        const postsResponse = await axios.get(`http://localhost:3000/posts/3`);
        setPosts(postsResponse.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }

    fetchPosts();
  }, []);

  if (post === 0) {
    return (
      <div />
    )
  }

  return (
    <>
      <div
        className="relative flex content-center items-center justify-center pt-32 pb-0"
        style={{ height: "0vh", background: "#11114e"}}
      />

      <section className="bg-white px-4 pt-12 pb-12">
        <div className="container mx-auto">
          <Typography
            variant="h3"
            className="mb-8 font-bold text-center"
            color="blue-gray"
          >
            {post?.title}
          </Typography>

          <div className="mx-auto mt-32 flex flex-col w-full px-4 md:w-6/12 lg:mt-0">
            <img className="rounded-lg w-full h-full" src={post?.imgUrl} alt="post-image" />
            <time dateTime={post?.datetime} className="text-gray-500 text-right">
              {post?.date}
            </time>
          </div>

          <div className="mt-12 flex flex-wrap items-center">
            <div dangerouslySetInnerHTML={{ __html: post?.description }} />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pt-10 pb-12">
        <div className="container mx-auto">
          <hr className="my-6 border-white-500" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <a href={post._id}>
                  <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                    <img className="rounded-lg w-50 h-50 m-2" src={post.imgUrl} alt="post-image" />
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <span className="absolute inset-0" />
                        {post.title}
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default NewsDetail;