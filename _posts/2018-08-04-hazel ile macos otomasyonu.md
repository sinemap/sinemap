---
title: Hazel ile MacOS otomasyonu
category: teknoloji
image: assets/img/featured/apple.jpeg
tag: [bilgisayar]
description: Hazel uygulamasıyla dosya organizasyonu.
--- 
Hazel, Noodlesoft'un MacOS için geliştirdiği bir dosya otomasyon uygulaması. Örneğin bir pdf dökümanını belirli bir dosya içerisine aktarmak istediğinizde Hazel bunu sizin için yapabiliyor. Son birkaç yılda Mac uygulamalarına takıntı derecesinde bir ilgi geliştirdim. Denediğim türlü uygulamalar arasında Hazel kesinlikle en faydalı olanlardan biri.

Hazel, bilgisayarınızda Sistem Tercihleri'nin içerisinde yer alıyor, fakat Menu Bar'dan kolaylıkla erişilebilir. Menu Bar'da Hazel'in logosuna sağ tıklatıp Open diyerek, Hazel'in ana ekranına ulaşabilirsiniz. Burada, Trash tabı altında, Hazel'in çöp sepetini nasıl yöneteceğini belirlemek mümkün. Örneğin, aşağıdaki fotoda görüldüğü üzere, ben Hazel'den çöp sepetinde hiç bir dosyanın 1 haftadan fazla kalmamasını ve çöp sepetindeki tüm dosyaların toplam boyutunun hiçbir zaman 1GB'ı geçmemesini istemişim. Böylece, Hazel, 1 haftadan yaşlı belgeleri otomatik olarak siliyor ve çöp sepetini 1GB'ın altında tutuyor. Bu ekrandaki sevdiğim bir diğer özellikse App Sweep. Bilgisayarınızdaki bir uygulamayı sildiğinizde, Hazel bu uygulamaların destek dosyalarını bularak, bunları beraberinde silmeyi size öneriyor. Bilgisayarınızdaki gereksiz dosyalardan kurtulmak için etkili bir çözüm. 

![](/assets/img/others/1.png "Lordi lordi")

Fakat asıl aksiyonun gerçekleştiği yer Folders tabı altında. Burada bilgisayarınızdaki herhangi bir dosyanın nasıl yönetileceğine dair kurallar oluşturabiliyorsunuz. Sağ kanatta kurallar, sol kanatta da bu kuralların geçerli olduğu dosyalar yer alıyor. İstediğiniz dosyaları ekleyebilir, yeni kurallar yaratabilir, bu kuralları Dropbox'la senkronize edebilir ya da export edebilir, kullanmadığınız kuralları yanlarındaki check işaretini kaldırarak işlevsiz hale getirebilirsiniz. 

![](/assets/img/others/2.png)

## Dosya organizasyonu

Şimdi kuralları oluşturmaya basit bir örnekle başlayalım. 

![](/assets/img/others/3.png)

Bir önceki resimdeki sol panelde kuralların herhangi birine tıkladığınızda o kuralın detaylarını görebilirsiniz. Hazel, kuralları if-then mantığı ile uyguluyor. Yani, üstteki bölümde kuralın uygulanacağı dökümanın niteliklerini belirliyorsunuz, alttaki bölümde ise bu kurala uyan dökümanlarla ne yapılması gerektiğini. Örneğin yukarıdaki resimde, __İndirilenler__ dosyasına uygulanan bir kuralı görüyorsunuz. Bu kural, ilk önce indirilenler dosyası içerisindeki dökümanlar arasından 7 günden fazla orada olanları belirliyor. Sonra da bu dökümanları çöp sepetine atıyor. Oldukça basit fakat İndirilenler dosyasını sade tutmak için etkili bir yöntem. 

Şimdi daha karmaşık bir örneğe bakalım. 

![](/assets/img/others/4.png)

Bu örnekte kurallar __Archive__ adlı dosyaya uygulanıyor. Bu dosya benim pdf uzantısına sahip tüm makale ve kitaplarımı tuttuğum bir dosya. Bu dosyadaki tüm dökümanların yazarınsoyadı\_yıl\_eserinadı.pdf şeklinde adlandırıldığını biliyorum. Fakat binlerce döküman arasından istediğimi bulmak çile. Bu yüzden, her yazarın eserinin soyadına göre dosyalanmasını istiyorum. Yukarıdaki resimdeki ilk kural buna yarıyor. Bu kural eylemin uygulanacağı dökümanın pdf olduğunu ve dökümanının isminin yazarınsoyadı\_eserinadı.pdf şeklinde olduğunu belirtiyor. Daha sonra da bu kurala uyan tüm makale ve kitapları yazarın soyadına göre dosyalıyor. Böylece, örneğin, Ufuk Karateke adlı yazarın tüm kitapları ve makalelerini Hazel'in oluşturduğu Karateke dosyasında bulabiliyorsunuz. 

