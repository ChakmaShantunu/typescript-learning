
let anything: any;

anything = 'shantunu';



const kgToGmConvert = (input: string | number): string | number | undefined => {
    if (typeof input === 'number') {
        return input * 1000;
    } else if (typeof input === 'string') {
        const [value] = input.split(" ");
        return `Converted output is : ${Number(value) * 1000}`
    }
}

const result1 = kgToGmConvert(2) as number;

const result2 = kgToGmConvert('2 kg') as string;

console.log(result1, result2);

type CustomError = {
    message: string;
}
try {

} catch (error) {
    console.log((error as CustomError).message);
}