---
title: "Titanik ölüm istatistikleri: Jack'i kurtarmak mümkün müydü?"
tags: [sınıf, cinsiyet, ölüm, istatistik]
description: "Bu yazı, Titanik faciasına dair istatistiki verilerden yararlanarak, Jack Dawson’ın kaderine dair alternatif ihtimalleri sorguluyor."
image: assets/img/featured/titanic-jack-rose.jpeg
caption: Jack ve Rose, Titanik filminde, 1997
---

Geçen gün reddit’te dolaşırken Titanik kazasında ölenlere dair bir [veri görselleştirmesi](https://www.reddit.com/r/dataisbeautiful/comments/eh0dlg/oc_titanic_losses/ "Titanik veri görselleştirmesi, Reddit") görmüştüm. Hoşuma gittiği için ben de yapmak istedim. Veri setini [kaggle.com’da](https://www.kaggle.com/hesh97/titanicdataset-traincsv) buldum. Set, 14 Nisan 1912’de gerçekleşen kazada ölen 891 yolcuya dair bilgiler içeriyor. Gemi mürettabatına dair bilgiler bu veri setinde yoktu. Ama [wikipedia sayfasına](https://en.wikipedia.org/wiki/Sinking_of_the_RMS_Titanic) göre, 696 kişiyle en büyük zaiyatı onlar vermiş görünüyor. Bu yazıda özet istatistikler ve grafiklerle, Titanik kazasındaki can kayıpları ile yolcuların cinsiyeti ve ekonomik sınıfı arasında bir ilişki var mı diye bakıyorum. 

Titanik’te kesin sayı bilinmemekle birlikte yaklaşık 1500 kişi hayatını kaybediyor. Bu, gemidekilerin yaklaşık yüzde 65’ine denk geliyor. Aşağıdaki grafiklerde sunulan veriler (çocuklar üzerine olan grafik hariç) 18 yaş ve üstü yetişkin yolculara ait. 

## Titanik’te ekonomik sınıflar

{% figure caption: "Yolcuların sınıflarına göre ölüm oranları. Mavi=1.sınıf, Turuncu=2.sınıf, Yeşil=3.sınıf. 18 yaş ve üstü baz alınmıştır." class:"large-other" %}
<div class="ratio-box" style="padding-bottom: 52.38%">
<img alt="Titanik kazasında yolcuların sınıflarına göre ölüm oranlarını gösteren grafik" class="lazyload" data-src="/assets/img/others/titanik-sinif-olum.jpeg">
<noscript>
<img src="/assets/img/others/titanik-sinif-olum.jpeg">
</noscript>
</div>
{% endfigure %}

Titanik’te yolcular 3 farklı sınıfa ayrılıyorlar. Bu sınıflar geminin farklı bölümlerinde kalıyorlar ve bölümler arası geçişler kontrollü oluyor. En alttaki 3. sınıf yolcuların kurtarma botlarına erişiminin olmaması can kaybını artıran sebeplerden biri olsa gerek. Yukarıdaki ikinci grafiğimiz sınıflara göre ölüm oranlarını gösteriyor. 1. sınıftakilerin yüzde 60’tan fazlası hayatta kalırken, 3. sınıftakilerin yüzde 80’e yakını ölüyor. 

{% figure caption: "Yolcuların aldıkları biletlerin fiyatına göre ölüm oranları. 18 yaş ve üstü baz alınmıştır." class:"large-other" %}
<div class="ratio-box" style="padding-bottom: 62.5%">
<img alt="Titanik kazasında bilet fiyatlarına göre ölüm oranlarını gösteren grafik" class="lazyload" data-src="/assets/img/others/titanik_gelir_olum.jpeg">
<noscript>
<img src="/assets/img/others/titanik_gelir_olum.jpeg">
</noscript>
</div>
{% endfigure %}

Yolcu sınıflarının yanı sıra, veri setindeki “bilet ücreti” değişkeni de yolcuların ekonomik durumuna dair bilgi verici. Bu veri setinde bilet fiyatları 4 sterlin ile 512 sterlin arasında değişmekte. Wikipedia’ya göre, 512 sterlini 2019 yılı parasına çevirmek için 100 ile çarpıyoruz. 51200 sterlin yani.

Yukarıdaki grafik bilet ücretlerine göre yolcuların yüzdelik dilimlerini gösteriyor. Misal, __\<10 __ toplam yolcu nüfusu içerisinde bilete en az para ödeyen yüzde 10’luk dilimi ifade ediyor. Aynı şekilde, __\>90__ ise bilete en çok para ödeyen yüzde 10’luk dilimi gösteriyor. 

Grafiğe göre biletine en fazla ödeme yapan yüzde 10’luk dilimin sadece dörtte biri hayatını kaybediyor. En az ödeyen yüzde 10’luk dilimde ise ölüm oranı yüzde 87 civarında. Aradaki yüzdelik dilimlere baktığımızda da genel bir trend gözlemlemek mümkün. 

{% figure caption: "Çocuk yolcuların sınıflara göre ölüm sayıları. Mavi=yolcu sayısı, Turuncu=ölü sayısı. 18 yaş altı baz alınmıştır." class:"large-other" %}
<div class="ratio-box" style="padding-bottom: 57.76%">
<img alt="Titanik kazasında çocuk yolcuların ölüm sayısını gösteren grafik" class="lazyload" data-src="/assets/img/others/titanik-sinif-cocuk.jpeg">
<noscript>
<img src="/assets/img/others/titanik-sinif-cocuk.jpeg">
</noscript>
</div>
{% endfigure %}

Son olarak, çocuk yolcular arasındaki ölüm oranlarına baktığımızda, ölen çocukların büyük çoğunluğunun 3. sınıf yolculardan oluştuğu görülüyor. 

## Titanik’te kadınlar ve erkekler

{% figure caption: "Yolcuların cinsiyete göre ölüm oranları. Mavi=Kadın, Turuncu=Erkek. 18 yaş ve üstü baz alınmıştır." class:"large-other" %}
<div class="ratio-box" style="padding-bottom: 35.76%">
<img alt="Titanik kazasında yolcuların cinsiyete göre ölüm oranlarını gösteren grafik" class="lazyload" data-src="/assets/img/others/titanik-cinsiyet-olum.jpeg">
<noscript>
<img src="/assets/img/others/titanik-cinsiyet-olum.jpeg">
</noscript>
</div>
{% endfigure %}

Yukarıdaki grafiğin gösterdiği üzere, ölenlerin büyük bir kısmı erkekler. 18 yaş ve üzeri erkeklerin yaklaşık yüzde 83’ü, kadınların da yüzde 25’i kazada hayatını kaybediyor. 

{% figure caption: "Yolcuların sınıf ve cinsiyete göre ölüm oranları. Mor=Kadın, Yeşil=Erkek. 18 yaş ve üstü baz alınmıştır." class:"large-other" %}
<div class="ratio-box" style="padding-bottom: 52.96%">
<img alt="Titanik kazasında yolcuların cinsiyete göre ölüm oranlarını gösteren grafik" class="lazyload" data-src="/assets/img/others/titanik-sinif-cinsiyet-olum.jpeg">
<noscript>
<img src="/assets/img/others/titanik-sinif-cinsiyet-olum.jpeg">
</noscript>
</div>
{% endfigure %}

Yukarıdaki grafik cinsiyet ve sınıf değişkenlerine birlikte bakıyor. İki değişkenin de kimin hayatta kalacağını belirleme konusunda hayli etkili olduğu görülebilir. Kadınlar ve erkekler arasındaki fark bariz. Kadınlar arasında açık ara en çok kayıp veren 3. sınıftan kadınlar (% 51) bile, erkekler arasında en iyi durumdaki 1. sınıftan erkeklerden (% 65) daha az oranda ölmüşler. 

Erkekler genel olarak yüksek oranda kayıp vermişler. İlginç bir şekilde, 2. sınıftaki erkeklerin ölüm oranı, 3. sınıftaki erkeklerden küçük bir oranda fazla. Fakat yine de, 1. sınıf erkekleriyle aralarında bir uçurum var. 

## Sonuç

Analizimize göre, yoksul bir erkek olarak Jack’in zaten fazla şansı yoktu. Zengin bir kadın olarak Rose’un hayatta kalma ihtimali hayli fazlaydı. Filmin o meşhur sahnesinde, Jack’in hayli geniş olan tahtayı neden Rose’la paylaşmayıp donduğunu ve okyanusta yittiğini maalesef bilemiyoruz. Jack’in gerekçesi sınıfsal bir başkaldırı mıydı yahut bir garip erkeklik gururu/gösterisi miydi anlayamadık. Lakin, bu mantıksız sahnenin romantik duygularımızı ateşlemenin yanı sıra, sembolik olarak da bir işlevi olduğu varsayılabilir. 





