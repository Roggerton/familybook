var images = ["https://th.bing.com/th/id/R.ebab68d20b9e278a0b2a5ac14993a26b?rik=8BHn0zcaDWt79g&pid=ImgRaw&r=0","https://media3.giphy.com/media/xT0GqjBPbVkuO1Qdxu/giphy.gif","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvQLXid4wUqiQZtySHocWQ87KYDzCcj7bvQ&usqp=CAU", "https://thumbs.gfycat.com/ScientificImpressiveBetafish-max-1mb.gif"];
var names = ["Family Book", "Wayne Dickson","Priscilla Dickson", "Roger Dickson"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
