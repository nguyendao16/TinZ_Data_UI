document.getElementById('send-button').addEventListener('click', function() {
  const message = document.getElementById('message').value;

  if (message.trim() === '') {
    alert('Vui lòng nhập tin nhắn!');
    return;
  }

  fetch('https://n8n-TinZ.aipencil.name.vn/webhook/sales_data_tinz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  })
  .then(response => {
    if (response.ok) {
      alert('Tin nhắn đã được gửi!');
      document.getElementById('message').value = ''; // Clear the input
    } else {
      alert('Có lỗi xảy ra khi gửi tin nhắn.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Không thể kết nối đến webhook.');
  });
});