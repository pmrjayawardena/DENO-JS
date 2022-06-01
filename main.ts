
//this will get the user name of the computer and will as for permission when we run the code
console.log('hello',Deno.env.get("USER"));

//deno install --allow-env main.ts
//task runner
//drake is a MAKE like task runner for DENO
// https://deno.land/x/drake@v1.5.2