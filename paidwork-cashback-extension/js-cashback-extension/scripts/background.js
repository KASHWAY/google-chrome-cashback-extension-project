const tabShops = [
  "Allegro",
  "Bershka",
  "Mediaexpert",
  "Leroymerlin",
  "Pyszne",
  "Empik",
  "Eobuwie",
  "Huawei",
  "Alicentrum",
  "4home",
  "Modivo",
  "Aliexpress",
  "Carrefour",
  "Ceneo",
  "Electro",
  "Gate.shop",
  "Hebe",
  "Neonet",
  "MediaMarkt",
  "Njumobile",
  "Orange",
  "Philips",
  "Sinsay",
  "Surfshark",
  "Flaconi",
  "Molpharma",
  "Gatta",
  "Douglas",
  "zakupy.auchan", //auchan direct
  "Crocs",
  "NordVPN",
  "Avon",
  "Yanosik",
  "NewBalance",
  "E-recepta",
  "Erli",
  "Tefal",
  "Vasco",
  "Vobis",
  "Wolt",
  "Auchan",
  "G2A",
  "Stadler-Form",
  "Play",
  "Wittchen",
  "eKobieca",
  "Yellowtipi",
  "Tirendo",
  "Streetstyle24",
  "Guess",
  "Fera",
  "Delikatesyznatury",
  "Lancome",
  "Loberon",
  "BellaStoria",
  "Dekoria",
  "Goe",
  "Glovii",
  "51015",
  "Halfprice",
  "Perfumy",
  "Muscat",
  "butomaniak",
  "Fitanu",
  "Activlab",
  "Alkmie",
  "Armodo",
  "Bee",
  "Czarymary",
  "Dax",
  "Lookfantastic",
  "Martes",
  "Promki24",
  "Jameshawk",
  "Kupillo",
];

const tabImages = [
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/mES50PN7BFk0174tZPWje2usT.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/m65AkSMeSxW6MGTjyzaJHt0jE.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/CO3FPLlNB90sixF7aVVeQq63S.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/mwmKQLNGtFbSFTwBDmll6cVdm.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/qQzkWDyisFpdOta9PJfuZczaI.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/E0ZURlFwLIbKzhVUHXeXhiL2Y.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/8fAu4OX8cQBMvSIGrq2eFhfFg.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/vCcpR2fLZ52ZWamRwTDkRlSpO.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/xOcFPcl2OKKO2zHHghjuCfrXv.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/cFB88qcpRQbgWqMCGlcIC30jT.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/QlExEaygONGQoyADynJ2sTEVu.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/sALG9fIMEGZ16QfAUzYBbeEG1.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/dhO0KWNl6z1meWzkkdEQfAxCh.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/qsZZz2cty2WPUhlJcrQYOagJV.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/9EkCm4uBEM6pQMmcUcyREPp1O.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/1BCFaSgZ4IWYDy5eMt9QTOlPF.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/OJuuMhp06nUqSJQPydzZ7sD5P.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/PYmDzrmUwk1SUBrLFO570UsKU.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/LMWp89bP1IDvAXmJBKRC3Pwxx.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/P6YUolCIymZ2bK3gXAV6TiPsf.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/qR9fRRqX2USkq8xgPc4vrsmJD.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/O7LSoKKhuE3tERyyfcUENiCZN.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/FpJO9BeSeviu2EJDfQysoXUpC.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/wU2uASThz0KzkTqHmopaNpmt7.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/WDLM9pDgx4Rpmr4fDea9RJjzq.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/XLrnGlsrw3cdA5pgWCAO69JWe.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/YSNIyX1OE8CWbRziQGXcFiQsR.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/YKehasc7DDGblNz351mPXR513.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/iDQc08sfKgmY6Qiym2I0rAD58.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/T1TDGmOB7VNexwaFIoDsUoakd.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/PikNHB3Yuy5iNm5mC5TkV4OPq.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/4FyEu2HSNgYtF9AKFozNuaBzq.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/C18Wi4GvgnaOpOOabEAr1Qyv4.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/jWEhI9LTC5AYQgt38XzKltRoJ.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/i2AHr94jtwl7utN0qnm5WWtHJ.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/OFdUhf3OS7uqThao0ZzsBlBUr.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/AjpX7NfrliKk2ugOwRpgMuPId.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/S8e9MAinjRsgy2GqUmzJ0uuda.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/K8HoNPILVSyKZiGf6D8oz9hF3.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/ih8BInD1WuoUtgG0ASAs1aqOO.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/ZUPf4TTLNP10gL4pAStN4RNr0.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/XgrQmx4qlsvvzQlr0Y6L9qOsE.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/fYdsajZ3RB7zIL0mlmUMCiV2t.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/fr3PLrDjvuDAJ5lCPtcpVs3TJ.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/8qYdaNj98RrXwD9xfjQLnbA2r.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/oZuN5wRc6I5zeT7v9czCJvNu7.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/Tn0CBSKhydNKDQfQGSCQlMhLD.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/LoeUDTvnjxzH1no1rpKbYeZAa.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/jVMl92mmZ3hR5H1LIkdIeuOtJ.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/YYaxd7ZCx3hBUY6NscXqUg6uF.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/60OZDgRqJWX5c2hkn2BXBF2dQ.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/Je5FQ1SjFRJgvDTWjNVFgPKE5.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/cWVN1iE4DMV6cBCpb2ti30EfP.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/nocGDVeHi2oJthrDrEPdKjIOK.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/T5jZk88YNFdF2jPApiVZwk1VD.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/R72HkbyoJASzmYAczPdqABOqq.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/MMOLHtVJrAiaXlv885DXGwfn7.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/J4e18JoQGFo3hddD3MtV7Z9AU.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/57lWWsFbQRL6VbyqSHpXGLpZY.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/muxQqhxhNdjJydoFLI3hCorPo.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/mPQ7PeBhULKNevv0DKL5I776s.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/yMDfBx4OluCP8uflzUkAMj9VT.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/h03Ysfrjs6ry7OskK7DCPnrWm.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/dFuXlbA7y2qmh039qYatOW76i.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/XRHKE7kNAkEKgwBRQY10rMUti.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/IXxBUVhIAhV6Wr8oNHu27Qljc.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/e1SEv4HHeb3FIg25zlAIkJ8oE.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/e4pwuv0hgHjNsfBnNWeZ1Vj2v.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/ooSQPUC3wGMYjerd7NyGZgnnx.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/iVZ7LIPg0W92DqthVQbQP9lIQ.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/CSRvgh89xk58wlEG0JSeDcmF1.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/VcDEDjEuzGjgPQg2EImYiY5Kt.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/D8heKJsjpWctfzErBZNXRt1Ba.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/KApsrZth2IVI1Tvlv3Nr2wvaj.png",
  "https://cms.paidwork.com/root/static/img/cashback/cashback_icons/Yv0aaFVvA7sTP5vai1s6BZPv3.png",
];

