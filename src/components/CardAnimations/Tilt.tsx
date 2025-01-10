import { motion, useMotionValue, useTransform } from "framer-motion";

const Tilt = (props: any) => {
    const { title, desc, bgClr } = props
    const x = useMotionValue(150);
    const y = useMotionValue(150);

    const rotateX = useTransform(y, [0, 300], [18, -18]);
    const rotateY = useTransform(x, [0, 300], [-18, 18]);
    const skewX = useTransform(x, [0, 300], [3, -3]);
    const skewY = useTransform(x, [0, 300], [-3, 3]);

    const handleMouseMove = (e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        x.set(mouseX);
        y.set(mouseY);
    };

    return (
        <motion.div
            className="w-52 h-64 mx-auto shadow-lg rounded-lg flex items-center justify-center"
            style={{
                perspective: "1000px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(150), y.set(150) }}
        >
            <motion.div
                className="w-full h-full rounded-lg flex flex-col items-center justify-center gap-4 text-center px-4 bg-slate-700"
                style={{
                    rotateX,
                    rotateY,
                    skewX,
                    skewY,
                    backgroundColor: bgClr || "#334155"
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                }}
            >
                <h1 className="text-lg font-medium">{title}</h1>
                <p className='text-sm'>{desc}</p>
            </motion.div>
        </motion.div>
    );
};

export default Tilt;
