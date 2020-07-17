$(document).ready(function() {
    $('#generateRandomDog').click(function() {
        console.log('button clicked')
        $.get('https://dog.ceo/api/breeds/image/random/').done
            (function (data) {
                console.log(data);
                $('#randomDogImage').html(renderDogImage(data.message));
            })
            .fail(function (error) {
                console.log(error);
            })
        });
        

    $('#submitButton').click(function(event) {
        
        event.preventDefault();
        console.log('submit button clicked')

        var favoriteDog = document.getElementById('favoriteDogFormInput').value;
        var favoriteDog = favoriteDog.toLowerCase();
        console.log(favoriteDog)

        
        $.get(`https://dog.ceo/api/breed/${favoriteDog}/images/random`).done
            (function (data) {
                console.log(data);
                $('#randomDogImage').html(renderDogImage(data.message));
                $('#submitButton').text('Ta-da! There is your doggo. Click again for more.')
            })
            .fail(function (error) {
                console.log(error);
                $('#submitButton').text('Sorry! That aint no doggo. Try again.');
                $('#randomDogImage').html('');

            });  
        });
    });


function renderDogImage(image){
    return `
    <a href="${image}" data-lightbox="${image}" data-title="Mmmm that's a good boy."><img src="${image}" class="mw-100" /></a>
    `;
}


// var submittedUserInfo = {
//     email: $('emailFormInput'),
//     name: $('nameFormInput'),
//     info: $('moreInfoFormInput')
// }

