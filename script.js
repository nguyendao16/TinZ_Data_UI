document.getElementById('send-button').addEventListener('click', function() {
  const message = document.getElementById('message').value;

  if (message.trim() === '') {
    document.getElementById('response-box').textContent = 'Vui lòng nhập tin nhắn!';
    return;
  }

  fetch('https://n8n-TinZ.aipencil.name.vn/webhook/sales_data_tinz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  })
  .then(response => response.text()) // Đọc phản hồi dưới dạng text
  .then(data => {
    document.getElementById('response-box').textContent = data; // Hiển thị phản hồi trong response-box
    document.getElementById('message').value = ''; // Xóa nội dung tin nhắn
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('response-box').textContent = 'Không thể kết nối đến webhook.';
  });
});