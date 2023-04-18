import dynamic from "next/dynamic";

const CourseCard = dynamic(() => import("./CourseCard"));

const DashCourses = () => {
  return (
    <>
      <div className="header pb-[2rem]">
        <h1 className="text-d_main uppercase text-sm font-bold font-secondary">
          Explore Courses
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-[2rem] xl:pr-[2rem]">
        <CourseCard
          image="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWF0aGVtYXRpY3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="Mathematics"
          content="Learn different mathematical topics in data science and machine learning."
        />
        <CourseCard
          image="https://plus.unsplash.com/premium_photo-1676494236605-9ff657d14a80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
          title="Data Science & machine Learning"
          content="Understand different machine learning algorithms for supervised and unsupervised learning."
        />
        <CourseCard
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5c2lzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          title="Data Analysis"
          content="Learn exploratory and predictive data analysis snd big data using Python."
        />
        <div
          className={`p-[1rem] rounded-xl relative bg-cover bg-center h-full w-full bg-[url('https://images.unsplash.com/photo-1615869442320-fd02a129c77c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGJ1aWxkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60')]`}
        >
          <span className="absolute rounded-xl top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-misc opacity-60" />
          <div className="content text-white py-5 relative z-20">
            <h1 className="leading-24 font-secondary font-bold text-md my-6">
              Build your curriculum
            </h1>
            <p className="my-6 w-full xl:w-1/2">
              Customise your learning journey by defining your modules tailored
              towards your personal needs.
            </p>
            <div className="cta flex flex-row gap-4">
              <button className="px-5 py-3 my-3 bg-textLight border border-misc text-textDark rounded-md ">
                Customize
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCourses;
