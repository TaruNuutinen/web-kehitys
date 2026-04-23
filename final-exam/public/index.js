async function loadCustomers() {
  const container = document.getElementById("customer-list");

  try {
    const res = await fetch("/api/persons");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    // Clear placeholder
    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "<p>No customers found.</p>";
      return;
    }

    // Create simple list
    data.forEach(person => {
      const div = document.createElement("div");
      div.className = "customer-card";

      div.innerHTML = `
        <strong>${person.first_name} ${person.last_name}</strong><br>
        Email: ${person.email}<br>
        Phone: ${person.phone || "-"}
      `;

      div.addEventListener("click", () => {
        console.log("Customer clicked:");
        console.log(person);
        selectCustomer(person);
      });

      container.appendChild(div);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = "<p style='color:red;'>Error loading data</p>";
  }
}

// Run on page load
loadCustomers();

function selectCustomer(person) {
  // Täytä formi
  document.getElementById("customerId").value = person.id;
  document.getElementById("first_name").value = person.first_name;
  document.getElementById("last_name").value = person.last_name;
  document.getElementById("email").value = person.email;
  document.getElementById("phone").value = person.phone || "";
  document.getElementById("birth_date").value = person.birth_date
    ? person.birth_date.substring(0, 10)
    : "";

  console.log("Customer loaded into form:", person);
}

/*
// DOM references
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const birth_date = document.getElementById("birth_date");
const customerId = document.getElementById("customerId");
*/
document.addEventListener("DOMContentLoaded", () => {
  loadCustomers();

  document.getElementById("add-btn").addEventListener("click", handleAddCustomer);
  document.getElementById("update-btn").addEventListener("click", handleUpdateCustomer);
  document.getElementById("delete-btn").addEventListener("click", handleDeleteCustomer);
});

async function handleAddCustomer() {
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const birth_date = document.getElementById("birth_date").value;

  const newPerson = { first_name, last_name, email, phone, birth_date };

  const res = await fetch("/api/persons", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPerson)
  });

  const data = await res.json();

  if (!data.ok) {
    alert(data.error);
    return;
  }

  document.getElementById("customer-form").reset();
  loadCustomers();
}

async function handleUpdateCustomer() {
  const id = document.getElementById("customerId").value;

  if (!id) {
    alert("Select a customer first");
    return;
  }

  const updatedPerson = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    birth_date: document.getElementById("birth_date").value
  };

  const res = await fetch(`/api/persons/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPerson)
  });

  const data = await res.json();

  if (!data.ok) {
    alert(data.error);
    return;
  }

  document.getElementById("customer-form").reset();
  loadCustomers();
}

async function handleDeleteCustomer() {
  const id = document.getElementById("customerId").value;

  if (!id) {
    alert("Select a customer first");
    return;
  }

  if (!confirm("Are you sure you want to delete this customer")) {
    return;
  }

  const res = await fetch(`/api/persons/${id}`, {
    method: "DELETE"
  });

  const data = await res.json();

  if (!data.ok) {
    alert(data.error);
    return;
  }

  document.getElementById("customer-form").reset();
  loadCustomers();
}


