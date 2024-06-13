import { FC, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  title?: string;
  description?: string;
}
const Section: FC<SectionProps> = ({ children, title, description }) => {
  return (
    <div className="mt-24  text-left ">
      <div className="mx-auto max-w-2xl lg:mx-0">
        {title ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        ) : null}

        {description ? (
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        ) : null}
      </div>
      <div className="mt-12">{children}</div>
    </div>
  );
};

export default Section;
