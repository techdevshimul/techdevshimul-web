import BlogDetailsHeader from "@/components/public/blogs/blog-details/BlogDetailsHeader";
import LeftSideBar from "@/components/public/blogs/blog-details/LeftSideBar";
import MainContent from "@/components/public/blogs/blog-details/MainContent";
import RelatedPosts from "@/components/public/blogs/blog-details/RelatedPosts";
import ReadingProgress from "@/components/public/blogs/ReadingProgress";

export default function BlogDetails() {
  return (
    <>
      <ReadingProgress />

      <main className="relative z-10 pt-32 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <BlogDetailsHeader />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <LeftSideBar />
          <MainContent />
        </div>
        <RelatedPosts />
      </main>
    </>
  );
}
