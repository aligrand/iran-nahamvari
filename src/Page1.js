function show_data(data_name){
    document.getElementById("info-div").innerHTML = eval(data_name);
}

const alborz = "<h1>رشته کوه البرز</h1>\
<br>\
<h3>موقعیت جغرافیایی</h3>\
<p>از تنگه منجیل شروع شده و در امتداد غربی-شرقی تا حوالی کوه های شاهکوه در نزدیکی شاهرود و گردنه خوش ییلاق قرار دارد</p>\
<br>\
<h3>ویژگی ها</h3>\
<ul>\
    <li>دامنه ی کوه ها به سمت شمال یا جنوب است</li>\
    <li>دارای دره های وسیع و عمیق که رود هایی چون چالوس و هراز در آن ها جریان دارند</li>\
    <li>حاصل فعالیت های کوهزایی و فعالیت های آتشفشانی در دوره ی کواترنر می باشد</li>\
    <li>مراکز جمعیتی بسیاری در امتداد آن مستقر شده و یکی از کانون های عمده ی فعالیت های اقتصادی کشور به شمار می رود</li>\
    <li>بلندترین قلل البرز دماوند با ارتفاع 5610 متر و علم کوه نام دارند</li>\
</ul>";

const arasbaran = `<h1>رشته کوه ارسباران(قره داغ)</h1>
<br>
<h3>موقعیت جغرافیایی</h3>
<p>این رشته کوه در شمال استان آذربایجان شرقی، از شمال کوه قوشا داغ و جنوب اهر تا رود ارس گسترده شده است</p>
<br>
<h3>ویژگی ها</h3>
<ul>
    <li>یکی از برترین مقاصد گردشگری و طبیعتی گردی ایران است</li>
    <li>ارتفاع آن از 256 تا 2896 متر از سطح دریا متغیر است.</li>
</ul>`;

const binalood = `<h1>رشته کوه بینالود</h1>
<br>
<h3>موقعیت جغرافیایی</h3>
<p>رشته کوه بینالود به طول تقریبی 144 کیلومتر واقع در شمال شرقی ایران، در امتداد شرقی رشته کوه البرز و در استان خراسان رضوی قرار دارد</p>
<br>
<h3>ویژگی ها</h3>
<ul>
    <li>جهت این رشته کوه شمال غربی به جنوب شرقی است</li>
    <li>بلندترین قله آن بینالود مشهور به بام خراسان به بلندی 3211 متر در 26 کیلومتری شمال شرق نیشابور و در غرب مشهد قرار دارد</li>
</ul>`;

const hezar_masjed = `<h1>رشته کوه هزار مسجد</h1>
<br>
<h3>موقعیت جغرافیایی</h3>
<p>این رشته کوه به شکل منظم و موازی در شمال شرقی ایران واقع شده است و تا سرخس در مرز ترکمنستان ادامه دارد</p>
<br>
<h3>ویژگی ها</h3>
<ul>
    <li>بخشی از هزار مسجد را کوپه داغ می نامند</li>
    <li>در امتداد جاده درگز-قوچان به نام رشته کوه «الله اکبر» خوانده می شود</li>
    <li>ارتفاع قله اصلی آن 2400 متر است</li>
    <li>این کوهستان قوچان را از درگز جدا می کند</li>
    <li>جهت این رشته کوه از شمال غربی به جنوب شرقی می باشد</li>
</ul>`;

const joghatai = `<h1>رشته کوه جغتای</h1>
<br>
<h3>موقعیت جغرافیایی</h3>
<p>ین کوه ها در غرب استان خراسان رضوی و در شمال شرق ایران واقع هستند</p>
<br>
<h3>ویژگی ها</h3>
<ul>
    <li>این رشته کوه جداکننده ی دشت جوین و دشت سبزوار می باشد</li>
    <li>ارتفاع آن 3858 متر است</li>
</ul>`;

const koohsorkh = `<h1>رشته کوه کوهسرخ</h1>
<br>
<h3>موقعیت جغرافیایی</h3>
<p>این رشته کوه از سمت غرب به دشت کویر منتهی می شود و از سمت شرق به کوه چهل تن در تربت حیدریه محدود است</p>
<br>
<h3>ویژگی ها</h3>
<ul>
    <li>ارتفاعات کوهسرخ از شرق به غرب کاهش می یابد</li>
    <li>شمال ارتفاعات کوهسرخ سرزمین های پست  جلگه ای نیشابور و سبزوار فرا گرفته است</li>
    <li>از جنوب به جلگه ی حاصلخیز حومه کاشمر ختم می شود</li>
    <li>بلندترین قله ی آن آریا با ارتفاع 2515 متر نام دارد</li>
</ul>`;

