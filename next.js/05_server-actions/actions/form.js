"use server"
import fs from 'fs/promises';

export const submitAction = async (e) => {
    "use server"
    console.log(e.get("name"),e.get("pass"));
    let a = await fs.writeFile("Pass.txt", `Username is ${e.get("name")} and Password is ${e.get("pass")}`)
    console.log(a)
  }