import React, { useState } from "react";
import Book from "./book";
import Main from "./main";
import ThankYou from "./Thankyou";
export default _ => {
    const [page, setPage] = useState(0);
    return (
        <div>
            {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <ThankYou /> : null}

    </div>
      );
    };
        