import { desc, run, task,sh } from "https://deno.land/x/drake@v1.5.2/mod.ts";

desc("Minimal Drake task");
task("hello", [], async function () {
  console.log("Hello from drake!");
  await sh("Deno run --allow-env main.ts")
});

run();


// run with task name hello
// deno run -A Drakefile.ts hello