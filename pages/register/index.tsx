import Head from "next/head";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <Head>
        <title>Neutrix | Sign up</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-2xl font-bold text-white">Neutrix</h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-xl font-bold text-center text-gray-700 dark:text-white">
                  Neutrix
                </h2>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Sign up to create an account
                </p>
              </div>

              <div className="mt-8">
                <form>
                  {/* First name */}
                  <div>
                    {/* <label
                      htmlFor="First name"
                      className="block mb-2 text-[14px] text-gray-600 dark:text-gray-200"
                    >
                      First name
                    </label> */}
                    <input
                      type="text"
                      name="First name"
                      id="firstName"
                      placeholder="First name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-slate outline-none bg-white border border-gray-200 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  {/* Last name */}
                  <div>
                    {/* <label
                      htmlFor="Last name"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Last name
                    </label> */}
                    <input
                      type="text"
                      name="Last name"
                      id="lastName"
                      placeholder="Last name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-slate outline-none bg-white border border-gray-200 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    {/* <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email
                    </label> */}
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email address"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-slate outline-none bg-white border border-gray-200 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  {/* Password  */}
                  <div className="">
                    <div className="flex justify-between mb-2">
                      {/* <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label> */}
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Type a password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-slate outline-none bg-white border border-gray-200 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  {/* Confirm pass word */}

                  <div className="">
                    <div className="flex justify-between mb-2">
                      {/* <label
                        htmlFor="Confirm password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Confirm Password
                      </label> */}
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-slate outline-none bg-white border border-gray-200 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  {/* Signup button */}

                  <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Sign up
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Have an account?{" "}
                  <Link
                    href="/login"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Login
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
