
import React from "react";
function App () {
const names = ["Arjun", "mannu", "Anil", "Harika", "Azay"];
const filteredNames = names.filter((name) => name.startsWith("A"));
console.log(filteredNames)
return (
<div>
Names Starting with 'A'
</div>
);
}
export default App;