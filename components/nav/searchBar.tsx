import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SearchBarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function SearchBar({ isOpen, setIsOpen }: SearchBarProps) {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="h-screen fixed inset-0 bg-black/40 z-40 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Search Bar */}
                    <motion.div
                        className="fixed top-0 right-0 w-full bg-white border border-border shadow-lg z-50 origin-top"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <div className="max-w-4xl mx-auto p-4">
                            <div className="flex justify-end">
                                <button onClick={() => setIsOpen(false)}>
                                    <X className="w-8 h-8" />
                                </button>
                            </div>

                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full border rounded px-4 py-3 mt-4"
                                autoFocus
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
