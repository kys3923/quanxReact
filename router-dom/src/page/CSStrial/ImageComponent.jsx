const ImageComponent = ({title, subtitle, images1, images2, images3, boxText}) => {

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center my-8">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm">{subtitle}</p>
      </div>
      <div className="grid grid-cols-3 w-full my-8">
        <div className="w-[175px] h-[175px] flex justify-center items-center font-bold text-white bg-black/40 bg-blend-multiply hover:bg-blend-normal" style={{ backgroundImage: `url(${images1.src})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
          {images1.name}
        </div>
        <div 
          style={{ backgroundImage: `url(${images2.src})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
          className="w-[175px] h-[175px] flex justify-center items-center font-bold text-white bg-black/40 bg-blend-multiply hover:bg-blend-normal" 
        >
          
          {images2.name}
        </div>
        <div 
          style={{ backgroundImage: `url(${images3.src})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
          className="w-[175px] h-[175px] flex justify-center items-center font-bold text-white bg-black/40 bg-blend-multiply hover:bg-blend-normal"
        >
          {images3.name}
        </div>
      </div>
      <div className="my-8">
        <button className="w-[175px] bg-white font-bold text-xs px-3 py-2 hover:bg-slate-950 hover:text-white">{boxText}</button>
      </div>
    </div>
  );
}
export default ImageComponent;