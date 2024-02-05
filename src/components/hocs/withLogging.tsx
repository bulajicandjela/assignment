import React from "react";
import { ComponentType, FC } from "react";

interface WithLogProps {
  message?: string;
}
function withLogging<P extends {}>(
  Component: ComponentType<P>
): FC<P & WithLogProps> {
  const ComponentWithLog: FC<P & WithLogProps> = (props) => {
    const { message = "Hello from ", ...restProps } = props;
    console.log(`${message} ${Component.displayName}`);
    return <Component {...(restProps as P)} />;
  };
  return ComponentWithLog;
}
export default withLogging;
