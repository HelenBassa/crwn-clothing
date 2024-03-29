declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: React.FC<React.SVGAttributes<SVGElement>>;
  export default content;
}
