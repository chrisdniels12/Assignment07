// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [12345678, 'Beyonce Knowles', 4545, 'beyonce@knowles.com', 'Quality Assurance'],
    [87654321, 'Chris Rock', 2222, 'chris@rock.com', 'Engineering'],
    [10864210, 'Chris Pratt', 9909, 'chris@pratt.com', 'Sales'],
    [13691215, 'Jason Statham', 1234, 'jason@statham.com', 'Marketing'],
    [24681012, 'Dua Lipa', 9876, 'dua@lipa.com', 'Executive']
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !== null) {
    employees = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
let addForm = document.getElementById('addForm')
let empTable = document.getElementById('empTable')
let empCount = document.getElementById('empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let extension = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value

    // ADD THE NEW EMPLOYEE TO THE ARRAY
    employees.push([id, name, extension, email, department])

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    addForm.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Do you want to delete this employee?')) {
            // GET THE SELECTED ROW INDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex - 1, 1)

            // BUILD THE GRID
            buildGrid()
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REBUILD THE TABLE BODY FROM SCRATCH
    let tbody = ''
    for (let employee of employees) {
        tbody +=
            `<tr>
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td>${employee[3]}</td>
                <td>${employee[4]}</td>
                <td><button class='btn btn-danger btn-sm delete'>X</button></td>
            </tr>`
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.innerHTML = tbody

    // UPDATE EMPLOYEE COUNT
    empCount.innerText = employees.length

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
}
