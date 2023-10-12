


# [Deadline: 27-maydan 31-maygacha]


### User model
```
[xx] - Ro'yhatdan o'tish
[xx] - Foydalanuvchi o'zining quyidagi malumotlarini tahrirlay olishi kerak: 
    (faqat headerda userni ozining tokeni bolsagini tahrirlay olishi kerak)
        1. username
        2. email
        3. password
        4. link
[xx] - Link manzillari faqat telegram va instagram manzillar kiritilishi kerak
[xx] - User alohida rasmini tahrirlay olish imkoniyati  (faqat headerda userni tokeni bolsagini o'chira olsin)
[xx] - Avtorizatsiya bilan ishlash (faqat token orqali amalga oshirilishi zarur)
[xx] - User alohida malumotlarini olish imkoniyati bolishi 
[xx] - Rolega qarab foydalanuvchilarni alohida olish  
        (pagination orqali amalga oshirish kerak)  
        (faqat headerda userni tokeni bolsagini o'chira olsin)
        (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Headerdagi tokendan userni malumotini decode qilish uchun alohida API chiqaring
[] - Userni alohida o'chirish (faqat headerda userni tokeni bolsagini o'chira olsin) (admin o'chirish huquqiha ega bo'lsin)

```
### Category model
```
[xx] - Yangi kategoriya yaratish (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Alohida kategoriyani olish 
[xx] - Barcha ketegoriyani olish (pagination orqali amalga oshirish kerak)
[xx] - Kategoriyani alohida tahrirlash (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Kategoriyani alohida o'chirish (faqat headerda userni tokeni bolsagini o'chira olsin) (faqat admin ushbu huquqga ega bo'lsin)
```
### Year model
```
[xx] - Yangi yil yaratish (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Alohida yilni olish
[xx] - Barcha yillarni olish (pagination orqali amalga oshirish kerak)
[xx] - Yillarni alohida tahrirlash (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Yilni alohida o'chirish (faqat headerda userni tokeni bolsagini o'chira olsin) (faqat admin ushbu huquqga ega bo'lsin)
```
### Language model
```
[xx] - Yangi til yaratish (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Alohida tilni olish
[xx] - Barcha tillarni olish  (pagination orqali amalga oshirish kerak) 
[xx] - Tillarni alohida tahrirlash (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Tilni alohida o'chirish (faqat headerda userni tokeni bolsagini o'chira olsin) (faqat admin ushbu huquqga ega bo'lsin)
```

### Davlatlar model
```
[xx] - Yangi davlat yaratish (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Alohida davlatni olish
[xx] - Barcha davlatlarni olish  (pagination orqali amalga oshirish kerak)
[xx] - Davlatlarni alohida tahrirlash (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Davlatlarni alohida o'chirish (faqat headerda userni tokeni bolsagini o'chira olsin) (faqat admin ushbu huquqga ega bo'lsin)
```
### Janr model
```
[xx] - Yangi janr yaratish
[xx] - Alohida janrni olish
[xx] - Barcha janrlarni olish (pagination orqali amalga oshirish kerak)  (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Janrni alohida tahrirlash  (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Janrni alohida o'chirish (faqat headerda userni tokeni bolsagini o'chira olsin)  (faqat admin ushbu huquqga ega bo'lsin)
```
### Tag model
```
[xx] - Yangi tag yaratish  (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Alohida taglarni olish
[xx] - Barcha taglarni olish (pagination orqali amalga oshirish kerak)
[xx] - Janrni alohida tahrirlash  (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Janrni alohida o'chirish (faqat headerda userni tokeni bolsagini o'chira olsin)  (faqat admin ushbu huquqga ega bo'lsin)
```


# [Deadline: 1-iyundan 2-iyungacha]


### Cast model
```
[xx] - Yangi aktyorlarni yaratish  (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Barcha aktyorlarni olish (pagination orqali amalga oshirish kerak)
[xx] - Aktyorlarni alohida tahrirlash  (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Aktyorlarni alohida o'chirish (faqat headerda userni tokeni bolsagini o'chira olsin)  (faqat admin ushbu huquqga ega bo'lsin)
```

