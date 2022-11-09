const table = document.querySelector("table")

function makeRow(){
    const row = document.createElement("tr");

    // make a loop and repeat 20 times.
    let count = 20

    while (count > 0){
        count--;

        const cell = document.createElement("td");

        row.append(cell)
    }

    table.append(row)

};

const addBtn = document.querySelector("#add-row");

addBtn.addEventListener("click", ()=>{
    console.log("yaaay");
    makeRow();
})

const selectColor = document.querySelector("select")

table.addEventListener("click", (e)=>{
    console.log("table clicked!")

    console.log(e.target)

    // if(e.target === 'td'){

    // }

    // empty string is a falsy value
    if(e.target.className){
        e.target.className = "";
    }
    else{
        e.target.className = selectColor;
    }
})