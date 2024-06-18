import React from "react";
import { CSSProperties } from "react";

export type CategoryButtonProps = {
  color?: string;
  content: string;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({
  color = "grey",
  content,
}) => {
  const style: CSSProperties = {
    color,
  };

  return <div style={style}>{content}</div>;
};

export default CategoryButton;
