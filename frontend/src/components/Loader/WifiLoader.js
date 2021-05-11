import { WifiLoader } from "react-awesome-loaders";
const WifiLoaderComponent = () => {
  return (
    <>
        <div style={{position: "absolute", left: "42%", top: "33%", zIndex: "1"}}>
          <WifiLoader
            background={"transparent"}
            desktopSize={"150px"}
            mobileSize={"150px"}
            text={" "}
            backColor="#fcecdd"
            frontColor="#fea82f"
          />
        </div>
    </>
  );
};

export default WifiLoaderComponent