const express = require("express");
const router = express.Router();

const data = {
    title:"Populer Kurslar",
    categories: ["Programlama","PS Oyun", "PC Geliştirme","Web Geliştirme", "Ofis Uygulamaları"],
    blogs: [
        {
            blogId: 1,
            baslik: "Kopmle sıfırdan java",
            aciklama: "Sıfırdan ile düzey Web Geliştirme",
            resim: "1.jpg",
            anasayfa: false
        },
        {
            blogId: 2,
            baslik: "Kopmle sıfırdan C++",
            aciklama: "Sıfırdan ile düzey Web Geliştirme",
            resim: "1.jpg",
            anasayfa: true
        },
        {
            blogId: 3,
            baslik: "Kopmle sıfırdan C#",
            aciklama: "Sıfırdan ile düzey Web Geliştirme",
            resim: "1.jpg",
            anasayfa: false
        },
    ]
}

router.use("/blogs/:blogid/", function (req, res) {
    res.render("users/blog-details");
});

router.use("/blogs", function (req, res) {
    res.render("users/blogs",data);
});

router.use("/", function (req, res) {
    res.render("users/index",data);
});

module.exports = router;