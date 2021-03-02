const smallCups = document.querySelectorAll('.cup');
const percentage = document.getElementById('percentage')
const lrgCup = document.querySelector(".lrg-cup span")

updateBigCup();

smallCups.forEach((cup,idx) => {
    cup.addEventListener('click', () => fillCups(idx))
})

function fillCups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallCups.forEach((cup,idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })
    updateBigCup();
}

function updateBigCup() {
    // set variables to get percentage
    const fullCups = document.querySelectorAll(".cup.full").length;
    const totalCups = smallCups.length;
    
    // if there is no water

    if(totalCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups/ totalCups * 300}px`
        lrgCup.innerHTML = `${(100 - (fullCups/totalCups * 100))}%`
    }

    // if the big cup is full

     if(totalCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups/ totalCups * 300}px`
        lrgCup.innerHTML = `${(100 - (fullCups/totalCups * 100))}%`
    }

}
