import cowsay from "cowsay";
import "dotenv/config";

console.log(cowsay.say({
    text : `Hello, I'm ${process.env.NAME} from ${process.env.CAMPUS}`,
    e : "oO",
    T : "U "
}));