const tabCashbacks = [
  "0.007",
  "0.025",
  "0.0075",
  "0.02",
  "0.015",
  "0.009",
  "0.012",
  "0.015",
  "0.009",
  "0.009",
  "0.075",
  "0.025",
  "0.0175",
  "0.009",
  "0.009",
  "0.015",
  "0.03",
  "0.075",
  "0.075",
  "0.55",
  "0.25",
  "0.035",
  "0.009",
  "0.20",
  "0.06",
  "0.075",
  "0.035",
  "0.02",
  "0.0165",
  "0.02",
  "0.20",
  "0.0335",
  "0.01",
  "0.0325",
  "0.075",
  "0.0076",
  "0.03075",
  "0.02",
  "0.0125",
  "0.12",
  "0.05",
  "0.025",
  "0.0296",
  "0.125",
  "0.05",
  "0.03",
  "0.02",
  "0.015",
  "0.03",
  "0.0375",
  "0.02",
  "0.025",
  "0.06",
  "0.06",
  "0.035",
  "0.015",
  "0.03",
  "0.03",
  "0.04",
  "0.0325",
  "0.025",
  "0.035",
  "0.075",
  "0.025",
  "0.025",
  "0.03",
  "0.04",
  "0.02",
  "0.02",
  "0.03",
  "0.035",
  "0.02",
  "0.05",
  "0.049",
  "0.025",
];
const shopslink =[
    "https://clk.tradedoubler.com/click?p=288386&a=3288579",
    "https://clk.tradedoubler.com/click?p=305123&a=3288579",
    "https://clk.tradedoubler.com/click?p=237638&a=3288579",
    "https://clk.tradedoubler.com/click?p=242625&a=3288579",
    "https://www.awin1.com/cread.php?awinmid=12109&awinaffid=1158729&ued=https%3A%2F%2Fwww.pyszne.pl",
    "https://clk.tradedoubler.com/click?p=289664&a=3288579",
    "https://clk.tradedoubler.com/click?p=274960&a=3288579",
    "https://clk.tradedoubler.com/click?p=306442&a=3288579",
    "https://clk.tradedoubler.com/click?p=333238&a=3288579",
    "https://clk.tradedoubler.com/click?p=317166&a=3288579",
    "https://clk.tradedoubler.com/click?p=300315&a=3288579",
    "https://clk.tradedoubler.com/click?p=319552&a=3288579",
    "https://clk.tradedoubler.com/click?p=321318&a=3288579",
    "https://clk.tradedoubler.com/click?p=300324&a=3288579",
    "https://clk.tradedoubler.com/click?p=268189&a=3288579",
    "https://clk.tradedoubler.com/click?p=310283&a=3288579",
    "https://clk.tradedoubler.com/click?p=333765&a=3288579",
    "https://clk.tradedoubler.com/click?p=249106&a=3288579",
    "https://clk.tradedoubler.com/click?p=229227&a=3288579",
    "https://clk.tradedoubler.com/click?p=242338&a=3288579",
    "https://clk.tradedoubler.com/click?p=51374&a=3288579",
    "https://clk.tradedoubler.com/click?p=319057&a=3288579",
    "https://clk.tradedoubler.com/click?p=273525&a=3288579",
    "https://clk.tradedoubler.com/click?p=327018&a=3288579",
    "https://clk.tradedoubler.com/click?p=299214&a=3290085",
    "https://clk.tradedoubler.com/click?p=294885&a=3292089",
    "https://clk.tradedoubler.com/click?p=284650&a=3292089",
    "https://clk.tradedoubler.com/click?p=239104&a=3292089",
    "https://clk.tradedoubler.com/click?p=296152&a=3292089",
    "https://clk.tradedoubler.com/click?p=259674&a=3292089",
    "https://clk.tradedoubler.com/click?p=268920&a=3292089",
    "https://clk.tradedoubler.com/click?p=293254&a=3292089",
    "https://clk.tradedoubler.com/click?p=335548&a=3292087",
    "https://clk.tradedoubler.com/click?p=324327&a=3292090",
    "https://clk.tradedoubler.com/click?p=289682&a=3292118",
    "https://clk.tradedoubler.com/click?p=287639&a=3292118",
    "https://clk.tradedoubler.com/click?p=266994&a=3292118",
    "https://clk.tradedoubler.com/click?p=235514&a=3292118",
    "https://clk.tradedoubler.com/click?p=295926&a=3292118",
    "https://clk.tradedoubler.com/click?p=77514&a=3292118",
    "https://clk.tradedoubler.com/click?p=317492&a=3292118",
    "https://clk.tradedoubler.com/click?p=273363&a=3292118",
    "https://clk.tradedoubler.com/click?p=323401&a=3292118",
    "https://clk.tradedoubler.com/click?p=51740&a=3292118",
    "https://clk.tradedoubler.com/click?p=289260&a=3292097",
    "https://clk.tradedoubler.com/click?p=317445&a=3292097",
    "https://clk.tradedoubler.com/click?p=304030&a=3292097",
    "https://clk.tradedoubler.com/click?p=307842&a=3292097",
    "https://clk.tradedoubler.com/click?p=319399&a=3292097",
    "https://clk.tradedoubler.com/click?p=307482&a=3292097",
    "https://clk.tradedoubler.com/click?p=304855&a=3292097",
    "https://clk.tradedoubler.com/click?p=283784&a=3292097",
    "https://clk.tradedoubler.com/click?p=329505&a=3292097",
    "https://clk.tradedoubler.com/click?p=327926&a=3292097",
    "https://clk.tradedoubler.com/click?p=324341&a=3292094",
    "https://clk.tradedoubler.com/click?p=321880&a=3292094",
    "https://clk.tradedoubler.com/click?p=304859&a=3292116",
    "https://clk.tradedoubler.com/click?p=291639&a=3292116",
    "https://clk.tradedoubler.com/click?p=261390&a=3292116",
    "https://clk.tradedoubler.com/click?p=320006&a=3292116",
    "https://clk.tradedoubler.com/click?p=330300&a=3292116",
    "https://clk.tradedoubler.com/click?p=318534&a=3292116",
    "https://clk.tradedoubler.com/click?p=335104&a=3292096",
    "https://clk.tradedoubler.com/click?p=289177&a=3290085",
    "https://clk.tradedoubler.com/click?p=324391&a=3290085",
    "https://clk.tradedoubler.com/click?p=324323&a=3292106",
    "https://clk.tradedoubler.com/click?p=20615&a=3292106",
    "https://clk.tradedoubler.com/click?p=324337&a=3292108",
    "https://clk.tradedoubler.com/click?p=316479&a=3292110",
    "https://clk.tradedoubler.com/click?p=305137&a=3292110",
    "https://clk.tradedoubler.com/click?p=311559&a=3292110",
    "https://clk.tradedoubler.com/click?p=330304&a=3292110",
    "https://clk.tradedoubler.com/click?p=317174&a=3292111",
    "https://clk.tradedoubler.com/click?p=322303&a=3292111",
    "https://clk.tradedoubler.com/click?p=332635&a=3292111",
    "https://clk.tradedoubler.com/click?p=324335&a=3292117",
    "https://clk.tradedoubler.com/click?p=302441&a=3292117",
    "https://clk.tradedoubler.com/click?p=296395&a=3292117",
    "https://www.awin1.com/cread.php?awinmid=27744&awinaffid=1158729",
    "https://clk.tradedoubler.com/click?p=327014&a=3292090",
    "https://clk.tradedoubler.com/click?p=226964&a=3292118",
    "https://clk.tradedoubler.com/click?p=292965&a=3292118",
    "https://clk.tradedoubler.com/click?p=195119&a=3292118",
    "https://clk.tradedoubler.com/click?p=287639&a=3292118",
    "https://clk.tradedoubler.com/click?p=311337&a=3292093",
    "https://clk.tradedoubler.com/click?p=319955&a=3292093",
    "https://clk.tradedoubler.com/click?p=318037&a=3292094",
    "https://clk.tradedoubler.com/click?p=318038&a=3292095",
    "https://clk.tradedoubler.com/click?p=267636&a=3292096",
    "https://clk.tradedoubler.com/click?p=331642&a=3292099",
    "https://clk.tradedoubler.com/click?p=323380&a=3292110",
    "https://clk.tradedoubler.com/click?p=308528&a=3292108",
    "https://clk.tradedoubler.com/click?p=64853&a=3292108",
    "https://clk.tradedoubler.com/click?p=93758&a=3292108",
    "https://clk.tradedoubler.com/click?p=332863&a=3292108",
    "https://www.awin1.com/cread.php?awinmid=17846&awinaffid=1158729",
    "https://clk.tradedoubler.com/click?p=59510&a=3292089",
    "https://clk.tradedoubler.com/click?p=330509&a=3292089",
    "https://clk.tradedoubler.com/click?p=335548&a=3292087",
    "https://clk.tradedoubler.com/click?p=325900&a=3292090",
    "https://clk.tradedoubler.com/click?p=332944&a=3292093",
    "https://clk.tradedoubler.com/click?p=327999&a=3292116",
    "https://clk.tradedoubler.com/click?p=322109&a=3292116",
    "https://clk.tradedoubler.com/click?p=331322&a=3292116",
    "https://clk.tradedoubler.com/click?p=320372&a=3292110",
    "https://clk.tradedoubler.com/click?p=323651&a=3292116",
    "https://clk.tradedoubler.com/click?p=334932&a=3292096",
    "https://clk.tradedoubler.com/click?p=246873&a=3292102",
    "https://clk.tradedoubler.com/click?p=250401&a=3292102",
    "https://clk.tradedoubler.com/click?p=74392&a=3292103",
    "https://clk.tradedoubler.com/click?p=324219&a=3292103",
    "https://clk.tradedoubler.com/click?p=315102&a=3292099",
    "https://clk.tradedoubler.com/click?p=332919&a=3292099",
    "https://clk.tradedoubler.com/click?p=335104&a=3292096",
    "https://clk.tradedoubler.com/click?p=291591&a=3292103",
    "https://clk.tradedoubler.com/click?p=221350&a=3292103",
    "https://clk.tradedoubler.com/click?p=314971&a=3292086",
    "https://clk.tradedoubler.com/click?p=261395&a=3292110",
    "https://clk.tradedoubler.com/click?p=332162&a=3292110",
    "https://clk.tradedoubler.com/click?p=319925&a=3292110",
    "https://clk.tradedoubler.com/click?p=211812&a=3292110",
    "https://clk.tradedoubler.com/click?p=320049&a=3292110",
    "https://clk.tradedoubler.com/click?p=330102&a=3292117",
    "https://clk.tradedoubler.com/click?p=332920&a=3292114",
    "https://clk.tradedoubler.com/click?p=335335&a=3290084",
    "https://clk.tradedoubler.com/click?p=333957&a=3290084",
    "https://clk.tradedoubler.com/click?p=330586&a=3290084",
    "https://clk.tradedoubler.com/click?p=309143&a=3290084",
    "https://clk.tradedoubler.com/click?p=328992&a=3290084",
    "https://clk.tradedoubler.com/click?p=323660&a=3290084",
    "https://clk.tradedoubler.com/click?p=328779&a=3290084",
    "https://clk.tradedoubler.com/click?p=311636&a=3292115",
    "https://www.awin1.com/cread.php?awinmid=7566&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=22979&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=26631&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=21126&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=10033&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=31425&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=32591&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=18563&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=19034&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=15287&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=13465&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=32125&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=9862&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=39216&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=22225&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=10071&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=10179&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=16280&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=30093&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=38052&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=21514&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=10317&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=32573&awinaffid=1158729",
    "https://clk.tradedoubler.com/click?p=295584&a=3290085",
    "https://www.awin1.com/cread.php?awinmid=12798&awinaffid=1158729",
    "https://clk.tradedoubler.com/click?p=316767&a=3288579",
    "https://clk.tradedoubler.com/click?p=327300&a=3292116",
    "https://clk.tradedoubler.com/click?p=283875&a=3292116",
    "https://clk.tradedoubler.com/click?p=304386&a=3292116",
    "https://clk.tradedoubler.com/click?p=333419&a=3288579",
    "https://clk.tradedoubler.com/click?p=324181&a=3288579",
    "https://clk.tradedoubler.com/click?p=274831&a=3288579",
    "https://clk.tradedoubler.com/click?p=333127&a=3288579",
    "https://clk.tradedoubler.com/click?p=320048&a=3288579",
    "https://www.awin1.com/cread.php?awinmid=15563&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=11280&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=10814&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=11645&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=15562&awinaffid=1158729",
    "https://clk.tradedoubler.com/click?p=309865&a=3292092",
    "https://clk.tradedoubler.com/click?p=309870&a=3292092",
    "https://clk.tradedoubler.com/click?p=305424&a=3292086",
    "https://clk.tradedoubler.com/click?p=317298&a=3292110",
    "https://clk.tradedoubler.com/click?p=325717&a=3292114",
    "https://clk.tradedoubler.com/click?p=286275&a=3292119",
    "https://www.awin1.com/cread.php?awinmid=20023&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=10256&awinaffid=1158729",
    "https://clk.tradedoubler.com/click?p=326961&a=3292086",
    "https://clk.tradedoubler.com/click?p=335763&a=3292092",
    "https://clk.tradedoubler.com/click?p=335766&a=3292092",
    "https://clk.tradedoubler.com/click?p=321945&a=3292092",
    "https://clk.tradedoubler.com/click?p=319669&a=3292116",
    "https://clk.tradedoubler.com/click?p=307715&a=3292116",
    "https://clk.tradedoubler.com/click?p=325042&a=3292116",
    "https://clk.tradedoubler.com/click?p=313392&a=3292099",
    "https://clk.tradedoubler.com/click?p=320367&a=3292102",
    "https://clk.tradedoubler.com/click?p=329493&a=3288579",
    "https://clk.tradedoubler.com/click?p=313401&a=3292111",
    "https://clk.tradedoubler.com/click?p=295650&a=3292111",
    "https://clk.tradedoubler.com/click?p=307395&a=3292114",
    "https://clk.tradedoubler.com/click?p=307393&a=3292114",
    "https://clk.tradedoubler.com/click?p=325717&a=3292114",
    "https://clk.tradedoubler.com/click?p=307382&a=3292114",
    "https://clk.tradedoubler.com/click?p=315037&a=3292114",
    "https://clk.tradedoubler.com/click?p=238982&a=3288579",
    "https://clk.tradedoubler.com/click?p=307380&a=3292093",
    "https://clk.tradedoubler.com/click?p=307357&a=3292093",
    "https://clk.tradedoubler.com/click?p=303151&a=3292093",
    "https://clk.tradedoubler.com/click?p=279616&a=3292116",
    "https://clk.tradedoubler.com/click?p=213291&a=3292117",
    "https://www.awin1.com/cread.php?awinmid=18579&awinaffid=1158729",
    "https://clk.tradedoubler.com/click?p=246156&a=3290085",
    "https://www.awin1.com/cread.php?awinmid=18555&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=18559&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=7558&awinaffid=1158729",
    "https://www.awin1.com/cread.php?awinmid=10178&awinaffid=1158729&ued=https%3A%2F%2Fekobieca.pl",
    "https://www.awin1.com/cread.php?awinmid=7558&awinaffid=1158729&ued=https%3A%2F%2Fwww.hp.com%2Fmx-es%2Fshop%2F",
    "https://www.awin1.com/cread.php?awinmid=34701&awinaffid=1158729&ued=https%3A%2F%2Fbeglossy.co",
    "https://www.awin1.com/cread.php?awinmid=22164&awinaffid=1158729&ued=https%3A%2F%2Fwww.yellowtipi.pl",
    "https://www.awin1.com/cread.php?awinmid=20201&awinaffid=1158729&ued=https%3A%2F%2Fwww.wondershare.it",
    "https://www.awin1.com/cread.php?awinmid=10169&awinaffid=1158729&ued=https%3A%2F%2Fwww.tirendo.pl",
    "https://www.awin1.com/cread.php?awinmid=16862&awinaffid=1158729&ued=https%3A%2F%2Fwww.sweetcures.co.uk",
    "https://www.awin1.com/cread.php?awinmid=10248&awinaffid=1158729&ued=https%3A%2F%2Fstreetstyle24.pl",
    "https://www.awin1.com/cread.php?awinmid=33097&awinaffid=1158729&ued=https%3A%2F%2Fwww.socialmediacalendar.co",
    "https://www.awin1.com/cread.php?awinmid=12285&awinaffid=1158729&ued=https%3A%2F%2Fwww.guess.eu%2Fen-pl%2Fhome",
    "https://www.awin1.com/cread.php?awinmid=32623&awinaffid=1158729&ued=https%3A%2F%2Fwww.anker.com%2Feu-de",
    "https://www.awin1.com/cread.php?awinmid=24644&awinaffid=1158729&ued=https%3A%2F%2Fwww.fiever.com.br",
    "https://www.awin1.com/cread.php?awinmid=29731&awinaffid=1158729&ued=https%3A%2F%2Fwww.i2go.com.br",
    "https://www.awin1.com/cread.php?awinmid=18464&awinaffid=1158729&ued=https%3A%2F%2Fwww.peek-cloppenburg.nl%2Fnl",
    "https://www.awin1.com/cread.php?awinmid=16879&awinaffid=1158729&ued=https%3A%2F%2Ffera.pl",
    "https://www.awin1.com/cread.php?awinmid=23206&awinaffid=1158729&ued=https%3A%2F%2Fwww.delikatesyznatury.pl",
    "https://www.awin1.com/cread.php?awinmid=22028&awinaffid=1158729&ued=https%3A%2F%2Fwww.klook.com%2Fit%2F",
    "https://www.awin1.com/cread.php?awinmid=27908&awinaffid=1158729&ued=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN8897.2682027AWINEXZANOX%2FB27272183.332700758%3Bdc_trk_aid%3D524956645%3Bdc_trk_cid%3D169247787%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Fhttps%3A%2F%2Fwww.lancome.pl%3Futm_source%3Dawin%26utm_medium%3Dall_affiliate%26utm_content%3Dlan_othr_e-commerce-affiliation-2022_display_cv%26utm_campaign%3De-commerce-affiliation-february-2022%26utm_term%3Dpackage-name_awin-generic-static-tracker",
    "https://www.awin1.com/cread.php?awinmid=30273&awinaffid=1158729&ued=https%3A%2F%2Fwww.loberon.pl",
    "https://www.awin1.com/cread.php?awinmid=37114&awinaffid=1158729&ued=https%3A%2F%2Fwww.bucalo.eu",
    "https://www.awin1.com/cread.php?awinmid=32371&awinaffid=1158729&ued=https%3A%2F%2Fwww.opera.com%2Fes",
    "https://www.awin1.com/cread.php?awinmid=36282&awinaffid=1158729&ued=https%3A%2F%2Fwww.mywage.de%2Flp%2Fawin",
    "https://www.awin1.com/cread.php?awinmid=17571&awinaffid=1158729&ued=https%3A%2F%2Fwww.cec.com.br",
    "https://www.awin1.com/cread.php?awinmid=17715&awinaffid=1158729&ued=https%3A%2F%2Fwww.kanui.com.br",
    "https://www.awin1.com/cread.php?awinmid=26763&awinaffid=1158729&ued=https%3A%2F%2Fwww.365rider.com%3Futm_source%3Daw%26utm_term%3D%21%21%21affid%21%21%21%26utm_medium%3D%21%21%21companyname%21%21%21%26utm_campaign%3D%21%21%21sitename%21%21%21",
    "https://www.awin1.com/cread.php?awinmid=32633&awinaffid=1158729&ued=https%3A%2F%2Fwww.compareyourtravelinsurance.ca",
    "https://www.awin1.com/cread.php?awinmid=34947&awinaffid=1158729&ued=https%3A%2F%2Fwww.xcaret.com%2Fen%2F",
    "https://www.awin1.com/cread.php?awinmid=10351&awinaffid=1158729&ued=https%3A%2F%2Fbellastoria.pl%3Futm_campaign%3Ddeeplink",
    "https://www.awin1.com/cread.php?awinmid=12571&awinaffid=1158729&ued=https%3A%2F%2Fwww.dekoria.pl++",
    "https://www.awin1.com/cread.php?awinmid=17854&awinaffid=1158729&ued=https%3A%2F%2Fwww.eotica.com.br",
    "https://www.awin1.com/cread.php?awinmid=22065&awinaffid=1158729&ued=https%3A%2F%2Fgoe.pl",
    "https://www.awin1.com/cread.php?awinmid=22056&awinaffid=1158729&ued=https%3A%2F%2Fglovii.com%2Fpl%2F",
    "https://www.awin1.com/cread.php?awinmid=32133&awinaffid=1158729&ued=https%3A%2F%2Fwww.inovepapeisdeparede.com.br",
    "https://www.awin1.com/cread.php?awinmid=10996&awinaffid=1158729&ued=https%3A%2F%2Fwww.51015kids.eu",
    "https://www.awin1.com/cread.php?awinmid=27145&awinaffid=1158729&ued=https%3A%2F%2Fwww.halfprice.eu%2Fpl%2F",
    "https://www.awin1.com/cread.php?awinmid=27289&awinaffid=1158729&ued=https%3A%2F%2Fshreddedketo.com",
    "https://www.awin1.com/cread.php?awinmid=15306&awinaffid=1158729&ued=https%3A%2F%2Fstore.hp.com%2Fpe-es%2Fdefault%2F",
    "https://www.awin1.com/cread.php?awinmid=15292&awinaffid=1158729&ued=https%3A%2F%2Fwww.hp.com%2Fco-es%2Fshop%2F",
    "https://www.awin1.com/cread.php?awinmid=17157&awinaffid=1158729&ued=https%3A%2F%2Fperfumy.pl",
    "https://www.awin1.com/cread.php?awinmid=22632&awinaffid=1158729&ued=https%3A%2F%2Fwww.muscat.pl",
    "https://www.awin1.com/cread.php?awinmid=22957&awinaffid=1158729&ued=https%3A%2F%2Fwww.butomaniak.pl",
    "https://www.awin1.com/cread.php?awinmid=30511&awinaffid=1158729&ued=https%3A%2F%2Fwww.legombrinq.com.br",
    "https://www.awin1.com/cread.php?awinmid=32963&awinaffid=1158729&ued=https%3A%2F%2Ffitanu.com%2Fpl%2F",
    "https://www.awin1.com/cread.php?awinmid=22362&awinaffid=1158729&ued=https%3A%2F%2Fiamshewarrior.com",
    "https://clk.tradedoubler.com/click?p=323074&a=3292092",
    "https://clk.tradedoubler.com/click?p=325713&a=3292093",
    "https://clk.tradedoubler.com/click?p=334424&a=3292116",
    "https://www.awin1.com/cread.php?awinmid=22528&awinaffid=1158729&ued=https%3A%2F%2Fwww.activlab.pl",
    "https://www.awin1.com/cread.php?awinmid=20430&awinaffid=1158729&ued=https%3A%2F%2Falkmie.com",
    "https://www.awin1.com/cread.php?awinmid=24143&awinaffid=1158729&ued=https%3A%2F%2Fwww.allianztravel.com.br",
    "https://www.awin1.com/cread.php?awinmid=24288&awinaffid=1158729&ued=https%3A%2F%2Fwww.amend.com.br",
    "https://www.awin1.com/cread.php?awinmid=35607&awinaffid=1158729&ued=https%3A%2F%2Farmodo.pl",
    "https://www.awin1.com/cread.php?awinmid=40914&awinaffid=1158729&ued=https%3A%2F%2Fwww.assine.com.br",
    "https://www.awin1.com/cread.php?awinmid=19423&awinaffid=1158729&ued=https%3A%2F%2Fwww.bee.pl",
    "https://www.awin1.com/cread.php?awinmid=10351&awinaffid=1158729&ued=https%3A%2F%2Fbellastoria.pl%3Futm_campaign%3Ddeeplink",
    "https://www.awin1.com/cread.php?awinmid=30399&awinaffid=1158729&ued=https%3A%2F%2Fbolodim.com.br",
    "https://www.awin1.com/cread.php?awinmid=17648&awinaffid=1158729&ued=https%3A%2F%2Fwww.cea.com.br",
    "https://www.awin1.com/cread.php?awinmid=10189&awinaffid=1158729&ued=https%3A%2F%2Fwww.cauciucuridirect.ro",
    "https://www.awin1.com/cread.php?awinmid=26213&awinaffid=1158729&ued=https%3A%2F%2Fwww.compraflora.com.br",
    "https://www.awin1.com/cread.php?awinmid=19426&awinaffid=1158729&ued=https%3A%2F%2Fwww.czarymary.pl",
    "https://www.awin1.com/cread.php?awinmid=21762&awinaffid=1158729&ued=https%3A%2F%2Fedax.pl",
    "https://www.awin1.com/cread.php?awinmid=19296&awinaffid=1158729&ued=https%3A%2F%2Fwww.decathlon.com.br",
    "https://www.awin1.com/cread.php?awinmid=38890&awinaffid=1158729&ued=https%3A%2F%2Fwww.fom.com.br",
    "https://www.awin1.com/cread.php?awinmid=17884&awinaffid=1158729&ued=https%3A%2F%2Floja.grupoa.com.br",
    "https://www.awin1.com/cread.php?awinmid=34057&awinaffid=1158729&ued=https%3A%2F%2Fislandtea.fr",
    "https://www.awin1.com/cread.php?awinmid=10491&awinaffid=1158729&ued=https%3A%2F%2Fwww.lookfantastic.com",
    "https://www.awin1.com/cread.php?awinmid=38886&awinaffid=1158729&ued=https%3A%2F%2Fwww.lojabio2.com.br",
    "https://www.awin1.com/cread.php?awinmid=32453&awinaffid=1158729&ued=https%3A%2F%2Fwww.lojasafubra.com.br",
    "https://www.awin1.com/cread.php?awinmid=32961&awinaffid=1158729&ued=https%3A%2F%2Fsklepmartes.pl",
    "https://www.awin1.com/cread.php?awinmid=17652&awinaffid=1158729&ued=https%3A%2F%2Fwww.nike.com.br",
    "https://www.awin1.com/cread.php?awinmid=17698&awinaffid=1158729&ued=https%3A%2F%2Fwww.olympikus.com.br",
    "https://www.awin1.com/cread.php?awinmid=31581&awinaffid=1158729&ued=https%3A%2F%2Fparagraphai.com",
    "https://www.awin1.com/cread.php?awinmid=20801&awinaffid=1158729&ued=https%3A%2F%2Fpromki24.com",
    "https://www.awin1.com/cread.php?awinmid=35351&awinaffid=1158729&ued=https%3A%2F%2Fwww.sinsay.com%2Fro%2Fro%2F",
    "https://www.awin1.com/cread.php?awinmid=30615&awinaffid=1158729&ued=https%3A%2F%2Fwww.spicy.com.br",
    "https://www.awin1.com/cread.php?awinmid=33821&awinaffid=1158729&ued=https%3A%2F%2Fwww.tudodebicho.com.br",
    "https://www.awin1.com/cread.php?awinmid=31774&awinaffid=1158729&ued=https%3A%2F%2Fwww.ubuy.com.br%2Fen%2F",
    "https://www.awin1.com/cread.php?awinmid=10476&awinaffid=1158729&ued=https%3A%2F%2Fwww.viator.com%2Fes-ES%2F",
    "https://www.awin1.com/cread.php?awinmid=26177&awinaffid=1158729&ued=https%3A%2F%2Fwww.wollner.com.br",
    "https://www.awin1.com/cread.php?awinmid=17612&awinaffid=1158729&ued=https%3A%2F%2Fwww.e-lens.com.br",
    "https://www.awin1.com/cread.php?awinmid=10306&awinaffid=1158729&ued=https%3A%2F%2Fwww.zooplus.ro",
    "https://clk.tradedoubler.com/click?p=313580&a=3292089",
    "https://clk.tradedoubler.com/click?p=331694&a=3292089",
    "https://clk.tradedoubler.com/click?p=282887&a=3292089",
    "https://clk.tradedoubler.com/click?p=336403&a=3292089",
    "https://clk.tradedoubler.com/click?p=284658&a=3292089",
    "https://clk.tradedoubler.com/click?p=334903&a=3292089",
    "https://clk.tradedoubler.com/click?p=320416&a=3292089",
    "https://clk.tradedoubler.com/click?p=321703&a=3292089",
    "https://clk.tradedoubler.com/click?p=315778&a=3292089",
    "https://clk.tradedoubler.com/click?p=294343&a=3292089",
    "https://clk.tradedoubler.com/click?p=310149&a=3292089",
    "https://clk.tradedoubler.com/click?p=326094&a=3292089",
    "https://clk.tradedoubler.com/click?p=335871&a=3292089",
    "https://clk.tradedoubler.com/click?p=303387&a=3292089",
    "https://clk.tradedoubler.com/click?p=308218&a=3292089",
    "https://clk.tradedoubler.com/click?p=299273&a=3292087",
    "https://clk.tradedoubler.com/click?p=335788&a=3292087",
    "https://clk.tradedoubler.com/click?p=336963&a=3292087",
    "https://clk.tradedoubler.com/click?p=339157&a=3292087",
    "https://clk.tradedoubler.com/click?p=336404&a=3292090",
    "https://clk.tradedoubler.com/click?p=328294&a=3292090",
    "https://clk.tradedoubler.com/click?p=335734&a=3292090",
    "https://clk.tradedoubler.com/click?p=282886&a=3292118",
    "https://clk.tradedoubler.com/click?p=293534&a=3292118",
    "https://clk.tradedoubler.com/click?p=308794&a=3292118",
    "https://clk.tradedoubler.com/click?p=268988&a=3292118",
    "https://clk.tradedoubler.com/click?p=320153&a=3292118",
    "https://clk.tradedoubler.com/click?p=215445&a=3292118",
    "https://clk.tradedoubler.com/click?p=232916&a=3292118",
    "https://clk.tradedoubler.com/click?p=332931&a=3292118",
    "https://clk.tradedoubler.com/click?p=268998&a=3292118",
    "https://clk.tradedoubler.com/click?p=18573&a=3292118",
    "https://clk.tradedoubler.com/click?p=329516&a=3292118",
    "https://clk.tradedoubler.com/click?p=248631&a=3292118",
    "https://clk.tradedoubler.com/click?p=330056&a=3292118",
    "https://clk.tradedoubler.com/click?p=268457&a=3292118",
    "https://clk.tradedoubler.com/click?p=285962&a=3292118",
    "https://clk.tradedoubler.com/click?p=334918&a=3292094",
    "https://clk.tradedoubler.com/click?p=333548&a=3292094",
    "https://clk.tradedoubler.com/click?p=319694&a=3292094",
    "https://clk.tradedoubler.com/click?p=336237&a=3292094",
    "https://clk.tradedoubler.com/click?p=337164&a=3292094",
    "https://clk.tradedoubler.com/click?p=327296&a=3292094",
    "https://clk.tradedoubler.com/click?p=238481&a=3292094",
    "https://clk.tradedoubler.com/click?p=333337&a=3292094",
    "https://clk.tradedoubler.com/click?p=321708&a=3292094",
    "https://clk.tradedoubler.com/click?p=336048&a=3292094",
    "https://clk.tradedoubler.com/click?p=284766&a=3292094",
    "https://clk.tradedoubler.com/click?p=339592&a=3290084",
    "https://clk.tradedoubler.com/click?p=323819&a=3290084",
    "https://clk.tradedoubler.com/click?p=333273&a=3290084",
    "https://clk.tradedoubler.com/click?p=325551&a=3290084",
    "https://clk.tradedoubler.com/click?p=331151&a=3290084",
    "https://clk.tradedoubler.com/click?p=333396&a=3290084",
    "https://clk.tradedoubler.com/click?p=336342&a=3290084",
    "https://clk.tradedoubler.com/click?p=334203&a=3290084",
    "https://clk.tradedoubler.com/click?p=333508&a=3290084",
    "https://clk.tradedoubler.com/click?p=332745&a=3290084",
    "https://clk.tradedoubler.com/click?p=330959&a=3292117",
    "https://clk.tradedoubler.com/click?p=336734&a=3292117",
    "https://clk.tradedoubler.com/click?p=312283&a=3292117",
    "https://clk.tradedoubler.com/click?p=336931&a=3292117",
    "https://clk.tradedoubler.com/click?p=323167&a=3292111",
    "https://clk.tradedoubler.com/click?p=313401&a=3292111",
    "https://clk.tradedoubler.com/click?p=295650&a=3292111",
    "https://clk.tradedoubler.com/click?p=330884&a=3292111",
    "https://clk.tradedoubler.com/click?p=307389&a=3292111",
    "https://www.awin1.com/cread.php?awinmid=32983&awinaffid=1158729&ued=https%3A%2F%2F1-stop.shop",
    "https://www.awin1.com/cread.php?awinmid=13991&awinaffid=1158729&ued=https%3A%2F%2Fwww.100percentpure.de",
    "https://www.awin1.com/cread.php?awinmid=7235&awinaffid=1158729&ued=https%3A%2F%2Fwww.123pneus.fr",
    "https://www.awin1.com/cread.php?awinmid=30407&awinaffid=1158729&ued=https%3A%2F%2F123waldo.fr",
    "https://www.awin1.com/cread.php?awinmid=32095&awinaffid=1158729&ued=https%3A%2F%2F1n2.de",
    "https://www.awin1.com/cread.php?awinmid=17464&awinaffid=1158729&ued=https%3A%2F%2Fwww.1a-geschenkeshop.de",
    "https://www.awin1.com/cread.php?awinmid=37738&awinaffid=1158729&ued=https%3A%2F%2Fwww.1pmobile.com",
    "https://www.awin1.com/cread.php?awinmid=31317&awinaffid=1158729&ued=https%3A%2F%2F2ocean.de",
    "https://www.awin1.com/cread.php?awinmid=26786&awinaffid=1158729&ued=https%3A%2F%2Fwww.2dekansje.com",
    "https://www.awin1.com/cread.php?awinmid=24784&awinaffid=1158729&ued=https%3A%2F%2Fstore.acer.com%2Fno-no%2F",
    "https://www.awin1.com/cread.php?awinmid=17945&awinaffid=1158729&ued=https%3A%2F%2Fwww.alibaba.com",
    "https://www.awin1.com/cread.php?awinmid=18879&awinaffid=1158729&ued=https%3A%2F%2Faliexpress.com%2F",
    "https://www.awin1.com/cread.php?awinmid=18875&awinaffid=1158729&ued=https%3A%2F%2Fwww.datitia.com.br",
    "https://www.awin1.com/cread.php?awinmid=20819&awinaffid=1158729&ued=https%3A%2F%2Fhk.elemis.com",
    "https://www.awin1.com/cread.php?awinmid=6288&awinaffid=1158729&ued=https%3A%2F%2Fwww.fiverr.com",
    "https://www.awin1.com/cread.php?awinmid=32585&awinaffid=1158729&ued=https%3A%2F%2Fwww.lacoste.com%2Fmx",
    "https://www.awin1.com/cread.php?awinmid=38886&awinaffid=1158729&ued=https%3A%2F%2Fwww.lojabio2.com.br",
    "https://www.awin1.com/cread.php?awinmid=32453&awinaffid=1158729&ued=https%3A%2F%2Fwww.lojasafubra.com.br",
    "https://www.awin1.com/cread.php?awinmid=42412&awinaffid=1158729&ued=https%3A%2F%2Fwww.myshoes.com",
    "https://www.awin1.com/cread.php?awinmid=23888&awinaffid=1158729&ued=https%3A%2F%2Fnewbalance.cz",
    "https://www.awin1.com/cread.php?awinmid=32219&awinaffid=1158729&ued=https%3A%2F%2Fwww.nike.com%2Fmx%2F",
    "https://www.awin1.com/cread.php?awinmid=22293&awinaffid=1158729&ued=https%3A%2F%2Fwww.pandoraoficial.com.mx",
    "https://www.awin1.com/cread.php?awinmid=22886&awinaffid=1158729&ued=https%3A%2F%2Fpapercraftworld.com",
    "https://www.awin1.com/cread.php?awinmid=26353&awinaffid=1158729&ued=https%3A%2F%2Fwww.tjama.com",
    "https://clk.tradedoubler.com/click?p=327333&a=3292094",
    "https://clk.tradedoubler.com/click?p=317631&a=3292094",
    "https://clk.tradedoubler.com/click?p=320769&a=3292094",
    "https://clk.tradedoubler.com/click?p=317745&a=3292094",
    "https://clk.tradedoubler.com/click?p=321968&a=3292094",
    "https://clk.tradedoubler.com/click?p=11752&a=3292094",
    "https://clk.tradedoubler.com/click?p=314670&a=3292094",
    "https://clk.tradedoubler.com/click?p=320378&a=3292094",
    "https://clk.tradedoubler.com/click?p=326309&a=3292094",
    "https://clk.tradedoubler.com/click?p=336643&a=3292117",
    "https://clk.tradedoubler.com/click?p=333442&a=3292117",
    "https://clk.tradedoubler.com/click?p=296736&a=3292117",
    "https://clk.tradedoubler.com/click?p=318396&a=3292117",
    "https://clk.tradedoubler.com/click?p=335939&a=3292117",
    "https://clk.tradedoubler.com/click?p=333494&a=3292117",
    "https://clk.tradedoubler.com/click?p=336889&a=3292117",
    "https://clk.tradedoubler.com/click?p=334589&a=3292117",
    "https://clk.tradedoubler.com/click?p=330631&a=3292117",
    "https://clk.tradedoubler.com/click?p=337470&a=3292117",
    "https://clk.tradedoubler.com/click?p=321935&a=3292117",
    "https://clk.tradedoubler.com/click?p=319314&a=3292117",
    "https://clk.tradedoubler.com/click?p=333263&a=3292117",
    "https://clk.tradedoubler.com/click?p=319218&a=3292117",
    "https://clk.tradedoubler.com/click?p=332640&a=3292117",
    "https://clk.tradedoubler.com/click?p=306618&a=3292117",
    "https://clk.tradedoubler.com/click?p=335319&a=3292117",
    "https://clk.tradedoubler.com/click?p=339228&a=3292117",
    "https://clk.tradedoubler.com/click?p=334778&a=3292117",
    "https://clk.tradedoubler.com/click?p=9506&a=3292117",
    "https://clk.tradedoubler.com/click?p=334777&a=3292117",
    "https://clk.tradedoubler.com/click?p=304776&a=3292117",
    "https://clk.tradedoubler.com/click?p=331647&a=3292117",
    "https://clk.tradedoubler.com/click?p=308100&a=3292117",
    "https://clk.tradedoubler.com/click?p=22002&a=3292117",
    "https://clk.tradedoubler.com/click?p=326732&a=3292117",
    "https://clk.tradedoubler.com/click?p=336376&a=3292117",
    "https://clk.tradedoubler.com/click?p=336794&a=3292117",
    "https://clk.tradedoubler.com/click?p=329123&a=3292117",
    "https://clk.tradedoubler.com/click?p=334132&a=3292117",
    "https://clk.tradedoubler.com/click?p=334103&a=3292117",
    "https://clk.tradedoubler.com/click?p=333784&a=3292117",
    "https://clk.tradedoubler.com/click?p=336884&a=3292117",
    "https://clk.tradedoubler.com/click?p=318249&a=3292117",
    "https://clk.tradedoubler.com/click?p=333859&a=3292117",
    "https://clk.tradedoubler.com/click?p=310552&a=3292117",
    "https://clk.tradedoubler.com/click?p=323413&a=3292117",
    "https://clk.tradedoubler.com/click?p=311300&a=3292117",
    "https://clk.tradedoubler.com/click?p=326272&a=3292117",
    "https://clk.tradedoubler.com/click?p=334553&a=3292117",
    "https://clk.tradedoubler.com/click?p=314395&a=3292117",
    "https://clk.tradedoubler.com/click?p=334343&a=3292117",
    "https://clk.tradedoubler.com/click?p=326474&a=3292117",
    "https://clk.tradedoubler.com/click?p=270015&a=3292117",
    "https://clk.tradedoubler.com/click?p=331032&a=3292117",
    "https://clk.tradedoubler.com/click?p=322656&a=3292117",
    "https://clk.tradedoubler.com/click?p=333472&a=3292117",
    "https://clk.tradedoubler.com/click?p=316951&a=3292117",
    "https://clk.tradedoubler.com/click?p=307088&a=3292117",
    "https://clk.tradedoubler.com/click?p=339231&a=3292117",
    "https://clk.tradedoubler.com/click?p=336046&a=3292117",
    "https://clk.tradedoubler.com/click?p=325324&a=3292117",
    "https://clk.tradedoubler.com/click?p=332973&a=3292117",
    "https://clk.tradedoubler.com/click?p=330211&a=3292117",
    "https://clk.tradedoubler.com/click?p=333876&a=3292117",
    "https://clk.tradedoubler.com/click?p=336164&a=3288579",
    "https://clk.tradedoubler.com/click?p=336164&a=3288579",
    "https://clk.tradedoubler.com/click?p=339239&a=3288579",
    "https://www.awin1.com/cread.php?awinmid=27093&awinaffid=1158729&ued=https%3A%2F%2F100x100fitness.com",
    "https://www.awin1.com/cread.php?awinmid=31151&awinaffid=1158729&ued=https%3A%2F%2Fwww.2echoix.fr",
    "https://www.awin1.com/cread.php?awinmid=21651&awinaffid=1158729&ued=https%3A%2F%2Fwww.daek-online.dk",
    "https://www.awin1.com/cread.php?awinmid=25386&awinaffid=1158729&ued=https%3A%2F%2Fwww.emma-colchon.cl",
    "https://www.awin1.com/cread.php?awinmid=25301&awinaffid=1158729&ued=https%3A%2F%2Fwww.emma-colchon.com.mx",
    "https://www.awin1.com/cread.php?awinmid=24968&awinaffid=1158729&ued=https%3A%2F%2Fwww.hp.com%2Far-es%2Fshop%2F",
    "https://www.awin1.com/cread.php?awinmid=31449&awinaffid=1158729&ued=https%3A%2F%2Fdk.bazta.com",
    "https://www.awin1.com/cread.php?awinmid=38110&awinaffid=1158729&ued=https%3A%2F%2Fse.bazta.com",
    "https://www.awin1.com/cread.php?awinmid=29483&awinaffid=1158729&ued=https%3A%2F%2Fhighstreet.com.mx",
    "https://www.awin1.com/cread.php?awinmid=10866&awinaffid=1158729&ued=https%3A%2F%2Fwww.hunkemoller.dk",
    "https://www.awin1.com/cread.php?awinmid=8844&awinaffid=1158729&ued=https%3A%2F%2Fwww.jdsports.dk",
    "https://www.global.jdsports.com",
    "https://www.awin1.com/cread.php?awinmid=18370&awinaffid=1158729&ued=https%3A%2F%2Fwww.lentiamo.dk",
    "https://www.awin1.com/cread.php?awinmid=16271&awinaffid=1158729&ued=https%3A%2F%2Fplusshop.dk",
    "https://www.awin1.com/cread.php?awinmid=21932&awinaffid=1158729&ued=https%3A%2F%2Fwww.scandichotels.dk",
    "https://www.awin1.com/cread.php?awinmid=21991&awinaffid=1158729&ued=https%3A%2F%2Fstartselect.com%2Fdk-en",
    "https://www.awin1.com/cread.php?awinmid=10527&awinaffid=1158729&ued=https%3A%2F%2Fwww.thebodyshop.com%2Fda-dk%2F",
    "https://www.awin1.com/cread.php?awinmid=9719&awinaffid=1158729&ued=https%3A%2F%2Fwww.thefounded.com%2Fdk%2Fda",
    "https://www.awin1.com/cread.php?awinmid=8788&awinaffid=1158729&ued=https%3A%2F%2Fwww.tirendo.dk",
    "https://www.awin1.com/cread.php?awinmid=31762&awinaffid=1158729&ued=https%3A%2F%2Fwww.ubuy.dk%2Fen%2F",
    "https://www.awin1.com/cread.php?awinmid=13596&awinaffid=1158729&ued=https%3A%2F%2Fdk.viator.com",
    "https://www.awin1.com/cread.php?awinmid=25777&awinaffid=1158729&ued=https%3A%2F%2Fwanapix.dk",
    "https://www.awin1.com/cread.php?awinmid=9300&awinaffid=1158729&ued=https%3A%2F%2Fwww.alternate.dk",
    "https://www.awin1.com/cread.php?awinmid=8860&awinaffid=1158729&ued=https%3A%2F%2Fwww.daekonline.dk%2F%3F",
    "https://clk.tradedoubler.com/click?p=340987&a=3292089",
    "https://clk.tradedoubler.com/click?p=339542&a=3292089",
    "https://clk.tradedoubler.com/click?p=317491&a=3292089",
    "https://clk.tradedoubler.com/click?p=339837&a=3292087",
    "https://clk.tradedoubler.com/click?p=341116&a=3292090",
    "https://clk.tradedoubler.com/click?p=336404&a=3292090",
    "https://clk.tradedoubler.com/click?p=327014&a=3292090",
    "https://clk.tradedoubler.com/click?p=323074&a=3292092",
    "https://clk.tradedoubler.com/click?p=340359&a=3292118",
    "https://clk.tradedoubler.com/click?p=339644&a=3292118",
    "https://clk.tradedoubler.com/click?p=245744&a=3292118",
    "https://clk.tradedoubler.com/click?p=322145&a=3292116",
    "https://clk.tradedoubler.com/click?p=327889&a=3292116",
    "https://clk.tradedoubler.com/click?p=323375&a=3292116                             ",
    "https://clk.tradedoubler.com/click?p=324548&a=3292116                             ",
    "https://clk.tradedoubler.com/click?p=326210&a=3292116                             ",
    "https://clk.tradedoubler.com/click?p=283625&a=3292116                             ",
    "https://clk.tradedoubler.com/click?p=269827&a=3292116                             ",
    "https://clk.tradedoubler.com/click?p=313582&a=3292116",
    "https://clk.tradedoubler.com/click?p=315333&a=3292116",
    "https://clk.tradedoubler.com/click?p=316288&a=3292116",
    "https://clk.tradedoubler.com/click?p=307545&a=3292116",
    "https://clk.tradedoubler.com/click?p=300771&a=3292116",
    "https://clk.tradedoubler.com/click?p=335265&a=3292116",
    "https://clk.tradedoubler.com/click?p=339143&a=3292116                             ",
    "https://clk.tradedoubler.com/click?p=335360&a=3292116",
    "https://clk.tradedoubler.com/click?p=308928&a=3292116",
    "https://clk.tradedoubler.com/click?p=339849&a=3292116",
    "https://clk.tradedoubler.com/click?p=332800&a=3292116",
    "https://clk.tradedoubler.com/click?p=337046&a=3292116",
    "https://clk.tradedoubler.com/click?p=334657&a=3292116",
    "https://clk.tradedoubler.com/click?p=315882&a=3292116",
    "https://clk.tradedoubler.com/click?p=331892&a=3292116",
    "https://clk.tradedoubler.com/click?p=335470&a=3292116",
    "https://clk.tradedoubler.com/click?p=305877&a=3292116",
    "https://clk.tradedoubler.com/click?p=17509&a=3292116",
    "https://clk.tradedoubler.com/click?p=335356&a=3292116",
    "https://clk.tradedoubler.com/click?p=15407&a=3292116",
    "https://clk.tradedoubler.com/click?p=336657&a=3292116",
    "https://clk.tradedoubler.com/click?p=340569&a=3292116",
    "https://clk.tradedoubler.com/click?p=319841&a=3292116",
    "https://clk.tradedoubler.com/click?p=300721&a=3292116",
    "https://clk.tradedoubler.com/click?p=309704&a=3292116",
    "https://clk.tradedoubler.com/click?p=325672&a=3292116",
    "https://clk.tradedoubler.com/click?p=316245&a=3292116",
    "https://clk.tradedoubler.com/click?p=239341&a=3292116",
    "https://clk.tradedoubler.com/click?p=336684&a=3292116",
    "https://clk.tradedoubler.com/click?p=323121&a=3292116",
    "https://clk.tradedoubler.com/click?p=333471&a=3292116",
    "https://clk.tradedoubler.com/click?p=320451&a=3292116",
    "https://clk.tradedoubler.com/click?p=301095&a=3292116",
    "https://clk.tradedoubler.com/click?p=333674&a=3292116",
    "https://clk.tradedoubler.com/click?p=245745&a=3292116",
    "https://clk.tradedoubler.com/click?p=328759&a=3292116",
    "https://clk.tradedoubler.com/click?p=308293&a=3292116",
    "https://clk.tradedoubler.com/click?p=281568&a=3292116",
    "https://clk.tradedoubler.com/click?p=315221&a=3292116",
    "https://clk.tradedoubler.com/click?p=317082&a=3292116",
    "https://clk.tradedoubler.com/click?p=336133&a=3292116",
    "https://clk.tradedoubler.com/click?p=334463&a=3292116",
    "https://clk.tradedoubler.com/click?p=175223&a=3292116",
    "https://clk.tradedoubler.com/click?p=303598&a=3292116",
    "https://clk.tradedoubler.com/click?p=229716&a=3292116",
    "https://clk.tradedoubler.com/click?p=275349&a=3292116",
    "https://clk.tradedoubler.com/click?p=311380&a=3292116",
    "https://clk.tradedoubler.com/click?p=302404&a=3292116",
    "https://clk.tradedoubler.com/click?p=261636&a=3292116",
    "https://clk.tradedoubler.com/click?p=225641&a=3292116",
    "https://clk.tradedoubler.com/click?p=251212&a=3292116",
    "https://clk.tradedoubler.com/click?p=227755&a=3292116",
    "https://clk.tradedoubler.com/click?p=310884&a=3292116",
    "https://clk.tradedoubler.com/click?p=330127&a=3292116",
    "https://clk.tradedoubler.com/click?p=308371&a=3292116",
    "https://clk.tradedoubler.com/click?p=327790&a=3292116",
    "https://clk.tradedoubler.com/click?p=326691&a=3292116",
    "https://clk.tradedoubler.com/click?p=323454&a=3292116",
    "https://clk.tradedoubler.com/click?p=331314&a=3292116",
    "https://clk.tradedoubler.com/click?p=292021&a=3292116",
    "https://clk.tradedoubler.com/click?p=332999&a=3292116",
    "https://clk.tradedoubler.com/click?p=333631&a=3292116",
    "https://clk.tradedoubler.com/click?p=306010&a=3292116",
    "https://clk.tradedoubler.com/click?p=327062&a=3292116",
    "https://clk.tradedoubler.com/click?p=333105&a=3292116",
    "https://clk.tradedoubler.com/click?p=318534&a=3292116",
    "https://clk.tradedoubler.com/click?p=323646&a=3292116",
    "https://clk.tradedoubler.com/click?p=330883&a=3292116",
    "https://clk.tradedoubler.com/click?p=321024&a=3292116",
    "https://clk.tradedoubler.com/click?p=303518&a=3292116",
    "https://clk.tradedoubler.com/click?p=333314&a=3292116",
    "https://clk.tradedoubler.com/click?p=334500&a=3292116",
    "https://clk.tradedoubler.com/click?p=319666&a=3292116",
    "https://clk.tradedoubler.com/click?p=336366&a=3292116",
    "https://clk.tradedoubler.com/click?p=331320&a=3292116",
    "https://clk.tradedoubler.com/click?p=319668&a=3292116",
    "https://clk.tradedoubler.com/click?p=302907&a=3292116",
    "https://clk.tradedoubler.com/click?p=322845&a=3292116",
    "https://clk.tradedoubler.com/click?p=294974&a=3292116",
    "https://clk.tradedoubler.com/click?p=317634&a=3292095",
    "https://clk.tradedoubler.com/click?p=337235&a=3292095",
    "https://clk.tradedoubler.com/click?p=306977&a=3292095",
    "https://clk.tradedoubler.com/click?p=334106&a=3292095",
    "https://clk.tradedoubler.com/click?p=43667&a=3292095",
    "https://clk.tradedoubler.com/click?p=309878&a=3292095",
    "https://clk.tradedoubler.com/click?p=326294&a=3292095",
    "https://clk.tradedoubler.com/click?p=202394&a=3292095",
    "https://clk.tradedoubler.com/click?p=320426&a=3292095",
    ];
