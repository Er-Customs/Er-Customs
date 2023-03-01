const package = require("../Models/packageSchema");
const payment = require("../Models/paymentSchema");
const toform = require("../Models/toformSchema");
const whereform = require("../Models/whereformSchema");


module.exports.form_post = async (req, res) => {

        try {
                const whereadd = new whereform(req.body);
                const toadd = new toform(req.body);
                const pack = new package(req.body);
                const pay = new payment(req.body);

                await whereadd.save()
                await toadd.save()
                await pack.save()
                await pay.save()
                res.render('form');
        }
        catch {
                alert('Sorry Something went wrong and we couldnot send data');
        }
}