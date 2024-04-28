import { Inter, Lusitana, Montserrat, Style_Script} from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ["latin"], 
                                    weight: ["400", "700"] });
export const montserrat = Montserrat({ subsets: ["latin"],
    weight: ["400", "600", "800"]
});
export const styleScript = Style_Script({ subsets: ["latin"],
                                        weight: ["400"] })