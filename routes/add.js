var express = require('express');
var router = express.Router();

const UserController = require('../controller/addData');

router.get('/tambah-data-pengguna', UserController.form_pengguna_add);
router.post('/tambah-data-pengguna', UserController.create_pengguna);

// GET tambah kematian.
router.get('/tambah-data-kematian', function (req, res, next) {
    res.render('tambah-data-kematian');
});
router.get('/tambah-data-pindah', function (req, res, next) {
    res.render('tambah-data-pindah');
});

router.get('/tambah-data-keluarga', UserController.form_keluarga);
router.post('/tambah-data-keluarga', UserController.create_keluarga); 

// GET tambah penduduk.
// router.get('/tambah-data-penduduk', UserController.form)
// router.post('/tambah-data-penduduk', UserController.create); 



router.get('/tambah-data-masuk', function (req, res, next) {
    res.render('tambah-data-masuk');
});



// router.get('/tambah-pengguna', UserController.form_pengguna_add);


router.get('/tambah-data-umkm',function(req,res,next){
    res.render('tambah-data-umkm');
});

// GET tambah publikasi.
// router.get('/tambah-data-publikasi',function(req,res,next){
//     res.render('tambah-data-publikasi');
// });

// GET tambah publikasi.
router.get('/tambah-data-publikasi',UserController.form_publikasi_add);
router.post('/tambah-data-publikasi',UserController.create_publikasi);

router.get('/tambah-data-kelahiran', UserController.form_kelahiran); 
router.post('/tambah-data-kelahiran', UserController.create_kelahiran); 

router.get('/tambah-data-penduduk', UserController.form_penduduk);
router.post('/tambah-data-penduduk', UserController.create_penduduk);

module.exports = router;    