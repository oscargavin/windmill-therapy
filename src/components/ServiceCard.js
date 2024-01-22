export default function ServiceCard(props) {
  return (
    <div className="transform transition duration-150 hover:scale-[1.025] cursor-pointer card w-full h-auto bg-gray-700 bg-opacity-15 shadow-xl text-gray-50">
      <figure className="w-full">
        <img src={props.img} className="rounded-t-none" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
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
