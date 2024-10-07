// Wait for the DOM to be fully loaded
// Get the table element
const dataTable = document.getElementById('data-table');

// Create table header
const tableHeader = `
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Date</th>
            <th>Street Address</th>
            <th>City</th>
            <th>State</th>
            <th>Post Code</th>
            <th>Aadhar Card</th>
            <th>Pan Card</th>
            <th>Email ID</th>

        </tr>
    </thead>
`;

// Add the header to the table
dataTable.innerHTML = tableHeader;

// Create table body
const tableBody = document.createElement('tbody');
dataTable.appendChild(tableBody);
document.addEventListener("DOMContentLoaded", () => {
    // Get the form and table elements
    const form = document.getElementById('employeeForm');
    const tableBody = document.querySelector('#data-table tbody');

    // Pre-fill the date of birth options
    const dobDay = document.getElementById('dobDay');
    const dobMonth = document.getElementById('dobMonth');
    const dobYear = document.getElementById('dobYear');

    // Populate days (1-31)
    for (let day = 1; day <= 31; day++) {
        dobDay.innerHTML += `<option value="${day}">${day}</option>`;
    }

    // Populate months
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    months.forEach((month, index) => {
        dobMonth.innerHTML += `<option value="${month}">${month}</option>`;
    });

    // Populate years (1925 to current year)
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1925; year--) {
        dobYear.innerHTML += `<option value="${year}">${year}</option>`;
    }

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload on form submit

        // Get the form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const birthDate = `${dobMonth.value} ${dobDay.value}, ${dobYear.value}`;
        const address1 = document.getElementById('address1').value;
        const address2 = document.getElementById('address2').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const postcode = document.getElementById('postcode').value;
        const aadharcard = document.getElementById('aadharcard').value;
        const pancard = document.getElementById('pancard').value;
        const emailid = document.getElementById('emailid').value
        

        // Add a new row to the table
        const newRow = `
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${birthDate}</td>
                <td>${address1} ${address2}</td>
                <td>${city}</td>
                <td>${state}</td>
                <td>${postcode}</td>
                <td>${aadharcard}</td>
                <td>${pancard}</td>
                <td>${emailid}</td>
                
            </tr>
        `;
        tableBody.innerHTML += newRow;

        // Clear the form fields after submission
        form.reset();
    });
});