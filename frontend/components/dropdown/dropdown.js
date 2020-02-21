

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
export const dropDownList = (e) => {
    document.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = (event) => {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.fa-user-circle')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }  
}