### Speciality model
```
[xx] - Yangi speciality yaratish
[xx] - Alohida specialityni olish
[xx] - Barcha specialityni olish (pagination orqali amalga oshirish kerak)  (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Specialityni alohida tahrirlash  (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Specialityni alohida o'chirish (faqat headerda userni tokeni bolsagini o'chira olsin)  (faqat admin ushbu huquqga ega bo'lsin)
```

### Season + Kino + Multfilm model
```
[xx] - Yangi model  yaratish
[xx] - Alohida modellarni  olish
[xx] - Barcha  modellarni olish (pagination orqali amalga oshirish kerak)  (faqat admin ushbu huquqga ega bo'lsin)
[xx] - name, description, age, budget, action qismlarini ni alohida tahrirlash
        1.faqat admin ushbu huquqga ega bo'lsin
[-] - category_ID, year_ID, language_ID, subtitle_ID, casts_ID, director_ID, country_ID va genre_ID ni alohida tahrirlash
        1.faqat admin ushbu huquqga ega bo'lsin
[-] - fayllarni alohida tahrirlash
[] - Modellarni  alohida o'chirish 
        1.faqat headerda userni tokeni bolsagini o'chira olsin  
        2.faqat admin ushbu huquqga ega bo'lsin
        3.fayllarni o'chirganda ortiqcha fayl papkadan o'chishi kerak
```

### Video model
```
[xx] - Yangi video  yaratish
[xx] - Alohida videolarni  olish
[xx] - Barcha  videolarni  olish (pagination orqali amalga oshirish kerak)  (faqat admin ushbu huquqga ega bo'lsin)
[xx] - name, description, kinoTime, quality qismlarini ni alohida tahrirlash
        1.faqat admin ushbu huquqga ega bo'lsin
[xx] - model_ID (Season + Kino + Multfilm model) ni alohida tahrirlash
        1.faqat admin ushbu huquqga ega bo'lsin
[--] - fayllarni alohida tahrirlash
[xx] - videolarni  alohida o'chirish 
        1.faqat headerda userni tokeni bolsagini o'chira olsin  
        2.faqat admin ushbu huquqga ega bo'lsin
        3.Fayllarni o'chirganda orqiqcha fayl papkadan o'chishi kerak
[xx] - videoni ichiga kirganda view 1 marta oshsin agar user bir necha marotaba kirsa ham 1 marta bolib turaversin
[xx] - 1 ta foydalanuvchi videoga rating baho qoya olishi kerak
        Rayting baho qoyayotganda quyidagi malumot ham kelishi kerak
                1. Umumiy ushbu videoga baho qoyganlar soni va o'rtacha baho (o'rta arifmetika boyicha)
                2. 1 dan 10 gacha qanchadan baholar qoyilganligi haqida malumot ham chiqishi kerak, (play marketga o'xshab)
                3.diewcting,entertaining, Plot va actor qismlarni ham sonlar bilan ajratilgan bo'lishi zarur
```

### Rating model 
```
[xx] - rayting baho qoyish
[] - rayting baholarni ko'rish (barchasini) (pagination orqali amalga oshirish kerak)  (faqat admin ushbu huquqga ega bo'lsin)
[] - Foydalanuvchi   kino, serial, va multfilmlarga qoyga baholari chqib turushi kerak. Agar bitta  kino, serial, va multfilmga bir necha marotaba baho qoygan bolsa, misol uchum Qasoskorlar 1 kinosiga 10 marta baho qoygan bolsa umumiy o'rtagacha baho chqiqb tursin, faqat o'ziga tegishlisi
```






# [Deadline: 7-iyundan 9-iyungacha]

### Views + History + Watch_later   model 
```
[] - Ushbu modelda kino serial yoki multik korgan paytda shu 3 ta modelning prosmotri oshsin agar foydalanuvchi 2 marotaba ko'rgan paytda 1 korilgan bolishi kerak va status ham o'zgarishi kerak
[] - Agar 3 ta model boyicha video korilganda foydalanuvchining HISTORY bolimiga qo'shilishi kerak. Agagr bir videoni qayta qo'shiladigan bolgan paytda qayta qoshilmasi va status ham o'zgarishi kerak ca foydlaanuvchining profiliga olinishi kerak
[] - Agar 3 ta model boyicha video korilganda foydalanuvchining WATCH_LATER bolimiga qo'shilishi kerak . Agag bir videoni qayta qo'shiladigan bolgan paytda qayta qoshilmasi va status ham o'zgarishi kerak va foydlanuvchining profiliga olinishi kerak
[] - Foydalanuvchi HISTORY va WATCH_LATER bolimidagi barcha malumotni hammasini bittada o'chira olishi kerak, 
```

