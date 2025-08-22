let list = [];

function tampilkan() {
    const displayList = document.getElementById("display");
    displayList.innerHTML = ""; // kosongkan container




    list.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "item";

        const span = document.createElement("span");
        span.textContent = item;

        // tombol edit
        const editBtn = document.createElement("button");
        editBtn.className = "btn"
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            const newValue = prompt("Edit task:", list[index]);
            if (newValue !== null && newValue.trim() !== "") {
                list[index] = newValue.trim();
                tampilkan();
            }
        });

        // tombol hapus
        const delBtn = document.createElement("button");
        delBtn.className = "btn1"
        delBtn.textContent = "Hapus";
        delBtn.addEventListener("click", () => {
            list.splice(index, 1);
            tampilkan();
        });

        // gabungkan teks + tombol ke row
        row.append(span, editBtn, delBtn);

        // tambahkan row ke container
        displayList.append(row);
    });
}



function add() {
    let tambah = document.getElementById("input").value;
    if (tambah !== "") {
        list.push(tambah);
        tampilkan();
        document.getElementById("input").value = "";
    }

}