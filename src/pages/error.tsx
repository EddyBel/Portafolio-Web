export function Error() {
  return (
    <section className="error__page">
      <h6 className="text__error">Page not found</h6>
      <h1 className="code_error">404</h1>
      <p className="description__error">
        The page you are looking for has not been found, you can return to{" "}
        <a href="/" className="error__init__direction">
          HOME
        </a>{" "}
        to continue browsing
      </p>
    </section>
  );
}
