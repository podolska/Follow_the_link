function mainString () {
    // Get button "Go to link" and add listener
    const link = document.querySelector('.goToLink');
    link.addEventListener('click', checkLink);
    // Get button to clear the input field and add listener
    const clear = document.querySelector('.clearInput');
    clear.addEventListener('click', clearInput);

    function checkLink (e) {
        // Get input value
        const input = document.querySelector('input').value;
        try {
            // Check is there protocol http an the beginning of input value
            if((new RegExp('^(http)')).test(input.toLowerCase())) {
                // Add link to <a> in DOM
                link.setAttribute('href', input);
            } else {
                // Add link to <a> in DOM with http://
                link.setAttribute('href', `http://${input}`);
            }
        } catch (error) {
            e.preventDefault();
            const errorField = document.querySelector('.error');
            errorField.textContent = error;
        };
    };

    function clearInput () {
        // Clear value in the input field
        const input = document.querySelector('input');
        input.value = '';
    };
};

mainString();