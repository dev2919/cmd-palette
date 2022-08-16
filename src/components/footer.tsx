const Footer = () => {
  return (
    <div className=" fixed bottom-0 invisible sm:visible left-0 w-full flex flex-wrap justify-center items-center bg-background py-2.5 px-4 text-xs text-white">
      <span>use </span>

      <kbd className="mx-1 text-base flex h-5 w-5 items-center justify-center rounded border bg-text font-semibold sm:mx-2 text-active">
        ↑
      </kbd>

      <kbd className="mx-1 text-base flex h-5 w-5 items-center justify-center rounded border bg-text font-semibold sm:mx-2 text-active">
        ↓
      </kbd>

      <span className="">to navigate &</span>

      <kbd className="mx-1 px-1 flex h-5 w-auto items-center justify-center rounded border bg-text text-xs font-semibold sm:mx-2 text-active">
        enter
      </kbd>
      <span>to select</span>
    </div>
  );
};

export default Footer;
