import React from "react";

const Search = () => {
  const [search, setSearch] = React.useState("search");
  React.useEffect(() => {
    console.log(search);
    setSearch("search");
  }, [search]);

  return <div>{search}</div>;
};

export default Search;
