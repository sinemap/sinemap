---
title: "Titanik ölüm istatistikleri 2: Sen çok yaşa Rose!"
tags: [sınıf, cinsiyet, ölüm, istatistik]
description: Titanik faciasına dair bu ikinci yazımız, logistic regression metodunu kullanarak, Rose'un hayatta kalmasının pek şaşırtıcı olmadığını gösteriyor.
image: assets/img/featured/jack-rose-kissing.jpeg
caption: Jack Dawson ve Rose Calvert öpüşmek üzere. Titanik, 1997
---

Şubat'ta yazdığım [yazıda](/notlar/titanik-olum-istatistikleri-jacki-kurtarmak-mumkun-muydu/) RMS Titanic'in batması sonucu hayatını kaybedenlere dair istatistikleri incelemiştim. O yazıda kullandığım veri seti, 891 yolcuya dair bilgiler içeriyordu. Bu yazıda ise, 1999 yılında güncellenmiş ve 1309 yolcunun dahil edildiği bir veri setini kullanarak bazı eklemeler yapıyorum. Ayrıca bu sefer istatiksel analiz için Stata ile _logistic regression_ kullandım. 

Veri seti yolcuların ölüm-kalım durumu, ismi, cinsiyeti, yaşı, yolcuların arasında kaç kardeşe, eşe, çocuğa ya da ebeveyne sahip olduğu, bilet ücreti, kabin numarası gibi değişkenlere sahip. Logistic regression, bu değişkenlerin yolcuların hayatta kalma durumuyla nasıl ilişkili olduğunu bulmaya yardımcı olabilir. Benim analizime göre, yolcuların yaşı, cinsiyeti, hangi sınıf bilete sahip olduğu ve eş ya da kardeşleriyle birlikte olup olmadıkları hayatta kalma durumlarıyla istatistiki olarak anlamlı bir ilişkiye sahip. Öte yandan, ebeveyne ya da çocuğa sahip olmak ve bilet ücreti değişkenleri hayatta kalma olasılığı üzerinde belirleyici değil. 

Sonuçlarda ilk göze çarpan, ölüm oranları bakımından kadınlarla erkeklerin arasındaki büyük uçurum. Diğer değişkenleri sabit tuttuğumuzda, "ortalama" bir kadının hayatta kalma olasılığı yüzde 77 iken, bir erkek için bu oran 17 olarak gerçekleşiyor. Bir başka deyişle, kadın olmak Titanik'ten kurtulma olasılığınızı yüzde 60 artırıyor. 

Fakat, cinsiyetin yanı sıra, hangi sınıfa ait olunduğu da oldukça belirleyici. Aşağıdaki grafiğin gösterdiği üzere, 1. sınıf yolcuların hayatta kalma olasılığı daha fazla. Kadınların arasında, 1. sınıfta yer almak 2. sınıfta yer almaya kıyasla sadece yüzde 7'lik oranda şanslarını artırıyor. Erkeklerde ise, 1. sınıf ile 2. sınıf arasında yaklaşık yüzde 21'lik bir fark var. 2. sınıf kadınlar 3. sınıfa kıyasla yaklaşık yüzde 43 oranında daha yüksek bir hayatta kalma şansına sahipler. Erkeklerde ise 2. ve 3. sınıflar arasında böyle bir fark yok. Hatta, 3. sınıftakilerin şansı 2. sınıftakilerden yüksek görünüyor. (Ama bu istatistiki olarak anlamlı bir fark değil.) 

{% figure caption: "Cinsiyete ve sınıflara göre yolcuların hayatta kalma ihtimalleri. (n=1045)" %}
<div class="ratio-box" style="padding-bottom: 66.67%">
<img alt="Titanik kazasında yolcuların cinsiyete ve sınıflara göre ölüm oranlarını gösteren grafik" class="lazyload" data-src="/assets/img/others/titanik-cinsiyet-yas.png">
<noscript>
<img src="/assets/img/others/titanik-cinsiyet-yas.png">
</noscript>
</div>
{% endfigure %}

Neden 2. sınıfta olmak kadınların şansını epey artırken, erkekler için olumlu bir sonuç doğurmadı? Bilmiyorum. İlgi çekici bir araştırma sorusu.

Hayatta kalma şansını ciddi bir biçimde etkileyen diğer bir faktör ise yaş. Her 10 yıllık yaşlanma, hayatta kalma şansını ortalama olarak yüzde 5.6 oranında düşürüyor. Aşağıdaki 2. ve 3. grafiklere baktığımızda, yaş değişkeninin hayatta kalma şansı üzerindeki etkisinin özellikle genç yaşlarda belirgin olduğunu görüyoruz. "Önce kadınlar ve çocuklar!" türünde bir yaklaşımın kaza sırasında hakim olduğu görülüyor. 

<div class="double-img">
{% figure caption: "Titanik'te kadın yolcuların yaşa ve sınıfa göre hayatta kalma olasılıkları. (n=1045)" %}
<div class="ratio-box" style="padding-bottom: 66.67%">
<img alt="Titanik kazasında kadın yolcuların yaşa ve sınıflara göre ölüm oranlarını gösteren grafik" class="lazyload" data-src="/assets/img/others/titanik-kadin-yas-sinif.png">
<noscript>
<img src="/assets/img/others/titanik-kadin-yas-sinif.png">
</noscript>
</div>
{% endfigure %}
{% figure caption: "Titanik'te erkek yolcuların yaşa ve sınıfa göre hayatta kalma olasılıkları. (n=1045)" %}
<div class="ratio-box" style="padding-bottom: 66.67%">
<img alt="Titanik kazasında erkek yolcuların yaşa ve sınıflara göre ölüm oranlarını gösteren grafik" class="lazyload" data-src="/assets/img/others/titanik-erkek-yas-sinif.png">
<noscript>
<img src="/assets/img/others/titanik-erkek-yas-sinif.png">
</noscript>
</div>
{% endfigure %}
</div>

Yaş ilerledikçe hayatta kalma şansı azalıyor. Erkekler arasında sınıflardan bağımsız bir yaş etkisinden bahsedebiliriz. Her üç sınıfın hayatta kalma olasılığı yaşa bağımlı olarak aynı hızda değişiyor. Kadınlar içinse, yaş ve hayatta kalma arasındaki ilişkinin sınıfa göre farklılaştığını görüyoruz. Daha yaşlı olmak 1. ve 2. sınıftan kadınların hayatta kalma şansını fazla azaltmazken, 3. sınıftan kadınlar üzerindeki etkisi daha dramatik oluyor.

Son olarak Titanik filminden Jack Dawson ve Rose Calvert'ı karşılaştıralım. Analizimize göre, diğer faktörler ortalamalarında sabit tutulduğunda, 20 yaşında, 3.sınıftan bir erkek olan Jack'in hayatta kalma şansı yüzde 22 oluyor. Rose ise, 17 yaşında, 1. sınıftan bir kadın olarak yüzde 98 kurtulma şansına sahip. Filmin sonunda Rose, filikaya binmeyip aşığının peşinden giderek bu yüksek yaşama ihtimalini riske atsa da, hayatta kalarak analizimizi utandırmıyor.

{% notice %}
### Not
Veri setinde yolcuların yaşı değişkeninde baya kayıp veri vardı. Yaş hanesi boş olan kişileri analizin dışında tuttum. Böylece gözlem sayısı 1309'dan 1045'e düştü.  
{% endnotice %}











