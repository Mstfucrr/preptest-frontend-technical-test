import { motion } from "framer-motion";

type StatisticComponentProps = {
    backgroundClass: string;
    imagePath: string;
    value: string;
    label: string;
};


const StatisticComponent = ({ backgroundClass, imagePath, value, label }: StatisticComponentProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="bg-transparent z-10 bg-white relative w-16 h-16">
                <motion.div className={`${backgroundClass} w-full h-full absolute top-0 left-0 bg-no-repeat bg-cover`}
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{ duration: 1.4, bounce: .4, type: 'spring' }}
                >
                    <img src={`/images/statistic/${imagePath}`} className="w-1/3 h-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt={label} />
                </motion.div>
            </div>
            <div className="flex items-center flex-col justify-center max-w-28 text-center">
                <p>{value}</p>
                <p className="text-[#505254] text-sm">{label}</p>
            </div>
        </div>
    );
};

export default StatisticComponent;