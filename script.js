$(document).ready(function() {
    
    // $.get('https://dog.ceo/api/breeds/image/random/').done
    //     (function (data) {
    //         $('#randomDogCarouselOne').html(renderDogImage(data.message))
    //         })
    //         .fail(function (error) {
    //         console.log(error);
    //         });
        
    // setInterval (function() {
    //     $.get('https://dog.ceo/api/breeds/image/random/').done
    //         (function (data) {
    //             $('#randomDogCarouselOne').html(renderDogImage(data.message))
    //             $('#randomDogCarouselTwo').html(renderDogImage(data.message));
    //             })
    //             .fail(function (error) {
    //             console.log(error);
    //             })
    //     }, 4000);

    $('#generateRandomDog').click(function() {
        console.log('button clicked')
        $.get('https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random/').done
            (function (data) {
                console.log(data);
                $('#randomDogImage').html(renderDogImage(data.message));
                // $('#randomDogImage').css("max-height");
            })
            .fail(function (error) {
                console.log(error);
            })
        });
        
    
   
    $('#submitButton').click(function(event) {
        
        event.preventDefault();
        console.log('submit button clicked')

        // var params = $(this).serializeArray();

        // console.log(params);
        
        var favoriteDog = document.getElementById('favoriteDogFormInput').value;

        var favoriteDog = favoriteDog.toLowerCase();
        console.log(favoriteDog);

        
        
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
    <a href="${image}" data-lightbox="${image}" data-title="Mmmm that's a good boy."><img src="${image}" class="mw-100 center mh-100" /></a>
    `;
}


// var submittedUserInfo = {
//     email: $('emailFormInput'),
//     name: $('nameFormInput'),
//     info: $('moreInfoFormInput')
// }