### News model
```
[xx] - Yangi yangilik yaratish (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Alohida yangilikni olish 
[xx] - Barcha yangilikni olish (pagination orqali amalga oshirish kerak)
[] - Yangiliklarni alohida tahrirlash (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Yangiliklarni alohida o'chirish (faqat headerda userni tokeni bolsagini o'chira olsin) (faqat admin ushbu huquqga ega bo'lsin)
[xx] - Yangilikning ichiga kirgan paytda prosmotr bittaga oshsin
[] - Rayting baho qoshilishi kerak va o'rtacha arifmetika boyicha 
```
### Comment model
```
[xx] - 3 ta video (3 ta model nazarda tutilgan) ga koment qoldirish imkoniyati bolishi kerak
[xx] - Kommentga layk va dislayk qoyish imkoniyati bolishi kerak
[-] - User faqat o'ziga tegishli komentni tahrirlay olish imkoniyati bolishi kerak
[-] - User oziga tegishli hamma komentlarni olish imkoniyati ega bolishi kerak
[-] - 3 ta modelni yagona id si boyicha hamma komentlarni olish imkoniyati bolishi kerak
```
### Reply model
```
[xx] - 3 ta video (3 ta model nazarda tutilgan) ga komentga nissbatan otvet  qoldirish imkoniyati bolishi kerak
[xx] - Otvetlarga layk va dislayk qoyish imkoniyati bolishi kerak
[-] - User faqat o'ziga tegishli otvetlarni tahrirlay olish imkoniyati bolishi kerak
[-] - User oziga tegishli hamma otvetlarni olish imkoniyati ega bolishi kerak
[-] - Yagona koment  id si boyicha hamma otvetlarni olish imkoniyati bolishi kerak
```
### Reviews model
```
[-] - 3 ta video (3 ta model nazarda tutilgan) ga review qoldirish imkoniyati bolishi kerak
[-] - Rayting baho qoyish imkoniyati bolishi kerak
[-] - User oziga tegishli reviewlarni ko'rish imkoniyati bolishi kerak
[-] - User o'ziga tegishli reviewni tahrirlay olish imkoniyati ega bolishi kerak
[-] - User oziga tegishli barcha reviewlarni ochirish imkoniyati bolishi kerak 
```

### Tarif model
```
[-] - Yangi tarif yarata olish imkoniyati 
[-] - Yangi tarifni tahrirlash
[-] - Yangi tarifni alohida olish
[-] - Tariflarni hammasini olish
[-] - Tarifni alohida o'chirish
```
### Payment list
```
[-] - User oziga tarif sotib olishi kerak
[-] - Sotib olganda user statusi vip bolishi kerak va tarif tugash sanasi yozib qoyilishi kerak
[-] - Yangi tarif sotib olinganda ozirgi olgan tarif boyicha update bolishi kerak
[-] - Agar video modeldagi videoni korishni istagan paytida ushbu holat boyicha check qilinib keyib videoni uzatilishi kerak
        1.Agar video bepul bolsa avtomatik korish imkoniyati bolishi kerak
        2.Agar video pullik bolsa check qilinadi, keyin userning statusi boyicha check qilinadi va keyin malumot uzatilinadi
[-] - Agar user avtorizatsiya paytida deadline vaqti otib ketsa statusni avtomatik none qilib keyin tokenni berish kerak
```

### Trailer model
```
[-] - 3 ta model boyicha trailer qoshish
[-] - 3 ta model boyicha trailerni alohida olish
[-] - 3 ta model boyicha trailerni hammasini olish
[-] - 3 ta model boyicha trailerni video qismini faqat tahrirlash imkoniyati bolishi kerak
[-] - 3 ta model boyicha trailerni alohida o'chirish
```
