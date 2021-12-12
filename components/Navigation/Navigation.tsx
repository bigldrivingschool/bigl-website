import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex items-center bg-white h-16 px-6 bg-opacity-[.97]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <button
          type="button"
          className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3"
        >
          Login
        </button>
      </div>
    </nav>
  );
};
