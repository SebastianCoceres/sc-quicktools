import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { fadeInFromBottom, fadeInFromTop } from "@/lib/animations";
import { TransformColor, contrastChecker } from "@/services/colorTransform";
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { useCopyToClipboard, useDebounceValue } from "usehooks-ts";



const ColorTransform: React.FC = (): JSX.Element => {
    const [color, setColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#f5f5f5");
    const [debouncedUserInput, setDebouncedUserInput] = useDebounceValue(color, 500)
    const [contrastOnWhite, setContrastonWhite] = useState<string>("")
    const [contrastOnBlack, setContrastonBlack] = useState<string>("")
    const [contrastonBg, setContrastonBg] = useState<string>("")
    const [colorTransformations, setColorTransformations] = useState<Record<string, string>>({
        hex: "",
        rgba: "",
        hsla: "",
    });
    const [copiedValue, copy] = useCopyToClipboard();

    useEffect(() => {
        if (copiedValue) {
            toast({
                title: `Copied ${copiedValue}`,
                variant: "default",
            })
        }
    }, [copiedValue]);

    // Update contrast values
    useEffect(() => {
        if (colorTransformations.hex) {
            setContrastonWhite(contrastChecker(colorTransformations.hex));
            setContrastonBlack(contrastChecker(colorTransformations.hex, '#000000'));
            setContrastonBg(contrastChecker(colorTransformations.hex, bgColor));
        }
    }, [colorTransformations, bgColor]);

    // Handle color transformation
    const handleColor = useCallback(() => {
        const transformedColor = TransformColor(debouncedUserInput);
        setColorTransformations(prevTransformations => ({
            ...prevTransformations, ...transformedColor
        }));
    }, [debouncedUserInput]);

    // Debounce input color
    useEffect(() => {
        setDebouncedUserInput(color);
    }, [setDebouncedUserInput, color]);

    // Initial color transformation
    useEffect(() => {
        handleColor();
    }, [handleColor]);


    return (
        <>
            <div className="flex w-full flex-col items-start gap-2">
                <div className="w-full flex justify-between">
                    <h1 className="text-3xl border-b py-4 font-extrabold leading-tight tracking-tighter md:text-4xl ">
                        Color
                    </h1>
                </div>
            </div>
            <div className="flex flex-wrap">
                <motion.div animate="visible" initial="hidden" transition={{ duration: 1 }} variants={fadeInFromTop} className="flex-1 flex items-start gap-2 my-8">
                    <div className="w-[60px] h-[60px] overflow-hidden rounded-full border border-foreground/20">
                        <Input containerClassName="w-full h-full " className="w-full h-full p-0 m-0 border-none rounded-full scale-125 cursor-pointer" type="color" value={colorTransformations.hex} onChange={(e) => setColor(e.target.value)} />
                    </div>
                    <div className="flex-1">
                        <Label htmlFor="userInput">Color a transformar</Label>
                        <Input
                            id="userInput"
                            className="w-full"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                        <p className="text-sm text-muted-foreground my-2">
                            Inserta el color en cualquier formato o utiliza el selector de color de la izquierda. La herramienta detecta automaticamente el color. (#hex, rgba, hsla, nombrado)
                        </p>
                    </div>
                </motion.div>

                <div className="flex w-full wrap items-start gap-2">
                    <motion.div animate="visible"
                        initial="hidden"
                        exit={"hidden"}
                        transition={{ duration: 1 }}
                        variants={fadeInFromBottom} className="flex-1 my-4 text-lg text-muted-foreground flex flex-col md:flex-row gap-4">

                        <div className="flex-1" onClick={() => {
                            copy(colorTransformations.hex as string);
                        }}>
                            <Label htmlFor="userInput">
                                Hex
                            </Label>
                            <Input
                                id="hex"
                                className="w-full pointer-events-none !opacity-100"
                                value={colorTransformations.hex}
                                disabled
                            />
                        </div>
                        <div className="flex-1" onClick={() => {
                            copy(colorTransformations.rgba as string);
                        }}>
                            <Label htmlFor="userInput">
                                Rgba
                            </Label>
                            <Input
                                id="rgba"
                                className="w-full pointer-events-none !opacity-100"
                                value={colorTransformations.rgba}
                                disabled
                            />
                        </div>
                        <div className="flex-1" onClick={() => {
                            copy(colorTransformations.hsla as string);
                        }}>
                            <Label htmlFor="userInput">
                                Hsla
                            </Label>
                            <Input
                                id="hsla"
                                className="w-full pointer-events-none !opacity-100"
                                value={colorTransformations.hsla}
                                disabled
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div>
                <h2 className="text-xl border-b mb-4 py-4 font-extrabold tracking-tighter ">Contrastes</h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 px-1 mb-1">
                        <div style={{ backgroundColor: colorTransformations.hex }} className="aspect-[2/1] flex justify-center items-center  border-foreground border rounded-md">
                            <p className="text-2xl md:text-8xl font-bold text-white [text-shadow:_0_1px_5px_rgb(0_0_0_/_40%)]">{contrastOnWhite}</p>
                        </div>
                        <p className="text-center text-muted-foreground text-sm mt-1">
                            Contraste con texto blanco
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 px-1 mb-1">
                        <div style={{ backgroundColor: colorTransformations.hex }} className="aspect-[2/1] flex justify-center items-center  border-foreground border rounded-md">
                            <p className="text-2xl md:text-8xl font-bold text-black [text-shadow:_0_1px_5px_rgb(255_255_255_/_40%)]">
                                {contrastOnBlack}
                            </p>
                        </div>
                        <p className="text-center text-muted-foreground text-sm mt-1">
                            Contraste con texto negro
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 px-1 mb-1">
                        <div style={{ backgroundColor: bgColor }} className="aspect-[2/1] flex justify-center items-center bg-black border-foreground border rounded-md">
                            <p style={{ color: colorTransformations.hex }} className="text-2xl md:text-8xl font-bold  [text-shadow:_0_1px_5px_rgb(0_0_0_/_40%)]">{contrastonBg}</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 mt-1 ">
                            <Label htmlFor="bgColor" className="text-center text-muted-foreground text-sm cursor-pointer">
                                Contraste con:
                            </Label>
                            <div className="w-[1em] h-[1em] relative">
                                <Input id="bgColor" defaultValue={bgColor} containerClassName="w-full h-full absolute inset-0 border-none" className=" w-full h-full scale-125 cursor-pointer p-0 m-0 border-none" type="color" onChange={(e) => setBgColor(e.target.value)} />
                            </div>
                            ({bgColor})
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ColorTransform;
