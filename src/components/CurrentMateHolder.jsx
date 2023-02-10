import MateHolder from "./MateHolder";

const CurrentMateHolder = (props) => {
  const holder = {
    address: props.holderAddress || "",
    ens: "",
  };

  return (
    <>
      <h1 className="text-2xl text-center font-gradient accent-gradient uppercase">
        ¿Quién tiene el mate ahora?
      </h1>
      <div className="flex flex-col gap-3">
        <div className="px-1 w-full">
          <div className="flex flex-row items-center text-gray-900rounded-3xl px-8 gap-6 bg-dark rounded-3xl">
            <p className="w-24 xs:w-32 sm:w-96 text-center">Address:</p>
            <div></div>
            <img
              src="/welook.png"
              alt="WeLook"
              className="ml-6 xs:ml-8 h-6 w-auto"
            />
          </div>
        </div>
        <div className=" bg-gradient-to-r from-secondary to-accent rounded-3xl p-0.5">
          <div className="flex flex-col items-center text-gray-900rounded-3xl py-4 px-8 gap-4 bg-dark rounded-3xl">
            <MateHolder holder={holder} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentMateHolder;
