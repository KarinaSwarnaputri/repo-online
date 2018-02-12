var Andi = {
    nama: 'Andi', usia: 50,
    job:{
        pns:{
            tingkat: 'Eleson IIIA',
            lokasi: 'Bali',
            mulai: 2010,
            akhir: 2060,
            gaji: 8000000
        },
        usaha: {
            nama: 'AndiMart',
            lokasi: ['Bali', 'Madura', 'Jakarta'],
            mulai: 2005,
            karyawan:{
                marketing: 2,
                staf_it: 2,
                cs: 2
            },
            laba:120000000
        }
    }
}
console.log(Andi.job.pns.gaji)