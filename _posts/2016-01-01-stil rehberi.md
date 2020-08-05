---
title: Stil rehberi
category: teknoloji
image: assets/img/featured/beckett.jpeg
tags: [tasarım, bilgisayar]
description: Blogun tasarım referansları
--- 

Bu sayfa blogumdaki tüm elementleri gösteriyor. Arada sırada bloguma stil düzenlemeleri yaparsam bu sayfayı referans alabilirim. Ayrıca, eğer siz de bu stilde bir blog kurmayı düşünürseniz, tüm fonksiyonları bu sayfadan görebilirsiniz. Mesela bu paragraf bir giriş paragrafı.

Şimdi yazıyor olduğum __paragraf__ ise normal bir paragraf. Belki inanmayacaksınız ama bu _paragrafa_ bir link de ekleyeceğim. İşte o sözü geçen [link](karateke.github.io). Bu paragrafa mesela bir dipnot [^1] ekleyebilirim. Hatta hızımı alamayıp ikinci bir dipnot [^2] daha koyuyorum. Dipnotlar için [bigfoot.js](http://www.bigfootjs.com) adında bir plugin kullanıyorum ki dipnotları okumak için aşağı yukarı dolanmaktansa üzerine tıklamanız yeterli olsun. Bakın hep sizi düşünüyorum. Nasıl oldu?

Subscriptler H<sub>2</sub>O gibi görünürken, superscriptler E=mc<sup>2</sup> gibi görünüyor. Kesirli sayıları da <frac>3/4</frac> gibi göstermek mümkün. Small caps'ler de <caps>html</caps> gibi gösterilebilir. 

Bold yazı: __Pijamalı hasta, yağız şoföre çabucak güvendi.__

İtalik yazı: _Pijamalı hasta, yağız şoföre çabucak güvendi._

Küçük yazı: <small>Pijamalı hasta, yağız şoföre çabucak güvendi.</small>

"Marked" yazı: <mark>Pijamalı hasta, yağız şoföre çabucak güvendi.</mark>

Silinen yazı: <del>Pijamalı hasta, yağız şoföre çabucak güvendi.</del>

Eklenen yazı: <ins>Pijamalı hasta, yağız şoföre çabucak güvendi.</ins>

## Transitionlar

Genellikle linklere küçük transition efektler uyguluyorum. Karenin üzerine gelirseniz bir örneğini görebilirsiniz. 

<center>
<style>
.square {
  height: 3em;
  width: 3em;
  background-color: #292929;
  margin-bottom: 1em;
  transition: background-color 0.2s ease-in-out;
  webkit-transition: background-color 0.2s ease-out;
}

.square:hover {
  background-color: #dd3435;
}

</style>

<div class="square"></div>

</center>

Bir çizgi yaklaşıyor. 

---

## Fontlar

Gerçi iki haftada bir fontları değiştiriyorum ama yine de yazayım. Bu sitede, body font için "Sentinel", başlıklar için "Balto" adlı fontları kullanıyorum.

- Sentinel

- _Sentinel Italic_

- __Sentinel Bold__

- <p class="sans"> Balto </p>

- <p class="sans"><strong> Balto Bold </strong></p>

## Başlıklar

Bunlar mevcut başlık boyutları. Yapabildiğim kadarıyla [modular scale'i](http://www.modularscale.com) takip etmeye çalıştım. 

# H1: Karateke --- 1.959em

Kapanan kepengin paslı aralığından sıyrılarak asfalta çıktı. Elinde çanta-radyo taşıyan bir işçinin omuzuna kondu, yorulmuştu. Şehrin fakir mahallelerinden birine giden çamurlu bir otobüse bindiler.

## H2: Karateke --- 1.656em

Eski otobüsün homurtuları arasında bir süre sesi duyulmadı. Işıklı yolları geride bıraktılar; sarsıla sarsıla tozlu yollarda ilerlemeye başladılar. Sesini biraz yükseltti işçinin radyosunda.

### H3: Karateke --- 1.4em

Bu yollara, bu toza, bu sıcağa başka türlü dayanılmazdı. İşçiden bir durak önce indi; ters taraftan gelen başka bir otobüse bindi. Biletçiyle oturup iktidara yaranmaya çalışan bir işçi gazetesini, ilanlarına varıncaya kadar okudular.

#### H4: Karateke --- 1.183em

Sonra hızlandı: apartmanlara girdi. Demokrat Ahmet Beyin evinde, bir senfoniyle bir popüler müzik arasında dinlendi. Bazen high fidelity oldu, bazen mono.

## Alıntılar, tablolar ve resimler

Bazen kendi sözlerim yerine tezlerimi güçlendirmek için alıntılar kullanabilirim. Mesela şu aşağıdaki gibi bir __blockquote__ yardımcı olabilir:

> İnsanları kendinize inandırmak istiyorsanız ünlü düşünürleri alıntılayın. Günümüzde düşünür var mı bilemiyorum. O kişi ne yapıyor yani gün boyu oturup düşünüyor mu? Maaş alıyor mu? Düşünüp bir eylemde bulunması gerekiyor mu, yoksa düşünmesi kafi mi? Bilemiyorum. Kafamda deli sorular. --- Some Wise Guy, 1982.

Başka neler var. Mesela __tablolar__. <del>Markdown'da table yapmak da ayrı bir zevk.</del> Jekyll'in kullandığı Kramdown'da pek zevkli değil. 

{% figure caption: "Tablo 1: Hayvanlar Alemi" class:"table-caption" %}
| Kriter | Flamingo | Fil | Koala |
|:-|:-:|:-:|:-:|
| __Tür__ | Kuş | Memeli | Memeli |
| __Renk__ | Pembe | Mavimsi Gri | Siyah-Beyaz |
| __Uçma durumu__ | Uçar | Uçmaz | Uçabilir |
{% endfigure %}

Bence çok tatlı bir tablo oldu. <del>Yalnız nasıl caption ekleyeceğimi henüz çözemedim.</del> <ins>Yani bir şey uydurdum ama pek de çözdüm sayılmaz.</ins> Biraz renk katmak için şimdi bir foto ekleyeceğim yazıma. Hadi hayırlısı! 

{% figure caption: "Al sana caption." %}
<div class="ratio-box" style="padding-bottom: 56.25%">
<img alt=" " class="lazyload" data-src="/assets/img/others/budapest.jpeg">
<noscript>
<img src="/assets/img/others/budapest.jpeg">
</noscript>
</div>
{% endfigure %}

Allah'ım, tipe gel! Ehehehe! Dur ya öyle gülmek yerine emoji kullanayım. Emojiler çalışıyor mu? 😂😘🐨. Galiba evet. 

## Listeler

Şimdi listelere geldik. İki tür var. Sıralı ve sırasız. Mesela şu sıralı. Rakamlarla yani:
1. Bu biiiirrrr. Pijamalı hasta, yağız şoföre çabucak güvendi. Güvenmekle iyi mi etti, kimsecikler bilmiyor. 
2. Bu ikiiiiii
3. Bu da üç

Bu da sırasız. Nokta atışı:
- Hey there beautiful!
- Hey göklere duman salmış dağlar hey
- Hey Joe!

"Nested" listeler oluyor mu? Şöyle ki:
- Gel bana gel gel
- Gelmezsen üzülürüm
	- Adım adım yaklaş
		- Vur götüne oynasın.
		- Çal tefi şenlensin.

Ordered ve nested:
1. Memeli
2. Kuş
	1. Ördek
	2. Pelikan
		1. Aşık pelikan _(Eros pelicanus)_
		2. Tepeli pelikan

Hatta checklist bilem yapabiliriz. Normal Markdown'da olmayan bir şey ama ''Github flavored markdownda'' var imiş. Yalnız, sanırım ''check etme'' işini blogun sahibi olarak sadece ben yapabiliyorum. 

- [x] Ekmeğe git.
- [x] Ekmek al.
- [x] Ekmeği getir. 
- [ ] Ekmeği ye. 

## Kod

Daha teknik arkadaşlar için kod blokları da var. Örneğin bir HTML kodunu şöyle gösterebiliriz: 

```html
<head> 
<p> It is beautiful around here boi! </p>
</head>
```

Bununla birlikte inline ```kodları``` da böyle yazabiliriz. 

## Uyarı

Mesela çok önemli bir şey söylemek istediğimde, okuyucunun dikkatini çekmek için şaşalı bir uyarı mesajı kullanabilirim. Nasıl mı? İşte böyle:

{% notice %}
### Acayip mühim şeylerden bu kutuda bahsediyorum
Çok önemli bir uyarı. Kapanan kepengin paslı aralığından sıyrılarak asfalta çıktı. Elinde çanta-radyo taşıyan bir işçinin omuzuna kondu, yorulmuştu. Şehrin fakir mahallelerinden birine giden çamurlu bir otobüse bindiler. Eski otobüsün homurtuları arasında bir süre sesi duyulmadı. Işıklı yolları geride bıraktılar; sarsıla sarsıla tozlu yollarda ilerlemeye başladılar. Sesini biraz yükseltti işçinin radyosunda. 
{% endnotice %}

## Tanımlar 

HTML'deki ```<dl>```, ```<dt>``` ve ```<dd>``` elementleri tanım listeleri için kullanılıyor. Şöyle ki:

Blog
: Genellikle internette, kişilerin fikirlerini dışavurumcu bir tavırla yazdıkları pek kişisel mecralar

Karateke
: Blogların efendisi

## Renk yelpazem

Son olarak bir de sitede kullanılan renklerin skalasını buraya yapıştırıyorum. Aşağıdaki görsel bir resim değil. [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) ile oluşturulmuş kutucuklar. 

<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.6em;
  width: 100%;
}

.flex-container > div {
  margin: 0.5em;
  text-align: center;
  line-height: 1.1;
  padding: 3em 1em;
  font-size: 0.667em;
  border-radius: 0.2em;
  flex: 1 0 12%;
}
</style>

<div class="flex-container">
  <div style="background-color:#E3E3E3;">#E3E3E3</div>
  <div style="background-color:#B5B5B6;">#B5B5B6</div>
  <div style="background-color:#ABD1C6;">#ABD1C6</div>
  <div style="background-color:#dd3435; color: white;">#dd3435 </div>
  <div style="background-color:#3A3A3A; color: white;">#3A3A3A </div>
  <div style="background-color:#292929; color: white;">#292929 </div>
</div>

Looks dope, right?


[^1]:	Çok yakışıklı bir dipnot bence.

[^2]:	Bu daha bile güzel oldu. Helal olsun!

[^3]:	Kullandığınız aygıtın piksel genişliğine göre gördüğünüz sütun sayısı değişiklik gösterebilir.