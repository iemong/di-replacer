import { parse } from "https://deno.land/std@0.88.0/flags/mod.ts";

console.log(Deno.args);

const parsedArgs = parse(Deno.args)["_"];

const reg = new RegExp(/import|from/g);

parsedArgs.forEach((arg) => {
  if (!(typeof arg === "string")) return;
  const [component, path] = arg.split(reg).filter(s => !!s).map(s => s.trim());
  console.log(`${component}: () => import(${path})`)
});
