import { useState, useEffect } from "react";

const useSingularize = (type: string) => {
  const [singularForm, setSingularForm] = useState("");

  useEffect(() => {
    const singularize = (word: string) => {
      if (word.endsWith("ies")) {
        return word.slice(0, -3) + "y";
      } else if (word.endsWith("s")) {
        return word.slice(0, -1);
      } else {
        return word;
      }
    };

    setSingularForm(singularize(type));
  }, [type]);

  return singularForm;
};

export default useSingularize;
