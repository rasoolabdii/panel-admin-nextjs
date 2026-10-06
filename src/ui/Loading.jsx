import { ThreeCircles } from "react-loader-spinner";

function Loading({ width = "50" , height = "50"}) {
    return (
        <div>
            <ThreeCircles
                visible={true}
                height={height}
                width={width}
                color="rgb(var(--color-primary-900))"
                ariaLabel="three-circles-loading"
                wrapperStyle={{
                    display: " flex",
                    justifyContent: "center",
                    alignItem: "center"
                }}
                wrapperClass=""
            />
        </div>
    )
};
export default Loading;