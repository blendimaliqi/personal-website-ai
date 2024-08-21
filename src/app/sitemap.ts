import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://blendimaliqi.com"; // Replace with your actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // If you have an API route that should be publicly accessible, include it
    // {
    //   url: `${baseUrl}/api/openai-stream`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.5,
    // },
  ];
}
