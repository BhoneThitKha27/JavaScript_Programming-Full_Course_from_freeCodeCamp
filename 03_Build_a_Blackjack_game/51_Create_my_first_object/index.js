// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let airbnbCastle = {
    isAvailable: true,
    name: "Enchanted Castle",
    pricePerNight: 450,
    amenities: ["WiFi", "Pool", "Breakfast", "Guided Tours"],
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    isSuperhost: true
}

console.log("Castle Name: " + airbnbCastle.name)
console.log("Amenities: " + airbnbCastle.amenities.join(", "))  