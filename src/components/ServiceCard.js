export default function ServiceCard(props) {
  return (
    <div className="transform transition duration-150 hover:scale-[1.025] cursor-pointer card bg-gray-700 bg-opacity-15 shadow-xl text-gray-50">
      <figure className="w-full">
        <img src={props.img} className="rounded-t-none" alt="" />
      </figure>
      <div className="card-body md:h-60 h-auto">
        <h2 className="card-title text-gray-100 font-light text-2xl ">
          {props.title}
        </h2>
        <p className="text-xl font-light text-gray-50 overflow-y-scroll">
          {props.description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline rounded-md">Price</div>
          <div className="badge badge-outline bg-green-100 text-green-800">
            {props.price}
          </div>
        </div>
      </div>
    </div>
  );
}
