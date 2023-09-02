const express = require("express");
const router = express.Router();
const db = require("../data/db");

const data = {
    title: "Populer Kurslar",
    categories: ["Programlama", "PS Oyun", "PC Geliştirme", "Web Geliştirme", "Ofis Uygulamaları"],
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
    res.render("users/blogs", data);
});

router.use("/", function (req, res) {
    
    db.execute("select * from blog")
        .then(result => {
            res.render("users/index", {
                title: "Popüler Kurslar",
                blog : result[0],
                categories: data.categories 
            });
        }).catch(err => console.log(err));

});

db.query("select * from blog", function (err, result) {
    console.log(result);
})


module.exports = router;