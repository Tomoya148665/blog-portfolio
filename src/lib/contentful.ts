import contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : import.meta.env.VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export async function fetchBlogPageEntries() {
  console.log(fetchBlogPageEntries);
  try {
    const response = await contentfulClient.getEntries({
      content_type: "blogPage",
      include: 4,
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching blogPage entries:", error);
    return [];
  }
}

export const FetchedArticles = await contentfulClient.getEntries({
  content_type: "blogPage",
  order: "-sys.createdAt",
});

export const FetchedCategories = await contentfulClient.getEntries({
  content_type: "category",
  order: "-sys.createdAt",
});
