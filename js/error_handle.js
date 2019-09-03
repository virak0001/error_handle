const num1 = 10;
const num2 = 20;
try {
    if(num1 == num2) {
        console.log("yes");
    }else {
        console.log("):");
    }
}catch {
    console.error("Your code has someting wrong!!!");
}finally {
    console.warn("I aways running...");
}