const listInput = document.querySelector('.list-input')
const addBtn = document.querySelector('.add')
const list = document.querySelector('.list')
const total = document.querySelector('.total')

addBtn.addEventListener('click', function(){
    /// checking if input is valid
    if(listInput.value.length < 2){
        return alert('Add a valid item to the list')
    }

    // adding item to list
    list.innerHTML += `
    <div class="todo">
        <h2>${listInput.value}</h2>
        <div class="btns">
            <button class="complete">complete</button>
            <button class="edit">edit</button>
            <button class="delete">delete</button>
        </div>
    </div>
    `
    // emptying out input box after adding an item
    listInput.value = ''
    total.innerHTML = list.children.length

    const dtlbtns = document.querySelectorAll('.delete')

    dtlbtns.forEach(function(btn){
        btn.addEventListener('click', function(){
            let btnParent = btn.parentNode
            btnParent.parentNode.remove()
            total.innerHTML = list.children.length
        })
    })
})





























    // const dlt = document.querySelector('.delete')
    // dlt.addEventListener('click', function(){
    //     let dltParent = dlt.parentNode
    //     dltParent.parentNode.remove()
    //     total.innerHTML = list.children.length
    // })
