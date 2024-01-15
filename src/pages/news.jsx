import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function News() {
  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Dez 11, 2023',
      datetime: '2023-12-11',
    },
    {
      id: 2,
      title: 'Boost your conversion rate',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Dez 11, 2023',
      datetime: '2023-12-11',
    },
    {
      id: 3,
      title: 'Boost your conversion rate',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Dez 11, 2023',
      datetime: '2023-12-11',
    },
    {
      id: 4,
      title: 'Boost your conversion rate',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Dez 11, 2023',
      datetime: '2023-12-11',
    },
    {
      id: 5,
      title: 'Boost your conversion rate',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Dez 11, 2023',
      datetime: '2023-12-11',
    },
    {
      id: 6,
      title: 'Boost your conversion rate',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Dez 11, 2023',
      datetime: '2023-12-11',
    },
    {
      id: 7,
      title: 'Boost your conversion rate',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Dez 11, 2023',
      datetime: '2023-12-11',
    },
  ]

  return (
    <>
      <div className="relative flex content-center items-center justify-center pt-32 pb-0"
        style={{ height: "0vh", background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)" }}
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

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <a href={'/noticias/' + post.id}>
                  <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                    <img className="rounded-lg w-50 h-50 m-2" src="/img/teamwork.png" alt="Imagem" />
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

export default News;