Böylece binlerce dökümanı yüzlerce dosyaya kategorize etmiş oluyoruz. Fakat bu yeterli değil. Bu yüzden, yukarıdaki resimde görülen ikinci kural birinci kuralın oluşturduğu dosyaları alfabetik olarak yeniden dosyalıyor. Sonuç olarak, örneğin, Karateke, Kurtalan ve Koparan dosyaları, __K__ adlı ana dosyanın altında toplanıyor. Finder'dan baktığımızda oluşturduğumuz dosya hiyerarşisi şöyle gözüküyor. 

![](/assets/img/others/5.png)

Benzer şekilde, eğer dökümanlarınızı eserin tarihini de içerecek şekilde adlandırıyorsanız, alfabetik olarak değil de yıllara göre bir dosyalama yapabilirsiniz. Hatta, eğer dökümanlarınıza eserlerin konularına göre etiket veriyorsanız, konu bazlı bir dosya organizasyonu oluşturabilirsiniz. Elbette, tüm bunları yapabilmek için öncelikle dökümanları sistematik ve anlamlı bir şekilde adlandırmak ve etiketlendirmek gerekiyor. Gelecek bölümde Hazel'in bu gibi konularda nasıl yardımcı olabileceğinden bahsedeceğim. 

## Döküman organizasyonu

Hazel, dökümanlarınızın yeniden adlandırılmasını, etiketlenmesini, belirli uygulamalarla açılmasını, bir dosyadan bir başka dosyaya aktarılmasını vs. otomatik olarak yapabiliyor. Aşağıda inceleyeceğim kural Screen shotların (bunun Türkçesi var mı ya?) nasıl organize edilebileceğini gösteriyor. 

![](/assets/img/others/6.png)

Default screen shot almadaki temel problemlerin şunlar: Birincisi, screen shotların default isimleri çok uzun ve bu yüzden fotoğrafın ne zaman çekildiğini masaüstünde dökümanın ismine bakarak anlayamıyorum. İkincisi, screen shot'ı aldıktan sonra görebilmek için, masaüstüne dönüp üzerine tıklamam gerekiyor. 

Yukarıdaki kural ilk önce dökümanın isminin ''Screen Shot'' kelimeleriyle başladığını ve png uzantılı olduğunu belirliyor. Daha sonra bu dökümanları ''Screen Shot'' yerine daha kısa olan ''SShot'' olarak adlandırıyor, tarihi ve uzantıyı aynen koruyor. Sonra dökümana ''screenshot'' etiketini ekliyor. Resmi Preview'de açıyor. Son olarak da dökümanı __screenshots__ adlı bir dosyaya transfer ediyor. Basit ama işe yarıyor.

Şimdi sıra Hazel'in en sevdiğim kullanımlarından birine geldi. Buradaki amacım JSTOR'dan indirilen bir makaleyi yazarın ve eserin adını içerecek şekilde yeniden adlandırmak. Sorun JSTOR'dan indirdiğim makalelerin ''980493583453.pdf'' gibi benim için bir şey ifade etmeyen bir isimle gelmeleri. Yani, dökümanın ismini, indirildiğinde var olan ismi yeniden organize ederek değiştirmemiz mümkün değil. Bunun yerine dökümanı açıp, yazarın ismine ve makalenin ismine bakarak yeniden adlandırmamız gerekiyor. Doğru komutlar verildiğinde Hazel indirilen dökümanı okuyabiliyor ve dökümanı anlamlı bir şekilde adlandırabiliyor. 

![](/assets/img/others/7.png)

İlk üç satırda olanlar şunlar. Hazel, İndirilenler dosyasına bakıyor ve dökümanın pdf olduğunu görüyor. Sonra pdf'nin içerisine bakıp ''JSTOR'' kelimesini tespit ediyor. Son olarak da indirilenin muhtemelen tek bir makale olduğunu belirlemek için 90 sayfanın altında olup olmadığı kontrol ediyor. 

Daha sonraki satırları anlamak için aşağıdaki resme bakmak gerek. 

![](/assets/img/others/8.png)

JSTOR'dan indirilen makaleler çoğunlukla yukarıdaki gibi makale bilgilerini içeren bir kapak ile geliyor. Kuraldaki sondan ikinci satırda Hazel ''Author(s)'' yazısını arıyor. İlk kelimeyi es geçiyor ve ikinci kelimeyi 'lastname' olarak kodluyor. Böylece yukarıdaki makale için konuşacak olursak 'Winship' kelimesini elde etmiş oluyoruz. Dördüncü sıradaki kural ise yazarın kısaltma olarak yazılmış ikinci bir adının olması durumunu gözetiyor. Yani eğer yazarın ismi Christopher __K.__ Winship olsaydı, Hazel dökümanın belirtilen kurallara uymadığına karar verip, eyleme geçmeyecekti. Beşinci sıradaki kuralda Hazel, 4 rakamın ard arda geldiği bir sayıyı arıyor. Yukarıdaki makalede bu sayı 1999, yani makalenin yayınlanma tarihi [^1]. Son kuralda ise Hazel, sayfada gördüğü ilk kelimeleri makalenin ismi olarak kodluyor. Bu kodlamalara göre sonuç olarak, ''980493583453.pdf'' olarak indirilen belgemizi ''Winship\_1999\_The Estimation of Causal Effects.pdf'' olarak adlandırmış oluyoruz. Efsane! 

