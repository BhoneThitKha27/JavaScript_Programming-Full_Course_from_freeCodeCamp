// When the user clicks the purchase button, render out

let errorParagraph = document.getElementById("error");
console.log(errorParagraph);
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

function purchase() {
    console.log("Purchase button clicked");
    errorParagraph.textContent = "Something went wrong, please try again";
}
