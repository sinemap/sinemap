---
title: Blog tasarımının sonu (şimdilik)
tags: [tasarım, web]
---

Geçen 10 gün, tüm zamanımı blogumu yenilemeye harcadım. Resmen her gün sabah kalkınca başlayıp yatana kadar blogumun tasarımı, kodların temizlenmesi, yeni sayfaların oluşturulması, sitenin hızının optimize edilmesi gibi işlerle uğraştım. Jekyll liquid, html, css ve benzeri konulardaki bilgilerimin güncellenmesi için bir sürü makale okumak, site istediğim hale gelinceye kadar yüzlerce kere güncelleme yapmak durumunda kaldım. Şimdi en son geldiği halden memnunum, yani en azından şimdilik. 

Başlıca hedefim okunabilirliği artırmak, bunun için de içeriğin en sade, göz yormayan biçimde sunulabileceği bir tasarım oluşturmaktı. İlk önce sitenin renklerini ve kullandığım fontları doğru belirlemenin yeterli olacağını düşünmüştüm. Sonra deneyip yanıldıkça, typography'nin beyaz alanları yönetmekle güçlü şekilde bağlı olduğunu ve ''modular scale'', ''grid layouts'', ''vertical rhytym'' gibi şeyleri dikkate almam ve öğrenmem gerektiğini fark ettim. Bunları uygulamak oldukça zaman aldı. 

Yaptığım değişikliklerin özeti şöyle:  

## 1. Sadeleştirme
- Ana sayfadaki ve yazı sayfalarındaki thumbnail resimlerini kaldırdım. Bunda sadeleştirme kadar sitenin hızı da önemli bir kaygıydı.
- Footer'daki ''En son yazılar'', ''Kategoriler'' gibi başlıkları kaldırdım. Bunların olduğu bu kadar geniş bir bir footer, en azından bir blogging sitesi için, 10 yıl öncesinde kalmış gibi geldi. Şimdi küçük ama öz bir footer'a sahibim. İletişim için kullanılabilecek <caps>RSS</caps>, e-mail, twitter linklerini yazısız, sadece logo olarak uyguladım. En önemlisi, sık sık güncellenmeyen hakkında ve makaleler linklerini header'dan footer'a taşıdım.

## 2. Organizasyon
- Sadeleştirme görevime rehberlik etmesi için bir [stil sayfası](https://karateke.github.io/teknoloji/2016/01/01/stil-rehberi) hazırladım. Burada blogda kullanılabilecek aşağı yukarı her formatın stilini belirledim. Bu da formatların birbirleriyle uyumu konusunda yardımcı oldu. 
- Organizasyon konusundaki en önemli değişim Yazılar'ın yanı sıra şimdi bir de ''Notlar'' başlığı altında daha gündelik yazılarımı toplayabileceğim bir sayfayı oluşturmam oldu. Bunu Jekyll'in ''collections'' özelliği sayesinde yaptım. Beklediğimden kolay oldu açıkçası. Şu okuduğunuz metin de sözü geçen notlardan biri. Notlarda yazının başında bir ana resim kullanmıyorum. Yazı içinde de resim, video, tablo vs. gibi elementleri oldukça az kullanmaya çalışacağım. Bunun sebebi yazmak ile yayınlamak arasındaki zamanı en aza indirmek, görsellikten ziyade içeriğe odaklanmak ve daha fazla yazmak. Bakalım nasıl oluyor. 
- Ayrıca footer'a ''Kitaplık'' diye bir bölüm ekledim. Belki buraya okuduklarımın kısa bir değerlendirmesini yapabilirim. Tam emin değilim o sayfayı nasıl kullanacağım konusunda. 

## 3. Optimizasyon
- Sanırım, tüm bunlar içerisinde en fazla zaman harcadığım ''responsive'' bir tasarım oluşturmaktı.  Yani mobil, tablet, dizüstü, masaüstü aygıtlarda okuyucu deneyimini optimum düzeyde tutabilen bir sonucu hedefledim. Bunu yaparken, en başta piksel'den ''em'' ölçü birimine geçiş yapmam gerekti, ki bir daha da geri dönüş yapmam. Canını yiyeyim em'in. 
- Font seçimi konusunda baya düşündüm. Open type özelliklere sahip olması, uzun yazı formatına uygun olması, haliyle Türkçe karakterleri kapsaması, çok alışıldık olmaması gibi bazı kriterlerim vardı. Önce sans-serif bir font kullanmayı denedim. Ama uzun yazılar için bunun okumayı zorlaştırıcı bir etkisinin olduğunu düşündüm. Sonra metinler için serif ve header, footer ve küçük yazılar için sans-serif kombosunu denedim. Fena olmadı ama Typekit'ten servis edilen fontların ağırlığı artırdığı için bundan da vazgeçtim. Son olarak küçük yazı boyutlarında da netliğini koruyan [FF Meta Serif'te](http://metaserif.com) karar kıldım. Bu font efsane font tasarımcısı Erik Spiekermann'ın ''FF Meta'' adlı meşhur sans-serif fontuna eşlik etmesi için yaratılmış. Spiekermann bu fontun tasarımında, benim gözümde çağımızın en _promising_ font tasarımcılarından olan Christian Schwartz ve Kris Sowersby ile ortaklaşa çalışmış. Belki de Garamond tarzı fontlara çok alışkın olduğumdan, bir serif olarak FF Meta Serif'e kolay alışamadım. Ama şimdi pek severek kullanıyorum. 
- Dipnotlar için [bigfoot.js](http://www.bigfootjs.com) diye bir plugin kullanmaya başladım. <ins>11 Eylül 2018</ins>
- Son olarak çok işlevli görmediğim ve siteyi yavaşlatabilecek birkaç script'i kaldırdım.

## 4. Beceremediklerim
- <del>Srcset'i öğrendiğimi düşünüyorum ama bir türlü siteme uygulayamadım. Üzdü. Belki ilerde yine denerim.</del> <ins> Şimdi oldu galiba. </ins>
- Gulp.js'yi Jekyll ile birlikte kullanmak istemiştim. Bu bildiğin beni aştı. Neyse yav. 
- \<a\> tagı içerisindeki svg dosylarına halen ''fill'' transition efektini kullanamıyorum. <mark> Bu Safari'nin bir bug'ı sanırım. </mark>
- <del> Notlar ve kategoriler için sayfalandırma (pagination) yok. Jekyll paginate v2'yi kullanmak istedim ama Github custom pluginleri kabul etmediğinden olmadı. Bunun için Travis CI kurmak gerekiyordu. Onu deneyip beceremedim. Bu işte can sıkıcı.</del> <ins>Becerdim. Ehehe</ins>

## 5. Yeni öğrendiğim şeyler
- Flexbox. Acayip kullanışlı. 
- Em. En azından bunu daha aktif olarak kullanmayı öğrendim. 
- Srcset. Çok kullanışlı görünüyor. Öğrendim ama uygulayamadım.
- Grids. Biraz biraz. 
- Jekyll collections. Bu kolaymış zaten. 

Eyi güzel de, altı üstü bir blog. Yazdıklarımı okuyan kişi sayısı belli. Tasarımcı değilim. Niye bu kadar kastım? Bilmiyorum, takıntılıyım herhalde. Yaptığım şeylerdeki kusurlar rahatsız ediyor. Umarım uzun bir süre sadece yazarım ve bu işlerden biraz uzak dururum. Bakalım. 
