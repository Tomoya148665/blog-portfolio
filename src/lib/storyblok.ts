import type { SbBlokData } from "@storyblok/astro";
import {
  storyblokInit,
  apiPlugin,
  storyblokEditable,
  loadStoryblokBridge,
} from "@storyblok/js";

const dev = import.meta.env.DEV;
const storyblokToken = import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN;

const { storyblokApi } = storyblokInit({
  bridge: false,
  accessToken: storyblokToken,
  apiOptions: {
    cache: { type: "memory" },
  },
  use: [apiPlugin],
});

export async function getLinks() {
  if (!storyblokApi) {
    throw new Error("Storyblok API not initialized");
  }
  const { data } = await storyblokApi.get("cdn/links", {
    version: "draft",
  });

  const links = data ? data.links : null;

  return links;
}

export async function getStory(slug: string) {
  if (!storyblokApi) {
    throw new Error("Storyblok API not initialized");
  }
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
  });

  const story = data ? data.story : null;

  return story;
}

export async function getEditableAttributes(blok: SbBlokData) {
  if (!blok || !dev) return false;

  return storyblokEditable(blok);
}

export async function activateStoryblokBridge() {
  if (!dev) return false;

  return loadStoryblokBridge().then(() => {
    const { StoryblokBridge, location } = window;
    const storyblokInstance = new StoryblokBridge();

    storyblokInstance.on(["published", "change"], () => {
      location.reload();
    });
  });
}
