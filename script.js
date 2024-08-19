
// const addbtn = document.querySelector(".adbtn");
// const main = document.querySelector("#main");

// // {/* <div class="notes">
// //             <div class="tool">
// //                 <i class="fa-solid fa-floppy-disk"></i>
// //                 <i class="fa-solid fa-trash"></i>
// //             </div>
// //             <textarea></textarea>
// //         </div> */}

// const saveNote = () => {
//     const note = document.querySelectorAll(".notes textarea");
//     const data = [];
//     note.forEach((notes) => {
//         data.push(notes.value);
//     });
//     console.log(data);
//     if(note.length === 0){
//       localStorage.removeItem("notes")
//     }
//     else{

//         localStorage.setItem("notes", JSON.stringify(data))
//     }
// }

// const addnote = (text = "") =>{
//     const note = document.createElement("div");
//     note.classList.add("notes");
//     note.innerHTML = `<div class="tool">
//                 <i class=" save fa-solid fa-floppy-disk"></i>
//                 <i class=" trash fa-solid fa-trash"></i>
//             </div>
//             <textarea>${text}</textarea>`;
            
//             note.querySelector(".trash").addEventListener("click", () =>{
//                 note.remove();
//                 saveNote();
//             })
//             note.querySelector(".save").addEventListener("click", () =>{
//                 saveNote();
//             })

//             main.appendChild(note);
//            saveNote()
// }
// (
//     function(){
//         const stNotes = JSON.parse(localStorage.getItem("notes"));
//         if(stNotes === null){
//             addnote();
//         }
//         else{
//             stNotes.forEach((notes) =>{
//                 addnote(notes)
//             })
//         }
//     }
// )()
// addbtn.addEventListener("click", () =>{
//     addnote();
// })


const adbtn = document.querySelector(".adbtn");
const main = document.querySelector("#main");


const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("notes");
    note.innerHTML = `<div class="tool">
                 <i class="save fa-solid fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash"></i>
           </div>
             <textarea>${text}</textarea>`
             note.querySelector(".trash").addEventListener("click", () => {
                note.remove();
                saveNote();
             })
             note.querySelector(".save").addEventListener("click", () => {
                saveNote()
             })
             note.querySelector("textarea").addEventListener("focusout", () => {
                saveNote();
             })
             main.append(note);
             saveNote();
}
const saveNote = () => {
    const text = document.querySelectorAll(".notes textarea");
    const data = [];
    text.forEach((insideText) => {
        data.push(insideText.value);
    });
    if(text.length === 0){
        localStorage.removeItem("notes");
    }
    else{

        localStorage.setItem("notes", JSON.stringify(data));
    }
}
(
    function(){
        const stNotes = JSON.parse(localStorage.getItem("notes"));
        if(stNotes === null){
            addNote();
        }
        else{
            stNotes.forEach((noteData) => {
                addNote(noteData);
            })
        }
    }
)();
adbtn.addEventListener("click", () => {
    addNote();
})