let isPartner = '';
let isPopupDisplayed = false;

function changeBackIcon() {
    chrome.action.setIcon({path:"../img/icon128x128.png"});
}

function changeIcon() {
    chrome.action.setIcon({path:"../img/icon128.png"});  
    setTimeout(changeBackIcon, 250);
}

function codesAnimation() {
    document.getElementById("code10").style.backgroundColor = "#3171FE";
}

function box(shopImage, shopCashback) {
    const body = document.querySelector("body");

    const boxHTML = document.createElement("div");
    const boxContent = document.createElement("div");
    const boxContentImg = document.createElement("img");

    boxHTML.classList.add("pw_box");
    boxContent.classList.add("pw_box_content");
    boxContentImg.classList.add("pw_box_content_img");

    boxContentImg.src = "https://zrcdn.net/images/logos/paidwork/paidwork-com-login-desktop.svg";
                
    boxContent.appendChild(boxContentImg);
    boxHTML.appendChild(boxContent);
    body.appendChild(boxHTML);

}

function popup(shopImage, shopCashback) {
    const tabDiscountCodes = [
      '30',
      '20',
      '40',
      '50',
      '10',
    ];
    
    const body = document.querySelector("body");
 
    //POPUP HTML SECTION & USAGES

    const popupHTML = document.createElement("div");
    const popupHeader = document.createElement("div");
    const popupHeaderLogo = document.createElement("div");
    const popupHeaderLogoImg = document.createElement("img");
    const popupHeaderClose = document.createElement("div");
    const popupMain = document.createElement("div");
    const popupMainPartnerLogo = document.createElement("div");
    const popupMainPartnerLogoImg = document.createElement("img");
    const popupMainPartnerCashback = document.createElement("div");
    const popupMainButtonSection = document.createElement("div");
    const popupMainButtonSectionButton1 = document.createElement("button");
    const popupMainButtonSectionButton2 = document.createElement("button");
  
    popupHTML.classList.add("pw_popup");
    popupHeader.classList.add("pw_popup_header");
    popupHeaderLogo.classList.add("pw_popup_header_logo");
    popupHeaderClose.classList.add("pw_popup_header_close");
    popupMain.classList.add("pw_popup_main");
    popupMainPartnerLogo.classList.add("pw_popup_main_partner-logo");
    popupMainPartnerCashback.classList.add("pw_popup_main_partner-cashback");
    popupMainButtonSection.classList.add("pw_popup_main_button-section");
    popupMainButtonSectionButton1.classList.add("pw_popup_main_button-section_button");
    popupMainButtonSectionButton2.classList.add("pw_popup_main_button-section_button");
    popupMainButtonSectionButton2.setAttribute("id","show_discount_codes");

    popupHeaderLogoImg.src = "https://zrcdn.net/images/logos/paidwork/paidwork-logo-header-mobile.png";
    popupHeaderClose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M12.1108 3.125L3.02734 11.875" stroke="#606267" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.02588 3.125L12.1094 11.875" stroke="#606267" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    popupMainPartnerLogoImg.src = shopImage;
    popupMainPartnerCashback.innerHTML = "Get " + (shopCashback*100).toFixed(2) + "% cashback";
    if (window.location.href.includes("utm_source")) {
        popupMainButtonSectionButton1.innerHTML = "Activated";
      } else {
        popupMainButtonSectionButton1.innerHTML = "Activate";
      }
   
    popupMainButtonSectionButton2.innerHTML = "Codes";

    popupHeaderLogo.appendChild(popupHeaderLogoImg);
    popupHeader.appendChild(popupHeaderLogo);
    popupHeader.appendChild(popupHeaderClose);

    popupMainPartnerLogo.appendChild(popupMainPartnerLogoImg);
    popupMain.appendChild(popupMainPartnerLogo);
    popupMain.appendChild(popupMainPartnerCashback);

    popupMainButtonSection.appendChild(popupMainButtonSectionButton1);
    popupMainButtonSection.appendChild(popupMainButtonSectionButton2);
    popupMain.appendChild(popupMainButtonSection);

    popupHTML.appendChild(popupHeader);
    popupHTML.appendChild(popupMain);

    body.appendChild(popupHTML);

    setTimeout(function () {
        popupHTML.classList.add("show");
    },500)
   
    popupHeaderClose.addEventListener('click', function () {
        popupHTML.classList.add("hide");
        setTimeout(function () {
            popupHTML.classList.remove("show");
        },500);
    });
        
    //SHOWING MODAL, MODAL ANIMATIONS

    popupMainButtonSectionButton2.addEventListener('click', function () {

        var i = 0;
        let bestCode = tabDiscountCodes[0];
        modalHTML.style.display = "block";
        
        for (let j = 0; j < tabDiscountCodes.length; j++) {
            if (bestCode < tabDiscountCodes[j]) {
                bestCode = tabDiscountCodes[j];
            }
        }   

        setTimeout(function () {
            modalCode1.classList.add("paidwork_modal_content_codes_code-animated");
        },500);
        setTimeout(function () {
            modalCode2.classList.add("paidwork_modal_content_codes_code-animated");
        },1000);
        setTimeout(function () {
            modalCode3.classList.add("paidwork_modal_content_codes_code-animated");
        },1500);
        setTimeout(function () {
            modalCode4.classList.add("paidwork_modal_content_codes_code-animated");
        },2000);
        setTimeout(function () {
            modalCode5.classList.add("paidwork_modal_content_codes_code-animated");
        },2500);
        //CHANGING MODAL CONTENT
        setTimeout(function () {
            modalCodes.remove();
            modalFooter.remove();
            modalBestCode.textContent = bestCode;
            modalContent.appendChild(modalContentResultText);
            modalContentResult.appendChild(modalBestCode);
            modalContent.appendChild(modalContentResult);
            modalContent.style.width = "15%";
        },3500);    
        
        if (i == 0) {
            i = 1;
            var elem = modalBar;
            var width = 10;

            var id = setInterval(function () {

              if (width >= 100) {
                  clearInterval(id);
                  i = 0;
              } 
              else {
                  width++;
                  elem.style.width = width + "%";
              }
            }, 30);
        }

        
    });
  
    //MODAL HTML SECTION & USAGES

    const modalHTML = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalClose = document.createElement("div"); 
    const modalHeader = document.createElement("div");
    const modalLogo = document.createElement("img");
    const modalCodes = document.createElement("div");
    const modalCode1 = document.createElement("div");
    const modalCode2 = document.createElement("div");
    const modalCode3 = document.createElement("div");
    const modalCode4 = document.createElement("div");
    const modalCode5 = document.createElement("div");
    const modalFooter = document.createElement("div");
    const modalBar = document.createElement("div");
    const modalText = document.createElement("p");
    const modalContentResult = document.createElement("div");
    const modalContentResultText = document.createElement("div");
    const modalBestCode = document.createElement("div");

    modalHTML.classList.add("paidwork_modal");
    modalContent.classList.add("paidwork_modal_content");
    modalClose.setAttribute("id","close_modal");
    modalHeader.classList.add("paidwork_modal_content_header");
    modalClose.classList.add("paidwork_modal_content_header_close");
    modalLogo.classList.add("paidwork_modal_content_header_logo");
    modalCodes.classList.add("paidwork_modal_content_codes");
    modalCode1.classList.add("paidwork_modal_content_codes_code");
    modalCode2.classList.add("paidwork_modal_content_codes_code");
    modalCode3.classList.add("paidwork_modal_content_codes_code");
    modalCode4.classList.add("paidwork_modal_content_codes_code");
    modalCode5.classList.add("paidwork_modal_content_codes_code");
    modalCode1.setAttribute("id","code10");
    modalCode2.setAttribute("id","code20");
    modalCode3.setAttribute("id","code30");
    modalCode4.setAttribute("id","code40");
    modalCode5.setAttribute("id","code50");
    modalBar.setAttribute("id","modalBar");
    modalBar.classList.add("paidwork_modal_content_footer_bar");
    modalText.classList.add("paidwork_modal_content_footer_text");
    modalFooter.classList.add("paidwork_modal_content_footer");
    modalContentResult.classList.add("paidwork_modal_content_result");
    modalBestCode.classList.add("paidwork_modal_content_result_best-code");
    modalContentResultText.classList.add("paidwork_modal_content_result_text");

    modalClose.innerHTML = "&times;";
    modalLogo.src = "https://zrcdn.net/images/logos/paidwork/paidwork-header-image-logo.svg";
    modalLogo.alt = "Paidwork logo";
    modalText.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7" stroke="#404040" stroke-width="2"/><path d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11" stroke="#404040" stroke-width="2" stroke-linecap="round"/><path d="M20 20L17 17" stroke="#404040" stroke-width="2" stroke-linecap="round"/></svg>';
    modalContentResultText.textContent = "Best code we found for you :";
    modalCode1.innerHTML = tabDiscountCodes[0];
    modalCode2.innerHTML = tabDiscountCodes[1];
    modalCode3.innerHTML = tabDiscountCodes[2];
    modalCode4.innerHTML = tabDiscountCodes[3];
    modalCode5.innerHTML = tabDiscountCodes[4];

    modalHeader.appendChild(modalLogo);
    modalHeader.appendChild(modalClose);

    modalCodes.appendChild(modalCode1);
    modalCodes.appendChild(modalCode2);
    modalCodes.appendChild(modalCode3);
    modalCodes.appendChild(modalCode4);
    modalCodes.appendChild(modalCode5);

    modalFooter.appendChild(modalBar);
    modalFooter.appendChild(modalText);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalCodes);
    modalContent.appendChild(modalFooter);

    modalHTML.appendChild(modalContent);

    modalClose.addEventListener('click', function () {
        modalHTML.style.display = "none";
    });

    body.appendChild(modalHTML);

}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        works();
    }

});
chrome.tabs.onCreated.addListener(function(tab) {
    works();
});
function works() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentUrl = tabs[0].url;

        if (tabs && tabs.length > 0) {
            chrome.storage.local.get(['used'], function (result) {
                var ifopened = result.used;
            
                if (currentUrl.includes("utm_source") && ifopened == '1') {
                    setTimeout(function (){
                        chrome.storage.local.set({ 'used': 0 });
                        chrome.storage.local.set({ 'opened': 2 });
                        chrome.storage.local.set({ 'shopsok': 0 });
                    },5 * 60 * 1000);
                    chrome.storage.local.set({ 'used': 1 });
                    chrome.storage.local.set({ 'opened': 1 });
                    chrome.storage.local.set({ 'callback': currentUrl });
                   
                } else if (!currentUrl.includes("utm_source") && ifopened == '1') {
                    setTimeout(function (){
                        chrome.storage.local.set({ 'used': 0 });
                        chrome.storage.local.set({ 'opened': 2 });
                        chrome.storage.local.set({ 'shopsok': 0 });
                    },5 * 60 * 1000);
                    chrome.storage.local.set({ 'used': 1 });
                    chrome.storage.local.set({ 'opened': 2 });
                    shops();
                } else {
                    
                    setTimeout(function (){
                        chrome.storage.local.set({ 'used': 0 });
                        chrome.storage.local.set({ 'opened': 2 });
                        chrome.storage.local.set({ 'shopsok': 0 });
                    },5 * 60 * 1000);
                    chrome.storage.local.set({ 'used': 0 });
                    chrome.storage.local.set({ 'opened': 2 });
                    chrome.storage.local.set({ 'shopsok': 0 });
                }
            });
        }
    });
}

  
function shops() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs && tabs.length > 0) {
            var currentUrl = tabs[0].url;
            for (let i = 0; i < tabShops.length; i++) {
                let isPartner = currentUrl.search(tabShops[i].toLowerCase());
                if (isPartner != -1) {
                    if (currentUrl.includes(tabShops[i].toLowerCase())) {
                        chrome.storage.local.set({ 'shopsok': 1 });
                        sendlink();  
                    } else {
                        chrome.storage.local.set({ 'shopsok': 0 });
                    }
                    i = tabShops.length;
                }
            }
        }
      
        function sendlink(){
        chrome.storage.local.get(['shopsok', 'callback', 'nowylink'], function (result) {
                var shopsok = result.shopsok;
                var new_link = result.callback;
                var x = result.nowylink;
                if (shopsok == '1') {
                    var newURL = currentUrl + "?" + x;
                    if(!currentUrl.includes(newURL.toLowerCase())){
                    chrome.tabs.update(tabs[0].id, { url: newURL });
                    }
                    if (new_link !== 'negatywny') {
                        var startIndex = new_link.indexOf('utm_source');
                        if (startIndex !== -1) {
                            var trimmedURL = new_link.substring(startIndex);
                            var textAfter = trimmedURL.substring(trimmedURL.indexOf('=') + 1);
                            chrome.storage.local.set({ 'nowylink': trimmedURL });
                            chrome.storage.local.set({ 'opened': 1 });
                        }
                    }
                }
            });
        }
    });
}

