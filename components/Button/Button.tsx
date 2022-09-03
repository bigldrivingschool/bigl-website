type ButtonProps = {
  children: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <div className="inline-block">
      <a
        href="#"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium uppercase text-white hover:bg-gray-700"
      >
        {props?.children}
      </a>
    </div>
  );
};
