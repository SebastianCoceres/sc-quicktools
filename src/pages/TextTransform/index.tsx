import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { fadeInFromBottom, fadeInFromTop } from "@/lib/animations";
import * as TextProcessing from "@/services/TextProcessing";
import { motion } from "framer-motion";
import { Info, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import Description from "@/components/ui/descriptions";
import { functionsData } from "@/pages/TextTransform/functionDescriptions";


const selectOptions = Object.keys(TextProcessing).map((key) => {
  return { value: key, label: `${TextProcessing.FirstCapital(TextProcessing.convertToNormalText(key))}` };
});

const TextTransform: React.FC = (): JSX.Element => {
  const [selectedFn, setSelectedFn] = useState<string>("");
  const [isCopyped, setIsCopyped] = useState(false);
  const [copiedValue, copy] = useCopyToClipboard();
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    if (isCopyped) {
      setTimeout(() => {
        setIsCopyped(false);
      }, 2000);
    }
  }, [isCopyped]);

  const debouncedSetExitValue = useCallback(
    (value: string) => {
      if (!value) {
        setDebouncedValue("");
        return;
      }

      if (!selectedFn) {
        toast({
          title: "Es necesario seleccionar una función",
          description: "Por favor, seleccione una función.",
          variant: "destructive",
        });

        return;
      }
      if (
        selectedFn &&
        TextProcessing[selectedFn as keyof typeof TextProcessing]
      ) {
        const text =
          TextProcessing[selectedFn as keyof typeof TextProcessing](value);

        setDebouncedValue(text as string);
        return;
      }
    },
    [selectedFn]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      debouncedSetExitValue(userInput);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [userInput, selectedFn, debouncedSetExitValue]);

  return (
    <div className="flex w-full flex-col items-start gap-2">
      <div className="w-full flex justify-between">
        <h1 className="text-3xl border-b py-4 font-extrabold leading-tight tracking-tighter md:text-4xl ">
          Texto
        </h1>
        <Dialog>
          <DialogTrigger>
            <Info />
            <span className="sr-only">Descripciones</span>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Info</DialogTitle>
              <DialogDescription asChild>
                <Description data={functionsData} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <motion.div
        animate="visible"
        initial="hidden"
        transition={{ duration: 1 }}
        variants={fadeInFromTop}
        className="w-full my-8 text-lg text-muted-foreground flex flex-col md:flex-row gap-4"
      >
        <Combobox
          items={selectOptions}
          onChangeValue={(value: string) => {
            setSelectedFn(value)
          }}
        >
        </Combobox>
        <Input
          className="w-full"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
          suffix={
            userInput && (
              <Button
                className="text-muted hover:text-white"
                variant="link"
                onClick={() => {
                  setUserInput("");
                  setDebouncedValue("");
                }}
              >
                <X size={14} />
              </Button>
            )
          }
        />
      </motion.div>

      <motion.div className="w-full" exit={"hidden"} variants={fadeInFromBottom}>
        <h2 className="text-xl border-b mb-4 py-4 font-extrabold tracking-tighter ">
          Resultado
        </h2>
        <p>
          <span className="inline-block mr-2">
            <strong>Length</strong>: {TextProcessing.GetLength(userInput)} ,
          </span>
          <span className="inline-block mr-2">
            <strong>Characters</strong>:{" "}
            {TextProcessing.GetCharacterCount(userInput)} ,
          </span>

          <span className="inline-block mr-2">
            <strong>Words</strong>: {TextProcessing.GetWordCount(userInput)},
          </span>
          <span className="inline-block mr-2">
            <strong>Accents</strong>:{" "}
            {TextProcessing.GetAccentsCount(userInput)},
          </span>

          <span className="inline-block mr-2">
            <strong>Spaces</strong>: {TextProcessing.CountSpaces(userInput)}
          </span>
        </p>
        <motion.div
          animate="visible"
          initial="hidden"
          exit={"hidden"}
          transition={{ duration: 1 }}
          variants={fadeInFromBottom}
          className=" min-h-[200px] w-full my-8 text-lg text-muted-foreground border rounded-md"
        >
          <p className="text-lg p-4 text-muted-foreground h-full w-full break-words">
            {debouncedValue}
          </p>
        </motion.div>
        <Button
          disabled={!debouncedValue}
          onClick={() => {
            copy(debouncedValue as string);
            setIsCopyped(true);
          }}
          title={`Copiado! - < ${copiedValue} >` || ""}
        >
          {isCopyped ? "Copiado" : "Copiar"}
        </Button>
      </motion.div>
    </div>
  );
};

export default TextTransform;
