console.log('js로딩');

document.getElementById('jsonSendBtn').addEventListener('click', async() => {
    const data = document.getElementById('jsonInput').value;
    const res = await fetch('/submit-json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: data
    });
    //미션2. response의 바디를 프런트엔드에 출력하시오
    const reply = await res.json();
    const output = document.getElementById('output');
    output.innerText = JSON.stringify(reply);

});

document.getElementById('formSubmit').addEventListener('click', async (ev) => {
    ev.preventDefault();

    const name = document.getElementById('formName').value;
    const age = document.getElementById('formAge').value;

    // const jsonData = {
    //     name: name,
    //     age: age
    // }

    // const res = await fetch('/submit-form', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify(jsonData)
    // });

    const params = new URLSearchParams();
    params.append('name', name);
    params.append('age', age);

    const res = await fetch('/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: 
    })
});

document.getElementById('textSendBtn').addEventListener('click', async () => {
    const text = document.getElementById('textInput').value;
});