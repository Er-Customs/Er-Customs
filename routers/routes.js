const express = require('express')
const authController = require('../controllers/authController');
const contactController = require('../controllers/contactController');
const formController = require('../controllers/formController');
const { requireAuth }=require('../middleware/authMiddleware');

const Router = express.Router()

Router.get('/',(req,res)=>{
    res.render('index')
})
Router.get('/category',(req,res)=>{
    res.render('category')
})
Router.get('/contact',(req,res)=>{
    res.render('contact')
})
Router.get('/form', requireAuth,(req,res)=>{
    res.render('form')
})
Router.get('/listing',(req,res)=>{
    res.render('listing')
})
Router.get('/signup', authController.signup_get);
Router.post('/signup', authController.signup_post);
Router.get('/login', authController.login_get);
Router.post('/login', authController.login_post);
Router.get('/logout', authController.logout_get);
Router.post('/contact', contactController.contact_post);
Router.post('/form', formController.form_post);




module.exports = Router;