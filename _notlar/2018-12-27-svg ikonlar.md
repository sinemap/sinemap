---
title: SVG ikonlar
tags: [web, bilgisayar, tasarım]
---

Geçen günlerde bu siteye biraz renk katmak için sitenin çeşitli yerlerinde simgeler kullanmaya başladım. Örneğin yazıların yayınlandığı tarihin yanındaki takvim simgesi, okuma süresinin yanındaki saat/kronometre simgesi vesaire. Bu simgeleri <caps>SVG</caps> (Scalable Vector Graphics) olarak sunmak istediğimi biliyordum. Bunun sebebi temelde svg'nin vektör formatında olması ve medya formatından bağımsız olarak çözünürlüğünü her durumda korumasıydı. Örneğin bu sitede kullanılan <caps>SVG</caps> ikonlarına zoomlarsanız, onların hep cillop gibi göründüğünü görebilirsiniz. Fakat svgleri yalnızca _inline_ olarak kullanmayı bildiğim için svg kodunu doğrudan <caps>HTML</caps>e yapıştırıyordum. Bu da <caps>HTML</caps> kodunu karmaşıklaştırdığı gibi, simgelerin istendiği zaman tekrar kullanılması için de pek uygun değildi. 

Bunun yerine bir <caps>SVG</caps> ikon sistemi hazırlayıp, bu ikonları <caps>HTML</caps> içerisinde basit bir referansla istediğim yerde kullanmayı öğrendim. Kullandığım teknik _external svg sprite _ oldu. Bu teknikte, sitede kullanacağınız tüm svglerin kodunu bir <caps>SVG</caps> dosyası içerisine topluyorsunuz, bu dosyayı sitenizin _head_ bölümünde "linkliyorsunuz" ve daha sonra svgleri kullanmak istediğiniz yerde <code>use</code> elementiniyle çağırıyorsunuz. 

Bu dosyanın içi şöyle görünüyor. 
```html
<svg xmlns="http://www.w3.org/2000/svg">
<symbol id="heart-icon" viewBox="0 0 32 32"><path d="M31 11.12A8.2 8.2 0 0 0 22.73 3 8.3 8.3 0 0 0 16 6.4 8.3 8.3 0 0 0 9.28 3 8.2 8.2 0 0 0 1 11.12c0 .64.08 1.25.22 1.85 1.15 7 9.09 14.4 14.78 16.43 5.69-2.03 13.63-9.43 14.78-16.43a7.86 7.86 0 0 0 .22-1.85z"/></symbol>
...
...
</svg>
```

Dosya <caps>SVG</caps> ile başlıyor doğal olarak. Sonrasında ikonların svg kodlarını <code>symbol</code> içerisinde o dosyaya bırakıyorsunuz. <caps>SVG</caps> kodunun viewbox ve path dışındaki unsurlarını çıkarıp dosya boyutunu küçültmek mümkün. Elbette bu svgleri daha sonra kullanabilmek için onlara bir id de veriyoruz. Örneğin yukarıdaki <caps>SVG</caps> bir kalp ikonuna ait. 

Sonra HTML'de istediğiniz yerde bahsettiğim id'yi kullanarak (bu durumda #heart-icon) istediğiniz ikonu kullanabiliyorsunuz. Şöyle: 

```html
<svg class="icon heart-icon"><use xlink:href="/images/icons/svg-icons.svg#heart-icon"></svg>
```

Böylece beğendiğim svg formatındaki ikonları bir dosyada toplayıp kullanmaya başladım. SVGlere İcomoon sitesinden eriştim. [Beleşe çok hoş ikon setleri var.](https://icomoon.io/app/#/select/library) Ben Brankic 1979 adlı ikon setini kullandım. Sonra bu işi biraz daha büyütüp, sadece ikonları değil emojileri de kullanmaya başladım. Emojilere de [twitter'ın open source emoji koleksiyonu twemoji](https://twemoji.twitter.com) sayesinde erişimim oldu. Bunlara da svg formatında erişmek mümkün. 

SVG sprite kullanma konusunda bana en çok yardımcı olan kaynak [Sara Soueidan'in şu yazısı](https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/) oldu. External spriteların yanı sıra svgleri kullanmanın başka yöntemlerini de yazıda güzelce anlatıyor.