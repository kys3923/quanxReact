import ImageComponent from "./ImageComponent";
import { Images } from "../../data/imageLocationi";

const CSSTrial = (props) => {

  return (
    <section className="w-full bg-gray-200 flex flex-col items-center">
      <div className="w-[550px]">
        <ImageComponent title='Meet GuideBooks' subtitle='Discover hundreds of local spots recommended by Airbnb hosts' images1={Images[5]} images2={Images[2]} images3={Images[0]} boxText='See All Guidebooks' />
        <ImageComponent title='Just for the weekend' subtitle='Discover new, inspiring places close to home.' images1={Images[1]} images2={Images[4]} images3={Images[3]} boxText='See All Desinations' />
      </div>
    </section>
  );
}
export default CSSTrial;