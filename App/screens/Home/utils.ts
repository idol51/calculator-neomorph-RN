const operators = ["+", "-", "*", "/", ""];
let operandsIndex = 0;

export const handleKeypadPress = (key: string, operands: number[], setOperands: any) => {
    try {
        switch(key) {
            case "AC":
                setOperands([0])
                break;
            case "C":
                break;
            case "+":
                break;
            case "-":
                break;
            case "x":
                break;
            case "/":
                break;
            case "%":
                break;
            case "=":
                break;
            default:
                setOperands((prev: number[]) => {
                    console.log(prev);
                    
                    let temp = prev;
                    temp[operandsIndex] = temp[operandsIndex]*10 + Number(key);
                    return temp
                })
        }
    }
    catch (err) {
        console.log(err);
        setOperands([0])
    }
}