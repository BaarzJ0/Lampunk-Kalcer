import React from 'react';

const DressesPage = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#6B0F0F' }}>
            <div className="py-20 px-5 md:px-10 max-w-6xl mx-auto text-white">
                <h2 className="text-3xl md:text-4xl font-marcellus text-center mb-8">
                    DRESSES
                </h2>
                
                <img 
                    src="/dresses.png" 
                    alt="Traditional Dresses of Lampung"
                    className="w-full max-w-4xl mx-auto mb-12 rounded-lg shadow-lg"
                />
                <div className="prose prose-lg max-w-4xl mx-auto text-white">
                    <p className="mb-8 text-center">
                        Pakaian adat Lampung dikenal dengan keindahan kain tapis dan perhiasan emas yang megah. Busana ini mencerminkan kemuliaan, keagungan, serta status sosial masyarakat Lampung, dan biasanya digunakan dalam acara adat seperti pernikahan, upacara penyambutan tamu, atau perayaan budaya.
                    </p>
                    
                    <p className="mb-12 text-center">
                        Warna emas dan motif tapis pada pakaian adat Lampung melambangkan kemakmuran, keagungan, serta adat istiadat yang dijunjung tinggi. Siger menjadi simbol tanggung jawab dan kehormatan perempuan dalam menjaga nama baik keluarga dan masyarakat.
                    </p>
                    
                    <div className="mb-12">
                        <h3 className="text-2xl font-marcellus mb-4 text-center">PAKAIAN ADAT PRIA LAMPUNG</h3>
                        <p className="mb-4">
                            Pria Lampung mengenakan baju lengan panjang berwarna putih atau jas tertutup, dipadukan dengan sarung tumpal bermotif songket Lampung. Busana ini dilengkapi dengan:
                        </p>
                        <ul className="list-disc pl-8 mb-4">
                            <li>Kalung papan jajar</li>
                            <li>Ikat pinggang emas</li>
                            <li>Selampang kain songket</li>
                            <li>Kopiah emas atau tanjak</li>
                        </ul>
                        <p className="italic">
                            Makna: Melambangkan keperkasaan, kebijaksanaan, dan kehormatan seorang laki-laki Lampung.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-marcellus mb-4 text-center">PAKAIAN ADAT WANITA LAMPUNG</h3>
                        <p className="mb-4">
                            Wanita Lampung memakai baju kurung putih dan kain tapis tenun benang emas. Ciri khasnya terletak pada mahkota siger yang megah di kepala, disertai perhiasan seperti:
                        </p>
                        <ul className="list-disc pl-8 mb-4">
                            <li>Kalung buah jukum</li>
                            <li>Gelang burung</li>
                            <li>Pending (ikat pinggang logam)</li>
                            <li>Tapis jung sarat</li>
                        </ul>
                        <p className="italic">
                            Makna: Menunjukkan keanggunan, kemuliaan, dan kehormatan wanita Lampung.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DressesPage;