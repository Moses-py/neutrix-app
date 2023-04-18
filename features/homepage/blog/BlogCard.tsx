import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  image: string;
  title: string;
}
const BlogCard: React.FunctionComponent<BlogCardProps> = ({ image, title }) => {
  return (
    <>
      <div className="blog_container border border-gray-300 rounded-lg relative">
        <div className="image w-full h-[250px] object-contain relative rounded-lg">
          <Image src={image} alt="blog_image" fill className="rounded-lg" />
        </div>
        <div className="blog_content p-4">
          <p className="mt-3 text-lg text-misc">{title}</p>
          <span className="date and author text-xs font-bold font-secondary">
            Michael Kroos | Feb, 2023
          </span>
          <p className="blog_paragraph text-sm my-4 leading-24">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam in,
            nesciunt maxime enim excepturi magni odit natus eius reiciendis
            laudantium.{" "}
            <Link href="/" className="font-bold text-xs text-misc">
              Read more...
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
