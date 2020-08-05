---
title: 'Mutluluğun anahtarları: Para, iman, evlilik'
tags: [din, istatistik, mutluluk, sınıf]
description: Atalarımız para ile imanın kimde olduğu belli olmaz demiş. Oluyor. 
image: assets/img/featured/mutluluk-istatistik.jpeg
caption: 'Gülen bir şapkalı adam. Foto: Mika, Unsplash.'
popular: true
rank: 4
---

Birçok akademik çalışma (referans vermiyorum) dindar insanların genelde daha mutlu olduğunu gösteriyor. Bu yazıda dindarlıkla mutluluk arasındaki ilişkiyi Türkiye kapsamında inceliyorum. Veri, [World Values Survey'in](http://www.worldvaluessurvey.org) 6. sürümünden geliyor. Veri seti, 2012 yılındaki yüz yüze görüşme ve anketlerle oluşturulmuş ve 1605 gözlemden oluşuyor. Michigan Üniversitesi'nden ünlü siyaset bilimci Ronald Inglehart öncülüğünde gerçekleşen WWS, dünyanın birçok ülkesindeki siyasal ve kültürel eğilimler hakkında kapsamlı veriler topluyor. 

Bu arada WVS7 çok yakında (20 Temmuz) yayınlanıyor. Türkiye toplumunun geçtiğimiz yıllarda nasıl dönüştüğünü anlamak açısından çok faydalı bir kaynak olacaktır. 

Bu analizdeki dependent variable (bağımlı değişken) "Feeling of happiness". Ankette, "Aşağıdaki şıklardan hangisi, bugünlerdeki genel mutluluk durumunuzu en iyi tarif ediyor?" sorusu ile kodlanmış. Bu soruya verilen cevaplara göre, örnekleme dahil olan kişilerin yüzde 37.5'i "Çok mutlu", yüzde 46.3'ü "Biraz mutlu" olduğunu söylerken, yüzde 11.9'u "Pek mutlu değilim" yüzde 3.8 ise "Hiç mutlu değilim" demiş. Genelde mutlu olanların çoğunlukta olduğu bir profil ortaya çıkıyor. 

Dindarlığı temsilen 3 değişken belirledim. Birincisi, kişinin kendisini _dindar_ olarak tanımlayıp tanımlamadığı. İkincisi, kişinin ne kadar sıklıkla dua ettiği. Üçüncüsü ise, bir çocuğun evde öğrenmesi istenen hususlar arasında dini inancın sayılması. Bunların yanı sıra, yaş, cinsiyet, iş durumu gibi bazı demografik ve sosyoekonomik değişkenleri de kontrol amaçlı olarak ekledim. 

Bağımlı değişkenim kişilerin mutluluk seviyesini temsil ettiği için, ordered logistic regression methodunu kullanmayı bu analiz için uygun gördüm. Regression'ın sonuçlarını [PDF olarak buraya koyuyom](/items/mutluluk-ologit.pdf). 

{% figure caption: "Figür 1. Sınıflara ve eğitim seviyelerine göre mutlu olma oranları. WWS6. (n=1605)" class:"large-other" %}
<div class="ratio-box" style="padding-bottom: 66.67%">
<img alt="Mutluluk oranlarını gösteren istatiki tablo" class="lazyload" data-src="/assets/img/others/happy-graph-1.png">
<noscript>
<img src="/assets/img/others/happy-graph-1.png">
</noscript>
</div>
{% endfigure %}

Yukarıdaki Figür 1'de örneklem üzerinden bazı descriptive istatistikler bulunabilir. Soldaki tabloda sosyal sınıflara göre mutluluk oranları gösteriliyor. Bu tabloya göre, sınıf yükseldikçe [^1] kendisini "Çok mutlu" olarak tanımlayan kişilerin oranı artıyor. Regressionda da istatistik olarak güçlü değerler sınıf değişkeninde ortaya çıkmış. Bir başka deyişle kişinin hangi sınıfta olduğu ile kendini ne kadar mutlu hissettiği arasında güçlü bir ilişki var. 

Figür 1'in sağındaki tabloda ise eğitim durumuna göre mutluluk oranlarını görüyoruz. Burada, kendisini "Çok mutlu" olarak gören insanların oranının tamamladıkları eğitim seviyesine göre fazla değişkenlik göstermediği söylenebilir. Örneklemde hiç eğitimi olmayanların yüzde 39'u kendisini "Çok mutlu" olarak tanımlarken, bu oran üniversite mezunları için anca yüzde 43'e yükseliyor. 

Regression sonuçlarına göre, eğitim değişkeninde, üniversite mezunları ile lise mezunları ve üniversite mezunları ile meslek lisesi mezunları arasındaki fark istatistiki olarak anlamlı görünüyor. Diğer değişkenlerde ortalama değerlere sahip bir lise mezununun kendisini "Çok mutlu" olarak tanımlama olasılığı aynı durumdaki bir üniversite mezununa göre yüzde 8 oranında daha düşük (bkz. Figure 2, en soldaki tablo). Üniversite mezunu ve meslek lisesi mezunu arasında ise yüzde 11'lik bir fark var (p \< 0.05). Öte yandan, bu analiz, üniversite mezunlarının ilköğretim mezunlarından ya da hiç eğitim görmemişlerden daha mutlu olduğuna dair, popülasyona genellenebilir bir bulguya rastlamadı. 

{% figure caption: "Figür 2. Bazı sosyoekonomik değişkenlere göre tahmini mutlu olma olasılıkları. WWS6. (n=1605)" class:"large-other" %}
<div class="ratio-box" style="padding-bottom: 66.67%">
<img alt="Sosyoekonomik değişkenleri gösteren istatiki tablo" class="lazyload" data-src="/assets/img/others/happy-graph-2.png">
<noscript>
<img src="/assets/img/others/happy-graph-2.png">
</noscript>
</div>
{% endfigure %}

İş durumu değişkenine baktığımızda, tam zamanlı çalışanlar, yarı zamanlı çalışanlar, kendi işinde çalışanlar, öğrenciler ve ev işçileri (ev kadınları) arasında mutluluk oranlarında anlamlı bir fark olmadığını görüyoruz. Fark iki kategoride kendisini gösteriyor: İşsizler ve emekliler, diğer gruplara kıyasla daha mutsuz. Diğer değişkenlerde ortalama değerlere sahip bir işsizin, tam zamanlı çalışan birine kıyasla kendisini "Çok mutlu" olarak tanımlama olasılığı yüzde 12 daha düşük (p \< 0.01). 

Sınıf değişkeninde, beklendiği üzere, kategoriler arasında büyük ve istatistiki olarak anlamlı farklar var. En üst sınıfa mensup birisinin kendisini "Çok mutlu" görme olasılığı, en alt sınıfa mensup birisine kıyasla yüzde 30 daha fazla (p \< 0.01).

Evlilik durumu ile mutluluk arasında da pozitif bir ilişki mevcut. Evli olanların ortalama olarak evlenmemiş olanlardan da, dul ya da eşinden ayrılmış olanlardan da daha mutlu olduğu görülüyor. Diğer değişkenlerde ortalama olan bireylerde, evli olanlarla bekar olanlar arasında "Çok mutlu" kategorisinde yer alma olasılığı bakımından yüzde 7'lik bir fark var. 

{% figure caption: "Figür 3. Bazı dindarlık ölçütlerine göre tahmini mutlu olma olasılıkları. WWS6. (n=1605)" class:"large-other" %}
<div class="ratio-box" style="padding-bottom: 66.67%">
<img alt="Dini değişkenlere göre mutluluk oranlarını gösteren istatiki tablo" class="lazyload" data-src="/assets/img/others/happy-graph-3.png">
<noscript>
<img src="/assets/img/others/happy-graph-3.png">
</noscript>
</div>
{% endfigure %}

Analizimiz, literatürün din konusundaki genel bulgularını az çok doğruluyor. Kendisini dindar olarak tanımlayanların kendilerini "Çok mutlu" olarak görme olasılığı, kendisini dindar görmeyenlere kıyasla yüzde 9 daha yüksek. Fakat dindarlarla ateistler arasında significant bir fark mevcut değil.

Dua etme sıklığı ile mutluluk arasında güçlü bir ilişki yok. Fakat, bu kategorideki en büyük fark, yılda birden az dua edenler (ya da hiç etmeyenler) ile günde birden çok kere dua edenler arasında görülüyor (yüzde 14). 

Son olarak, çocuğun evde edinmesi istenen değerler arasında dini inancı sayan kişilerin saymayan kişilere oranla ortalama olarak daha mutlu oldukları görülüyor. Fakat bu oldukça küçük bir fark (yüzde 6). 

Analizim sırasında, mutluluk ile yaş ve mutluluk ile cinsiyet arasında significant bir ilişki bulamadım. Sonuçta, mutluluğun en güçlü belirleyeni sosyal sınıf olarak görünse de, dindarlığın da mutluluk üzerinde azımsanmayacak bir etkiye sahip olduğu söylenebilir.










[^1]:	Sınıf tanımı için sorulan anket sorusunda, katılımcının kendisini tabloda gösterilen 5 sınıftan birine konumlandırması istenmiş. Yani öznel bir sınıf tanımlaması mevcut.