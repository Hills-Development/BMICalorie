document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateCalorieButton').addEventListener('click', function() {
        document.getElementById('result').innerText = calculateCalories();
        document.getElementById('topText').innerText = 'You burned:';
        document.getElementById('bottomText').innerText = 'Calories';
    })
})

function calculateCalories() {
    let met;
    const sport = document.getElementById('sport').value;
    const gender = document.getElementById('gender').value;
    const minutes = document.getElementById('time').value;
    const weight = document.getElementById('weight').value;

    let genderValue;
    if (gender == 'male') {
        genderValue = 1
    } else {
        genderValue = 0.92
    }

    switch (sport) {
        case 'walking':
            met = 3.0
            break
        case 'tennis':
            met = 5.0
            break
        case 'cycling':
            met = 6.0
            break
        case 'basketball':
            met = 8.0
            break
        case 'swimming':
            met = 9.0
            break
        case 'jogging':
            met = 8.8
            break
        case 'football':
            met = 10.3
            break
    }

    return met*weight*minutes/60*genderValue;
}