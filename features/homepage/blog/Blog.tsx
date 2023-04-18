import Link from "next/link";
import dynamic from "next/dynamic";

const BlogCard = dynamic(() => import("./BlogCard"));
const ParagraphText = dynamic(
  () => import("@/components/typography/ParagraphText")
);

const Blog = () => {
  return (
    <>
      <section className="my-[4.5rem] py-6" id="blog">
        <div className="md:container p-6">
          {/* SubHeading */}
          <div className="py-3">
            <ParagraphText>We are always up to date</ParagraphText>
          </div>

          {/* Heading */}
          <div className="mb-5">
            <h1 className="text-misc leading-48 md:leading-64 p-0 m-0 text-fallback sm:text-[40px] md:text-xl lg:text-2xl font-primary">
              Our Blog
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BlogCard
                image="https://images.unsplash.com/photo-1593349480506-8433634cdcbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHJvYm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="Birth of Robots"
              />
              <BlogCard
                image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHJvYm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="Mystery of Robots"
              />
              <BlogCard
                image="https://images.unsplash.com/photo-1601132359864-c974e79890ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="Ascension of Robots"
              />
              <BlogCard
                image="https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvYm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="I robot"
              />
              <BlogCard
                image="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvYm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="Megamind in Gotham"
              />
              <div className="px-1 flex flex-col md:justify-center items-center">
                <div className="box">
                  <p className="text-sm">
                    Visit our blog page for more informative aricles
                  </p>
                  <div className="blog_cta my-3">
                    <Link
                      className="w-full p-2 bg-primary px-[2rem]"
                      href="/blog"
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog articles grid */}
        </div>
      </section>
    </>
  );
};

export default Blog;
