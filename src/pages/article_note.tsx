import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { rendersMarkdown } from "../components/markdown/index";
import { getContentNoteFromApi } from "../service/myApi.api";
import { getCookie } from "../util/cookies";
import { BookLoader } from "../components/common/index";

export function Article() {
  const { matter, note } = useParams();
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    if (matter && note)
      getContentNoteFromApi(getCookie("Access-Tocken"), matter, note).then(
        (response) => {
          if (response) {
            setContent(response.body.content);
          }
        }
      );
  }, [matter, note]);

  return (
    <div className="article_note">
      <div className="article__note__container">
        {!content ? (
          <div className="article__note__loader__container">
            <BookLoader />
          </div>
        ) : (
          <ReactMarkdown children={content} components={rendersMarkdown} />
        )}
      </div>
    </div>
  );
}
