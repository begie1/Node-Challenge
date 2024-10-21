
import { say } from 'cowsay';
import 'dotenv/config'

const { Name, Campus } = (process.env.campus, process.env.Name)
console.log(say({ text: "Hello I'm Bergeline from Reims!" }));
