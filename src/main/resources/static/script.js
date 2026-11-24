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