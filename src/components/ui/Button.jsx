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
    const baseStyles = "relative font-bold text-lg rounded-xl transition-all duration-300 overflow-hidden group";

    const variants = {
        primary: "bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105 hover:brightness-110",
        secondary: "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-sm hover:shadow-md",
        ghost: "bg-transparent text-primary hover:bg-primary/10"
    };

    const padding = "px-8 py-4";

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, variants[variant], padding, className)}
            onClick={onClick}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
            {/* Ripple effect container could go here if implemented manually, 
                but using framer-motion's whileTap provides good feedback too. 
                For the specific ripple requested: */}
            {variant === 'primary' && (
                <span className="absolute inset-0 bg-white/20 scale-0 rounded-full transition-transform duration-500 active:scale-150 opacity-0 active:opacity-100 origin-center pointer-events-none" />
            )}
        </motion.button>
    );
};

export default Button;