## Hazel, scripts ve Automator

Hazel kuralları uygularken seçilen dökümanları yeniden adlandırma ya da etiketlemeden daha komplike eylemlere de tabi tutabiliyor. Bunun için Hazel Applescript, Javascript ya da shell script kullanıyor[^2]. Örneğin bu yazıyı tamamlayıp masaüstüne kaydettiğimde, Hazel bir shell script aracılığıyla yazıyı otomatik olarak bu blogda yayınlıyor. Ya da istediğimde, yazdığım bir makaleyi yine bir shell script aracılığıyla otomatik olarak pandoc ve LaTEX'ten geçirip basıma hazır bir pdf'ye dönüştürebiliyor. Bu yazıda daha basit bir örnek üzerinde durabileceğim. 

![](/assets/img/others/9.png)

Yukarıdaki resimde, Hazel'in docx dökümanları pdf'ye çeviren kuralını görüyorsunuz. Hazel önce uzantının docx olduğunu belirliyor. Sonra, dökümanın ''docx-pdf'' adlı etikete sahip olduğunu tespit ediyor. Bu koşullar sağlandığında, Hazel görülen shell scripti çalıştırarak Word dökümanını pdf'ye çeviriyor. 100 tane Word dökümanını, Word'ü hiç açmadan kısa sürede pdf'ye dönüştürebileceğinizi düşündüğünüzde Hazel'in sağladığı zamandan tasarruf daha anlaşılır olabilir. 

![](/assets/img/others/10.png)

Yukarıdaki örnek, bu sitenin ana sayfasındaki thumbnailleri üretmek için kullandığım Hazel kuralını gösteriyor. Özetle, sitedeki her yazının başındaki büyük ana görselleri alıp, belirli boyutlarda kesip, boyutunu düşürerek ana sayfada thumbnail olarak yayınlamak istiyorum. Fakat bunu bir image editing programını açıp uğraşarak yapmak istemiyorum. Bunu otomatik olarak gerçekleştirmek için Hazel devreye giriyor. Öncelikle Hazel thumbnails dosyasındaki dökümanın vector uzantılı olmadığını belirliyor. Sonra işi Automator'a havale ediyor. Automator da aşağıda görüldüğü gibi görseli belirlenen boyutlarda kırpıyor. Helal olsun!

![](/assets/img/others/11.png)

Aşağıdaki kural, Hazel ve Automator'ın birlikte kullanımının bir başka güzel örneği. 

![](/assets/img/others/12.png)

Olay şu: Fotoğraf çekimlerimde Panasonic'in DMC-ZS100 kamerasını kullanıyorum. Ama kameranın ürettiği jpeg'lerin parlaklığından memnun değilim. Bunun için çektiğim fotoğrafları tek tek Affinity Photo ya da benzer bir fotoğraf düzenleme uygulamasından geçirebilirim. Ama bu çok zaman alabilir. Bunun yerine Hazel ile oldukça hızlı bir alternatif geliştirebildim. 

Çektiğim resimleri masaüstüne attığımda, Hazel bunların jpeg uzantılı olduğunu ve DMC-ZS100 model bir aygıttan geldiğini görüyor. Daha sonra fotoyu Photos uygulamasında açıyor. Bu noktadan sonra Automator devreye girerek, Photos üzerinde fotoğrafları ''auto-enhance'' ediyor. Böylece daha canlı bir fotoğrafa çabucak ulaşmış oluyorum [^3].

## Deneyim

Hazel'in bilgisayarımda olduğu ilk haftalarda öyle işlevsiz durduğunu ve bana fazlaca karmaşık geldiğini düşündüğümü hatırlıyorum. Sonra çeşitli productivity sitelerinde ve özellikle Hazel'in kullanıcı [forumlarında](https://www.noodlesoft.com/forums/index.php), Hazel'in kullanımına dair örnekler görünce kafam biraz açılmıştı. 

Bence bilgisayarında tekrar eden işlerle sürekli uğraşmak zorunda olanlar, dizgin altına alınamayan devasa arşivlerin sahipleri, bu tip akıl zorlayan işlerden eğlenen nerdler ve de benim gibi iflah olmaz bir tembellikten muzdarip insan evlatları Hazel'den ''haz elebilir''. Ehe!


[^1]:	Eğer makalenin basım tarihinden önce, makalenin isminde bir tarih geçiyorsa, Hazel onu yayınlanma tarihi olarak kabul ediyor. Bu yüzden bazı durumlarda istenen sonuç elde edilmeyebilir. 

[^2]:	Ben script yazma konusunda pek bir şey bilmiyorum. İsteyen Hazel'in forumlarına bakabilir. Ben de ordan buldum.

[^3]:	Fotoğrafı yeniden adlandırırken kullandığım ''original'' kelimesi, Hazel'in aynı işlemi tekrarlamasını engellemek için. 