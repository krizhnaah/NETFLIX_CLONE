const PageNotFound = () => {
  return (
    <>
      <div className="page-not-found">
        <div className="page-not-found-wrapper">
          <div id="page-404">404&#33;</div>
          <div>
            <h1>Page Not Found &#9785;</h1>
            <p>
              Sorry The Page You requseted could not be found.Please go back to
              <a id="anchor-pagenotfound" href="/">
                Homepage
              </a>{" "}
              or contact us at <br />
              &#9993; support@admin.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
