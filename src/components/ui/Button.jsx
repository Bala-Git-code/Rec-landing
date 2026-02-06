import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    className,
    onClick,
    ...props
}) => {
    // Removed hover:scale-105 for a calmer feel
    const baseStyles = "relative font-bold text-lg rounded-xl transition-colors duration-300 overflow-hidden group";

    const variants = {
        primary: "bg-primary text-white shadow-lg hover:shadow-xl hover:brightness-110",
        secondary: "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-sm hover:shadow-md",
        ghost: "bg-transparent text-primary hover:bg-primary/10"
    };

    const padding = "px-8 py-4";

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={cn(baseStyles, variants[variant], padding, className)}
            onClick={onClick}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
            {/* Subtle ripple hint on click logic is handled by whileTap scale */}
        </motion.button>
    );
};

export default Button;
