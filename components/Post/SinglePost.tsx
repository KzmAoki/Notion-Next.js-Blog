import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  isPaginationPage: boolean;
}

export const SinglePost = (props: Props) => {
  const { title, description, date, tags, slug, isPaginationPage } = props;
  return (
    <h2>
      <Link href={`/posts/${slug}`}>
      {isPaginationPage ? (
        <section className="mb-8 mx-auto p-5 shadow-2x1 hover:shadow-none hover:translate-y-1 transition-all duration-300">
          <div className="flex flex-col gap-3">
            <h2 className="text-2x1 font-medium">{title}</h2>
            <div className="text-base">{date}</div>
            <div className="flex flex-row gap-3">
              {tags.map((tag: string, index: number) => (
                <span key={index} className="inline-block bg-gray-300 dark:bg-gray-500 rounded-xl px-2 pb-0125 font-medium text-base">{tag}</span>
              ))}
            </div>
          </div>
          <p className="text-base mt-3">{description}</p>
        </section>
      ) : (
        <section className="lg:w-1/2 mb-8 mx-auto p-5 shadow-2x1 hover:shadow-none hover:translate-y-1 transition-all duration-300">
          <div className="flex lg:flex-row flex-col lg:items-center gap-3">
            <h2 className="text-2x1 font-medium">{title}</h2>
            <div className="text-base">{date}</div>
            <div className="flex flex-row gap-3">
              {tags.map((tag: string, index: number) => (
                <span key={index} className="inline-block bg-gray-300 rounded-xl px-2 pb-0125 font-medium text-base">{tag}</span>
              ))}
            </div>
          </div>
          <p className="text-base mt-3">{description}</p>
        </section>
      )}
      </Link>
    </h2>
  );
}