import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import { notFound } from "next/navigation";
import { getItem, getImageURL } from "@/lib/api";
import Link from "next/link";

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  images?: { id: number; directus_files_id: string }[];
}

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Fetch single news item from Directus using the provided ID
  const item = await getItem("news_page", id, { fields: "*,images.*" });

  if (!item) {
    notFound();
  }

  const article: NewsArticle = {
    id: String(item.id),
    title: item.title || "",
    date: item.date || "",
    author: item.author || "",
    content: item.content || "",
    image: item.header_image || "",
    category: item.category || "",
    tags: Array.isArray(item.tags) ? item.tags : [],
    images: item.images,
  };

  return (
    <>
      <HeaderSection />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          className="relative w-full overflow-hidden bg-cover bg-center min-h-screen flex items-center"
          style={{
            backgroundImage: `url(${article.image ? getImageURL(article.image) : "/images/placeholder.svg"})`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 w-full flex flex-col justify-center items-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {article.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-sm md:text-base mb-8">
                <span>{(article.date || "").split("T")[0]}</span>
                <span>•</span>
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.category}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <article className="prose prose-lg max-w-none">
              <div
                className="whitespace-pre-line text-gray-700 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: article.content || "" }}
              />
            </article>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link
                href="/news_updates"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                ← Back to News & Updates
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
