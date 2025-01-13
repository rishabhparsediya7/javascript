const sampleNestedObject = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "USA",
  },
  contact: {
    email: "johndoe@example.com",
    phone: {
      mobile: "+1-555-123-4567",
      home: "+1-555-987-6543",
    },
  },
  preferences: {
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    theme: "dark",
  },
  orders: [
    {
      orderId: "ORD123",
      date: "2025-01-01",
      items: [
        { productId: "P001", name: "Laptop", price: 1200 },
        { productId: "P002", name: "Mouse", price: 20 },
      ],
      total: 1220,
    },
    {
      orderId: "ORD124",
      date: "2025-01-05",
      items: [
        { productId: "P003", name: "Keyboard", price: 50 },
        { productId: "P004", name: "Monitor", price: 300 },
      ],
      total: 350,
    },
  ],
};

function sumNumericalValues(obj) {
  let total = 0;

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      total += obj[key];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      total += sumNumericalValues(obj[key]);
    }
  }

  return total;
}

const totalSum = sumNumericalValues(sampleNestedObject);
console.log("Total Sum of Numerical Values:", totalSum);
