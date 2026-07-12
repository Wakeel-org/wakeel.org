import { getAdminDb } from "./admin";

const serializeDoc = (doc) => {
  const data = doc.data();
  return {
    id: doc.id,
    ...data,
    createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : data.createdAt ?? null,
  };
};

export async function getBlogPostsServer() {
  const db = getAdminDb();
  if (!db) return [];

  try {
    const snapshot = await db.collection("blog_posts").orderBy("createdAt", "desc").get();
    return snapshot.docs
      .map(serializeDoc)
      .filter((post) => post.status !== "draft");
  } catch (error) {
    console.error("Failed to fetch blog posts at build time:", error.message);
    return [];
  }
}
