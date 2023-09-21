function openEditMenu(triggerElement) {
    // Find the closest parent with class "card" (if any)
    let card = triggerElement.closest('.blockCardItem');

    // Check if the trigger element is inside a card
    if (card) {
        // This is a card on the first page
        let editWindow = card.querySelector('.edit-window');
        editWindow.classList.toggle('open-menu');
    } else {
        // This is not a card on the second page
        let editWindows = document.getElementsByClassName('edit-window');

        for (let i = 0; i < editWindows.length; i++) {
            editWindows[i].classList.toggle('open-menu');
        }
    }

    console.log('Open');
}