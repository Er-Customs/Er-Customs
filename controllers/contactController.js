const contact = require("../Models/contactSchema");
module.exports.contact_post = async (req, res) => {
    try{
        const contactus  = new contact(req.body);
        await contactus.save()
        res.render('contact');
    }    
    catch{
        alert('Sorry Something went wrong and we couldnot send data');
    }
}