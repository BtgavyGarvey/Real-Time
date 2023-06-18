let form = document.getElementById('lobby__form')

const display_name = sessionStorage.getItem('display_name')

if(display_name){
    form.name.value = display_name
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    sessionStorage.setItem('display_name', e.target.name.value)

    let inviteCode = e.target.room.value
    if(!inviteCode){
        inviteCode = String(Math.floor(Math.random() * 1000000000000000))
    }

    let members = channel.getMembers()

    if (members >= 3) {
        alert('Access Denied!!! Maximum number of members in the meeting has been reached.')
        window.location = '/'
        
    }

    window.location = `room?room=${inviteCode}`


})