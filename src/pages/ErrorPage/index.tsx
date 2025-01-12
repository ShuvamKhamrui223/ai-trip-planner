import { BiSolidError } from "react-icons/bi";
import Container from "../../Container";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container>
      <section className="flex flex-col items-center justify-center min-h-screen">
        <BiSolidError className="text-[14rem]" />
        <h1 className="text-2xl first-letter:uppercase">
          this page does not exists
        </h1>
        <Link to="/" className="btn btn-link capitalize text-lg">
          back to home
        </Link>
      </section>
    </Container>
  );
};

export default ErrorPage;
