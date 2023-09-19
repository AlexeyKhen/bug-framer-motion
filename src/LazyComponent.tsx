import React from 'react';
import {motion} from "framer-motion";

const LazyComponent = () => {
    return (
        <>
            <motion.div layoutId="123">motion.div</motion.div>
        </>
    );
};

export default LazyComponent;