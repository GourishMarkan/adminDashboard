import React from "react";

const Permission = () => {
  const [permission, setPermission] = React.useState("permission");
  React.useEffect(() => {
    console.log(permission);
    setPermission("permission1");
  }, [permission]);
  return <div>Permission is {permission}</div>;
};

export default Permission;