const markazi = `<h1>منطقه کوهستانی مرکزی</h1>
<br>
<h3>موقعیت جغرافیایی</h3>
<p>اگر سه نقطه: کوه جغتای در خراسان رضوی، گردنه آوج در استان قزوین و قله ی کوه بزمان(خضر زنده) در سیستان و لوچستان را به یکدیگر وصل کنیم<br>
    مثلثی تشکیل می شود که منطقه ی کوهستانی مرکزی نامیده می شود</p>
<br>
<h3>ویژگی ها</h3>
<ul>
    <li>
        <p>ناهمواری های این منطقه 2 نوع است</p>
        <ol>
            <li>کوه های چین خورده به نام کوه های مرکزی مانند کوه های کرکس</li>
            <li>توده های نفوذی آذرین به نام کوه های منفرد مرکزی مانند شیرکوه، هزار و لاله زار</li>
        </ol>
    </li>
</ul>`;

const sabalan = `<h1>توده کوهستانی سبلان</h1>
<br>
<h3>موقعیت جغرافیایی</h3>
<p>در شمال غرب ایران، استان اردبیل قرار دارد</p>
<br>
<h3>ویژگی ها</h3>
<ul>
    <li>سومین کوه بلند ایران پس از دماوند و علم کوه می باشد</li>
    <li>یک آتشفشان غیر فعال است</li>
    <li>ارتفاع آن 4811 متر از سطح دریا می باشد</li>
</ul>`;

const sahand = `<h1>توده کوهستانی سهند</h1>
<br>
<h3>موقعیت جغرافیایی</h3>
<p>در شمال غرب ایران در استان آذربایجان شرقی، شمال شهر مراغه قرار دارد.</p>
<br>
<h3>ویژگی ها</h3>
<ul>
    <li>یکی از بزرگترین و مهمترین برجستگی های آذربایجان و از معروف ترین کوه های آتشفشانی ایران است.</li>
    <li>ارتفاع آن 3707 متر از سطح دریا می باشد</li>
</ul>`;

const sharghi_jonoobsharghi = `<h1>کوه های شرقی و جنوب شرقی</h1>
<br>
<h3>موقعیت جغرافیایی</h3>
<p>در جنوب استان سیستان و بلوچستان و اطراف چاله جازموریان در کرمان، منطقه ی مکران واقع شده که در آن رشته کوه هایی به نام بشاگرد و اطراف آن<br>
    کوه هایی با ارتفاع نسبتا کم و فرسوده وجود دارد</p>
<br>
<h3>ویژگی ها</h3>
<ul>
    <li>از پدیده های زیبای زمین شناسی در این منطقه ناهمواری های مریخی(کوه های مینیاتوری) و گلفشان ها می باشند</li>
</ul>`;

const talesh = `<h1>رشته کوه تالش</h1>
<br>
<h3>موقعیت جغرافیایی</h3>
<p>زنجیره ای از کوه ها است که در شمال غربی ایران و جنوب شرقی جمهوری آذربایجان قرار دارد</p>
<br>
<h3>ویژگی ها</h3>
<ul>
    <li>این کوه ها بخش شمال غربی رشته کوه البرز را تشکیل می دهند</li>
    <li>کوه های تالش در شرق آذربایجان با جهت شمالی  جنوبی در حاشیه ی دریای خزر تا دره ی سفیدروددر گیلان ممتد است</li>
    <li>دامنه ی غربی آن بسیار کم درخت و دامنه شرقی با شیب تند به سوی دریال خزر می باشد</li>
    <li>سفیدکوه بلندترین قله ی آن به ارتفاع 3200 متر در نزدیکی سفیدرود قرار دارد</li>
</ul>`;

const zagros = `<h1>رشته کوه زاگرس</h1>
<br>
<h3>موقعیت جغرافیایی</h3>
<p>این رشته کوه از مریوان در کردستان با جهت شمال غربی-جنوب شرقی تا تنگه ی هرمز قرار دارد</p>
<br>
<h3>ویژگی ها</h3>
<ul>
    <li>این رشته کوه دیواره مانند با دره های موازی به طول صد ها کیلومتر می باشد</li>
    <li>قلل مهم آن دنا، زردکوه و الوند نام دارند</li>
    <li>منشع ایجاد آن برخورد صفحه ی شبه جزیره عربستان با صفحه ی اوراسیا می باشد</li>
    <li>یکی از زیباترین و فعال ترین پدیده های زمین شناسی در آن وجود گنبد های نمکی می باشد</li>
    <li>از لحاظ موقعیت جغرافیایی کمی از آن در جنوب اصفحان و بخش اعظم آن در شمال شرقی استان کهکلویه و بویراحمد قرار دارد</li>
</ul>`;