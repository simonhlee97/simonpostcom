import React, { useRef } from "react";

import useScript from "../lib/use-script";

const Comments = () => {
  const comment = useRef(null);

  const status = useScript({
    url: "https://utteranc.es/client.js",
    theme: "github-dark",
    issueTerm: "url",
    repo: "simonhlee97/simonpostcom",
    ref: comment
  });

  return (
    <div className="w-full pb-8">
      {
        <div ref={comment}></div>
      }
    </div>
  );
};

export default Comments;
