const tagsEl= document.getElementById('tags')
const textarea = document.getElementById('textarea')
// these are the two things i want to bring in.


//when we go to the page it automatically put the cursor out there!

textarea.focus()


// we want event listener in the text area so add eventlistener.
textarea.addEventListener('keyup' , (e)=> {
     createTags(e.target.value)
})

function createTags(input)
    {
        // console.log(input);
        const tags = input.split(',')
        console.log(tags)
    }