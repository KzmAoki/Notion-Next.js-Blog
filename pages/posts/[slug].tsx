import { GetStaticProps } from "next";
import { getAllPosts, getSinglePost } from "@/lib/notionAPI";
import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
}

type SinglePost = {
  metadata: {
    id: string;
    title: string;
    description: string;
    date: string;
    slug: string;
    tags: string[];
  },
  markdown: string;
}

type SinglePostProps = { // 分割代入したPropsに対してはPropsのプロパティに対して型定義を行う
  post: SinglePost;
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts();
  const paths = allPosts
  .filter((post): post is Post => post !== undefined) // undefinedの排除
  .map(({ slug }) => ({ params: { slug } })); // ()で囲まれた式が戻る
  
  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug ?? '';  // nullableな値にするため?を付加
  const post = await getSinglePost(Array.isArray(slug) ? slug[0] : slug); // 文字配列かどうかで分岐

  return {
    props: {
      post,
    },
    revalidate: 60, // ISR (Incremental Static Regeneration)
  };
};

const Post = ({post}: SinglePostProps) => {
  return (
    <section className="container lg:px-2 px-5 lg:w-2/5 mx-auto mt-20">
      <h2 className="w-full text-2xl font-medium">{post.metadata.title}</h2>
      <div className="border-b-2 w-1/3 mt-1"></div>
      <span className="text-gray-400">{post.metadata.date}</span>
      <br/>
      {post.metadata.tags.map((tag: string, index: number) => (
        <p className="bg-gray-300 rounded-xl font-medium mt-2 px-2 inline-block mr-2" key="index">
          <Link href={`/posts/tag/${tag}/page/1`}>{tag}</Link>
        </p>
      ))}
      <div className="mt-10 font-medium">
        <ReactMarkdown
          components={{
            code({node, inline, className, children, style, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {post.markdown}
        </ReactMarkdown>
        <Link href="/">
          <span className="pb-20 block mt-3">{"<"}--HOME</span>
        </Link>
      </div>
    </section>
  );
}

export default Post; // default設定しないとエラー