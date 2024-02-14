import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import axios from "axios";

import { Footer } from "@/widgets/layout";

export function News() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("http://54.236.218.55:4000/posts/9");
        setPosts(response.data);
      } catch (error) {
        // console.error("Failed to fetch posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <div className="relative flex content-center items-center justify-center pt-32 pb-0"
        style={{ height: "0vh", background: "#11114e"}}
      />

      <section className="bg-white px-4 pt-12 pb-12">
        <div className="container mx-auto">
          <Typography
            variant="h3"
            className="mb-3 font-bold"
            color="blue-gray"
          >
            NOTÍCIAS
            <hr className="w-16 border-2 border-blue-500 mb-4" />
          </Typography>

          {posts && posts.length > 0 ? (
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                  <a href={'/noticias/' + post._id}>
                    <article key={post._id} className="flex max-w-xl flex-col items-start justify-between">
                      <img className="rounded-lg w-50 h-50 m-2" src={post.imgUrl} alt="Imagem" />
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-500">
                          {post.date}
                        </time>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600" style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
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
          ) : (
            <div className="flex justify-center items-center mx-auto max-w-7xl px-6 lg:px-8 mb-40">
              <div className="flex flex-col items-center">
                <img
                  alt="Card Image"
                  src="/img/news-not-found.jpg"
                  className="h-40 w-40 justify-center items-center"
                />

                <Typography
                  variant="h4"
                  className="mt-3 font-bold text-center"
                  color="blue-gray"
                >
                  Ainda não existem registros!
                </Typography>
              </div>
            </div>
          )}
        </div>
      </section>


      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default News;
