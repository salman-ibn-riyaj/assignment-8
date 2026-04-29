import { BeatLoader, ClipLoader } from "react-spinners";


const loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <BeatLoader />
        </div>
    );
};

export default loading;