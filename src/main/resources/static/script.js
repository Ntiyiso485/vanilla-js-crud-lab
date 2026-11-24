
const employeeForm = document.getElementById("employeeForm");

employeeForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const employee = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value
    };

    try {

        const response = await fetch("/api/Employee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        });

        if (!response.ok) {
            throw new Error("Failed to register employee");
        }

        const savedEmployee = await response.json();

        alert("Employee registered successfully! ID: " + savedEmployee.id);

        employeeForm.reset();

    } catch (error) {

        console.error(error);
        alert("Something went wrong while registering employee.");

    }

});
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async function () {

    const id = document.getElementById("employeeId").value;
    const message = document.getElementById("message");

    if (!id) {
        message.textContent = "Please enter an employee ID.";
        return;
    }

    try {

        const response = await fetch(`/api/Employee/${id}`);

        if (!response.ok) {
            throw new Error("Employee not found");
        }

        const employee = await response.json();


        document.getElementById("updateName").value = employee.name;
        document.getElementById("updateSurname").value = employee.surname;
        document.getElementById("updateEmail").value = employee.email;

        message.textContent = "Employee found successfully!";
        message.style.color = "green";

    } catch (error) {

        message.textContent = error.message;
        message.style.color = "red";

    }

});



const updateEmployeeForm = document.getElementById("updateEmployeeForm");

updateEmployeeForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    const id = document.getElementById("employeeId").value;

    const employee = {
        name: document.getElementById("updateName").value,
        surname: document.getElementById("updateSurname").value,
        email: document.getElementById("updateEmail").value
    };

    try {

        const response = await fetch(`/api/Employee/${id}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(employee)

        });

        if (!response.ok) {
            throw new Error("Failed to update employee");
        }

        const updatedEmployee = await response.json();

        alert("Employee updated successfully! ID: " + updatedEmployee.id);

        updateEmployeeForm.reset();

    } catch (error) {

        console.error(error);
        alert("Something went wrong while updating employee.");

    }

});
const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", async function () {

    const id = document.getElementById("deleteId").value;

    if (!id) {
        alert("Please enter an employee ID.");
        return;
    }

    const confirmDelete = confirm(
        "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) {
        return;
    }

    try {

        const response = await fetch(`/api/Employee/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Employee not found or deletion failed.");
        }

        alert("Employee deleted successfully!");

        document.getElementById("deleteId").value = "";

    } catch (error) {

        console.error(error);
        alert(error.message);

    }
});
