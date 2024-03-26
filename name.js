document.addEventListener('DOMContentLoaded', function () {
  let form = document.querySelector('form')

  form.addEventListener('submit', function (event) {
    let firstName = document.getElementById('firstname').value
    let lastName = document.getElementById('lastname').value

    alert('안녕하세요 ' + lastName + firstName + '님 반갑습니다')
  })
})
