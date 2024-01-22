export default function Qualifications() {
  return (
    <div className="mt-24 mb-24 w-full md:w-3/4 mx-auto py-6 px-4">
      <h1 className="w-full flex justify-center text-5xl mb-12 text-gray-600 font-thin">
        Qualifications
      </h1>
      <div className="flex md:flex-row flex-col items-center space-y-6 w-full justify-center space-x-8">
        <img
          className="w-1/3 md:w-1/6 drop-shadow-sm"
          src="/mindful_menopause.webp"
        ></img>
        <img className="w-4/5 drop-shadow-sm rounded-md" src="/nch.png"></img>
      </div>
    </div>
  );
}
