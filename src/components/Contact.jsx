import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";

const fadeVariant = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: -50 },
    transition: { duration: 0.5, delay: 0.3 },
};

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-4 text-center text-3xl"
            >
                FIND ME ON
            </motion.h2>
            <div className="flex justify-center gap-4 mb-4">
                <motion.a
                    href="https://www.instagram.com/plaintive._tears/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-white hover:text-red-800 active:animate-ping"
                    title="Instagram"
                >
                    <FaInstagram size={25} />
                </motion.a>
                <motion.a
                    href="https://x.com/swameher"
                    rel="noopener noreferrer"
                    aria-label="Twitter X"
                    target="_blank"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-white hover:text-blue-500 active:animate-ping"
                    title="Twitter"
                >
                    <BsTwitter size={25} />
                </motion.a>
                <motion.a
                    href={`mailto:${CONTACT.email}`}
                    rel="noopener noreferrer"
                    aria-label="Gmail"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="text-white hover:text-orange-500 active:animate-ping"
                    title="Gmail"
                >
                    <MdOutgoingMail size={27} />
                </motion.a>
            </div>
            <motion.p
                whileInView={fadeVariant.whileInView}
                initial={fadeVariant.initial}
                transition={{ ...fadeVariant.transition, delay: 1.5 }}
                className="-my-12 text-center text-tracking-tighter"
            >
            </motion.p>
        </div>
    );
};

export default Contact;
