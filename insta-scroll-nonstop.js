// Replace 'yourElementClass' with the actual class of the element you want to scroll
const element = document.querySelector(".yourElementClass");

function scrollToBottom() {
  // Scroll the element to its bottom-most point
  element.scrollTop = element.scrollHeight;
}

// Call scrollToBottom function every 5 seconds
setInterval(scrollToBottom, 5000);
