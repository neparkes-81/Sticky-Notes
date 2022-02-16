const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => {
    addNewNote();
})

function addNewNote(){
    const note  = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = 
            `<div class="notes">
                <div class="tools">
                    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
                </div>
                <div class="main hidden"></div>
                <textarea></textarea>
            </div>`
            ;

    document.body.appendChild(note);
        
    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    deleteBtn.addEventListener('click', () => {
        note.remove();
    })

    textarea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked.parse(value);
    })


}
