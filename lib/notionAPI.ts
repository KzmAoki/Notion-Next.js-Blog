import { NUMBER_OF_POSTS_PER_PAGE } from "@/constants/constants";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type Tags = {
  id: string;
  name: string;
  color: string;
};

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getAllPosts = async () => {
  try {
    const posts = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID || "", // undefined対策でデフォルト設定
      page_size: 100,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        }
      ],
    });

    const allPosts = posts.results;

    return allPosts.map((post) => {
      if ("properties" in post) {
        return getPageMetaData(post);
      }
    });

  } catch (e) {
    console.error(e);
    return [];
  }
};

const getPageMetaData = (post: PageObjectResponse) => {

  const getPageTitle = (post: PageObjectResponse) => {
    if (post.properties.Name.type === 'title' && post.properties.Name.title[0]) {
      return post.properties.Name.title[0].plain_text
    }
    return ''
  }

  const getPageDescription = (post: PageObjectResponse) => {
    if (post.properties.Description.type === 'rich_text' && post.properties.Description.rich_text[0]) {
      return post.properties.Description.rich_text[0].plain_text
    }
    return ''
  }

  const getPageDate = (post: PageObjectResponse) => {
    if (post.properties.Date.type === 'date' && post.properties.Date.date !== null) {
      return post.properties.Date.date.start
    }
    return ''
  }

  const getPageSlug = (post: PageObjectResponse) => {
    if (post.properties.Slug.type === 'rich_text' && post.properties.Slug.rich_text[0]) {
      return post.properties.Slug.rich_text[0].plain_text
    }
    return ''
  }

  const getTags = (post: PageObjectResponse) => {
    if (post.properties.Tags.type === 'multi_select' && post.properties.Tags.multi_select) {
      const allTags = post.properties.Tags.multi_select.map((tag) => tag.name);
      return  allTags;
    }
    return [];
  }
  
  return {
    id: post.id,
    // title: post.properties.Name.title[0].plain_text,
    title: getPageTitle(post),
    // description: post.properties.Description.rich_text[0].plain_text,
    description: getPageDescription(post),
    // date: post.properties.Date.date.start,
    date: getPageDate(post),
    // slug: post.properties.Slug.rich_text[0].plain_text,
    slug: getPageSlug(post),
    // tags: getTags(post.properties.Tags.multi_select),
    tags: getTags(post),
  }
};

export const getSinglePost = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || "", // undefined対策でデフォルト設定
    filter: {
      property: "Slug", // DBで設定したプロパティ
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0] as PageObjectResponse;
  const metadata = getPageMetaData(page);
  // console.log(metadata);
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return {
    metadata,
    markdown: mdString,
  };
};

export const getPostsForTopPage = async (pageSize: number) => {
  const allPosts = await getAllPosts();
  const fourPosts = await allPosts.slice(0, pageSize);
  return fourPosts;
};

export const getPostsByPage = async (page: number) => {
  const allPosts = await getAllPosts();

  const startIndex = (page - 1) * NUMBER_OF_POSTS_PER_PAGE;
  const endIndex = startIndex + NUMBER_OF_POSTS_PER_PAGE;

  return allPosts.slice(startIndex, endIndex);
};

export const getNumberOfPages = async () => {
  const allPosts = await getAllPosts();

  return (
    Math.floor(allPosts.length / NUMBER_OF_POSTS_PER_PAGE) + (allPosts.length % NUMBER_OF_POSTS_PER_PAGE > 0 ? 1 : 0)
  );
};

export const getPostsByTagAndPage = async (tagName: string, page: number) => {
  const allPosts = await getAllPosts();
  const posts = allPosts.filter((post) => {
    const tags = post?.tags || [];
    return tags.find((tag: string) => tag === tagName)
  });

  const startIndex = (page - 1) * NUMBER_OF_POSTS_PER_PAGE;
  const endIndex = startIndex + NUMBER_OF_POSTS_PER_PAGE;

  return posts.slice(startIndex, endIndex);
}

export const getNumberOfPagesByTag = async (tagName: string) => {
  const allPosts = await getAllPosts();
  const posts = allPosts.filter((post) => {
    const tags = post?.tags || [];
    return tags.find((tag: string) => tag === tagName)
  });

  return (
    Math.floor(posts.length / NUMBER_OF_POSTS_PER_PAGE) + (posts.length % NUMBER_OF_POSTS_PER_PAGE > 0 ? 1 : 0)
  )
}

export const getAllTags = async () => {
  const allPosts = await getAllPosts();

  const allTagsDuplicationLists = allPosts.flatMap((post) => {
    const tags = post?.tags || [];
    return tags;
  });
  const set = new Set(allTagsDuplicationLists);
  const allTagsList = Array.from(set);
  // console.log(allTagsList);

  return allTagsList;
};