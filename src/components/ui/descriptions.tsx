type functionsData = {
  name: string;
  description: string;
  example: string;
};

type data = {
  category: string;
  functions: functionsData[];
};

function Descriptions({
  data,
  children,
}: {
  data: data[];
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <>
      {children}
      {data && (
        <div className="py-4">
          {data?.map((categoryObj) => (
            <div
              key={categoryObj.category}
              className="border border-neutral-500 mb-2 p-2 md:border-0"
            >
              <span className="block font-bold text-2xl">
                {categoryObj.category}
              </span>
              <hr className="my-2 border-neutral-500" />
              <ol>
                {categoryObj.functions.map(
                  (func: functionsData, index: number, arr: functionsData[]) => (
                    <li
                      key={index}
                      className="flex flex-col md:flex-row justify-start flex-wrap mb-2"
                    >
                      <strong className="block p-1 w-full md:w-3/12 text-lg md:text-md">
                        {func.name}
                      </strong>
                      <div className="block p-1 w-full md:w-6/12 fill">
                        {func.description}
                      </div>
                      <div className="block p-1 w-full md:w-3/12">
                        {func.example}
                      </div>
                      {index !== arr.length - 1 && (
                        <hr className=" my-2 border-neutral-800 w-[25%] mx-auto" />
                      )}
                    </li>
                  )
                )}
              </ol>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Descriptions;
