import React from "react";
//** 'he' library for HTML entity decoding **/
import he from "he";
function CardDetail({ data }) {
  const { title, selftext_html, url, score } = data;

  // Decode HTML entities
  const decodedHtml = selftext_html ? he.decode(selftext_html) : "";

  return (
    <div className="mb-3">
      <div className="card w-100 h-100 container shadow-md p-2 bg-warning-subtle border-2">
        <div className="card-body">
          {/* Title */}
          <h2 className="card-title ">{title}</h2>
          {/* SelfText_HTML */}
          {decodedHtml && (
            <div
              className="py-3"
              dangerouslySetInnerHTML={{ __html: decodedHtml }}
            />
          )}
          <div>
            <a
              href={url}
              style={{ width: "fit-content" }}
              className="py-3   "
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </a>
          </div>

          {/* Score */}
          <h2 className="card-text mt-3  fs-5 badge bg-primary">
            Score:&nbsp; <span className="">{score}</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