// Set isPopupDisplayed to false when tab is closed
chrome.tabs.onRemoved.addListener(function(removeInfo) {
    if (removeInfo.isWindowClosing) return;
    isPopupDisplayed = false;
});

// Set isPopupDisplayed to false when tab is replaced
chrome.tabs.onReplaced.addListener(function() {
    isPopupDisplayed = false;
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {

    if (changeInfo.status === 'complete') {

      // Reset isPopupDisplayed to false on tab refresh
      isPopupDisplayed = false;

      // Checking URL, if a website is our partner then change icon, set other badge text, load popup
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  
        let currentURL = tabs[0].url;
        
        for (let i = 0; i < tabShops.length; i++) {
            isPartner = currentURL.search(tabShops[i].toLowerCase());
  
            if (isPartner != -1 && isPopupDisplayed == false) {
                isPopupDisplayed = true;
                changeIcon();
              
                chrome.scripting.executeScript({
                    target : {tabId : tabs[0].id},
                    func : popup,
                    args : [ tabImages[i], tabCashbacks[i] ],
                    world : "MAIN"
                });
  
                chrome.scripting.executeScript({
                    target : {tabId : tabs[0].id},
                    func : box,
                    args : [ tabImages[i], tabCashbacks[i] ],
                    world : "MAIN"
                });
                i = tabShops.length;
            }
        }  
        
      });
    }
});
