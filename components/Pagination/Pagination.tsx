import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getPageLink } from "@/lib/blog-helper";

interface Props {
  numberOfPage: number;
  tag: string;
}

const Pagination = (props: Props) => {
  const { numberOfPage, tag } = props;

  let pages: number[] = [];
  for (let i = 1; i <= numberOfPage; i++) {
    pages.push(i);
  }

  const router = useRouter();

  return (
    <section className="mb-8 lg:w-1/2 mx-auto">
      <ul className="flex justify-center items-center gap-4">
        {pages.map((page) => (
          <li className="bg-gray-300 dark:bg-gray-500 rounded-lg w-8 h-8 relative" key={page}>
            <Link href={getPageLink(tag, page)} className={`absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ${router.query.page === page.toString() ? "text-gray-100" : ""}`}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pagination;