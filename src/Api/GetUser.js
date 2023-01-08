import React from "react";

export default async function Getuser() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    return data; 
  }

