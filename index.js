function submitData(usernameStr, emailStr){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: usernameStr,
            email: emailStr
        })
    })
        .then(resp => resp.json())
        .then(newUserObject => appendItem(newUserObject.id))
        .catch(errorObj => appendItem(errorObj.message))
}

function appendItem(item){
    const itemContainer = document.createElement('p')
    itemContainer.textContent = item
    document.body.appendChild(itemContainer)
}