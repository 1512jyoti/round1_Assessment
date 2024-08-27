document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', function () {
            // Remove expanded class from all boxes before expanding the clicked one
            boxes.forEach(b => b.classList.remove('expanded'));
            
            // Toggle expanded class for the clicked box
            this.classList.toggle('expanded');
        });
    });
});
