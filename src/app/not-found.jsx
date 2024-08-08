import Link from "next/link";

const NotFound = () => {
  return (
    <div className="max-h-[100vh] h-full not-found p-4">
      <div className="w-full p-5 m-10 mx-auto text-center rounded-lg shadow-xl md:w-2/5">
        <h1 className="my-4">Page Not Found!</h1>
        <p>The page you are looking for could not be found.</p>
        <p className="mt-4">
          Return{" "}
          <Link
            href="/"
            className="font-semibold underline underline-offset-2 text-primary-200"
          >
            home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
