
// Function to add hover effect to menu items
function addHoverEffect() {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
          item.style.backgroundColor = '#f8c88d';
          item.style.transition = 'background-color 0.3s ease';
      });
      item.addEventListener('mouseleave', () => {
          item.style.backgroundColor = '#fff';
          item.style.transition = 'background-color 0.3s ease';
      });
  });
}

// Call the function to add hover effect on page load
window.onload = addHoverEffect;

// Function to submit order for a menu item
function submitOrder(itemId) {
    const quantityInput = document.getElementById(`quantity${itemId}`);
    const quantity = parseInt(quantityInput.value);

    // Check if quantity is a positive number and within the range of 1-10
    if (isNaN(quantity) || quantity < 1 || quantity > 10) {
        const errorElement = document.getElementById(`error${itemId}`);
        errorElement.textContent = "Please enter a valid quantity (1-10)";
    } else {
        // Reset error message
        const errorElement = document.getElementById(`error${itemId}`);
        errorElement.textContent = "";

        // Submit order (you can implement this part as needed)
        const itemName = document.getElementById(`item${itemId}`).querySelector('h3').textContent;
        alert(`Order placed for ${quantity} ${itemName}(s)!`);
        // You can send the order data to a server or perform other actions here
    }
}
