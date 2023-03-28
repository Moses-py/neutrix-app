import BlogCard from "@/features/homepage/blog/BlogCard";

const BlogList = () => {
  return (
    <>
      <section id="bloglist" className="my-[4.5rem]">
        <div className="container">
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
              <BlogCard
                image="https://images.unsplash.com/photo-1601132359864-c974e79890ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="Ascension of Robots"
              />
            </div>
          </div>
        </div>
        <p className="text-center text-sm my-[2.5rem]">More coming soon...</p>
      </section>
    </>
  );
};

export default BlogList;
