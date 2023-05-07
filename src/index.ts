console.log("Hello world");

const userInfo = [101, "Ema", "John", true, , "2023"];


//  const userTupple : (string | number |boolean | undefined | null)[] = userInfo;
const userInfoT: [number, string, string, boolean, string | undefined, string] = [101, "Ema", "John", true, undefined, "2023"];

console.log(userInfoT);