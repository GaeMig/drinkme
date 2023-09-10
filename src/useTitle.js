import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Drink Me - ${title}`;
  }, [title]);
  return;
};

export default useTitle;