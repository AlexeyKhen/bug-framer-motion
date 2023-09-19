import {lazy, Suspense, useRef, useState} from "react";
import {motion} from "framer-motion";

const LazyComponent = lazy(() => import("./LazyComponent"))

function App() {
    const [isShown, setIsShown] = useState(false)
    const boxRef = useRef<HTMLDivElement>(null);
    return (
        <div style={{userSelect: "none"}}>
            <div
                style={{
                    width: 800,
                    height: 700,
                    position: "relative",
                    border: "3px solid red"
                }}
                ref={boxRef}
            >
                <motion.div
                    style={{

                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                        position: "absolute",
                        bottom: 100,
                        right: 100
                    }}
                    dragElastic={0.1}
                    drag
                    dragMomentum={false}
                    dragConstraints={boxRef}
                />
            </div>
            {isShown && <>
                <Suspense fallback={null}>
                    <LazyComponent/>
                </Suspense>
            </>}
            <button onClick={() => setIsShown(!isShown)}>Import lazy component</button>
        </div>
    );
}

export default App;
