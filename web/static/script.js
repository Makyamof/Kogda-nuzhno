function checkRobot() {
    fetch('/check_robot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({action: 'check_robot'})
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Вы не робот!');
        } else {
            alert('Проверка не пройдена.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка. Попробуйте снова.');
    });
}
