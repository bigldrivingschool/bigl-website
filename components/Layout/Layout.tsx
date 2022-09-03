import React from "react";
import cx from "classnames";

export const Container = ({
  children,
  className,
  element,
}: {
  children?: React.ReactNode;
  className?: string;
  element?: keyof JSX.IntrinsicElements;
}) => {
  const Element = element ? element : "div";
  return (
    <Element
      className={cx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Element>
  );
};
