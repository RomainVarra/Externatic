import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="my-20 text-6xl text-primary flex flex-col items-center justify-center text-center p-6">
        {" "}
        Cette page n'a pas pu être trouvée...
      </div>

      <span className="text-4xl text-primary flex flex-col items-center justify-center text-center p-6">
        Il semblerait que nous ne trouvions pas ce que vous recherchez{" "}
      </span>

      <div className="flex flex-row gap-4 justify-center">
        <Link
          to="/"
          className="text-2xl font-bold flex items-center justify-center my-20 px-20 py-10 rounded-md btn-primary  hover:text-white transition duration-300 text-center"
        >
          Retour sur notre site Externatic
        </Link>
      </div>
    </>
  );
}
