export const Skeleton = () => {
  return (
    <li aria-hidden="true">
      <div className="h-[152px] w-[152px] lg:h-[215px] lg:w-[215px]">
        <div className="h-full w-full rounded-sm drop-shadow-sm animate-pulse bg-grey-medium" />
      </div>

      <div className="mt-4 flex flex-col items-center">
        <div className="h-1 w-[50%] animate-pulse rounded-2xl bg-grey-medium" />
        <div className="h-1 w-[30%] animate-pulse rounded-2xl bg-grey-medium mt-[1px]" />
      </div>
    </li>
  );
};
