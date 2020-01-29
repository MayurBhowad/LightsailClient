const express = require('express');
const businessRoute = express.Router();

const app = express();

const Business = require('./models/business');

businessRoute.route('/add').post((req, res) => {
  let business = new Business(req.body);
  business.save()
    .then(business => {
      res.status(200).json({ 'business': 'business is add sucessfully' });
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

businessRoute.route('/').get((req, res) => {
  Business.find((err, business) => {
    if (err) {
      console.log(err);
    } else {
      res.json(business);
    }
  });
});

// Defined edit route
businessRoute.route('/edit/:id').get((req, res) => {
  let id = req.params.id;
  Business.findById(id, (err, business) => {

    res.json(business);

  })
});

//  Defined update route
businessRoute.route('/update/:id').post((req, res) => {
  Business.findById([{ _id: req.params.id }], (err, next, business) => {
    if (!business) {
      return next(new Error('Could not load document'));
    } else {
      business.person_name = req.body.person_name;
      business.business_name = req.body.business_name;
      business.business_gst_number = req.body.business_gst_number;

      business.save().then(business => {
        res.json('Update complet');
      })
        .catch(err => {
          res.status(400).send('unable to update');
        });
    }
  });
});

// Defined delete | remove | destroy route
businessRoute.route('/delete/:id').get((req, res) => {
  Business.findByIdAndRemove({ _id: req.params.id }, (err, business) => {
    if (err) {
      res.json(err);
    } else {
      res.json('Successfully removed');
    }
  });
});


module.exports = businessRoute;
