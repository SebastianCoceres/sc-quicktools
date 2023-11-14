import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import * as TextProcessing from "@/lib/TextProcessing";
import { AnimatePresence, motion } from "framer-motion";
import { Info, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import Description from "../../components/ui/descriptions";
import { functionsData } from "./functionDescriptions";

const list = { hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } };
const result = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const selectOptions = Object.keys(TextProcessing).map((key, i) => {
  return (
    <SelectItem key={i} value={key}>
      {key}
    </SelectItem>
  );
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
      if (!value) return;

      if (!selectedFn) {
        toast({
          title: "Function is needed",
          description: "Please select a function",
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
          Text Transform
        </h1>
        <Dialog>
          <DialogTrigger>
            <Info />
            <span className="sr-only">Funcitions description</span>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90svh] overflow-y-auto">
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
        variants={list}
        className="w-full my-8 text-lg text-muted-foreground flex flex-col md:flex-row gap-4"
      >
        <Select onValueChange={(value) => setSelectedFn(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a function" />
          </SelectTrigger>
          <SelectContent>{selectOptions}</SelectContent>
        </Select>
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

      <AnimatePresence>
        {userInput && debouncedValue && selectedFn && (
          <motion.div exit={"hidden"} variants={result}>
            <h2 className="text-xl border-b mb-2 py-4 font-extrabold tracking-tighter ">
              Result
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
                <strong>Words</strong>: {TextProcessing.GetWordCount(userInput)}
                ,
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
              variants={result}
              className="max-w-[700px] min-h-[200px] w-full my-8 text-lg text-muted-foreground border rounded-md"
            >
              <p className="text-lg p-4 text-muted-foreground h-full w-full break-words">
                {debouncedValue}
              </p>
            </motion.div>
            <Button
              onClick={() => {
                copy(debouncedValue as string);
                setIsCopyped(true);
              }}
              title={`Copied! - < ${copiedValue} >` || ""}
            >
              {isCopyped ? "Copied" : "Copy"}
            </Button>
          </motion.div>
        )}
        ¡
      </AnimatePresence>
    </div>
  );
};

export default TextTransform;
