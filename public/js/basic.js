document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
})

function loadHeader() {
    fetch('parts/header.html')
    .then(response => {
        // Make sure the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(htmldata => {
        // Insert the HTML data into the element
        document.getElementById('headerplaceholder').outerHTML = htmldata;
    })
    .catch(error => {
        console.log('Error: ', error);
    });
}


function loadFooter() {
    fetch('parts/footer.html')
    .then(response => {
        // Make sure the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(htmldata => {
        // Insert the HTML data into the element
        document.getElementById('footerplaceholder').outerHTML = htmldata;
    })
    .catch(error => {
        console.log('Error: ', error);
    });
}
