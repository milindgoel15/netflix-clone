import ntv from "../assets/images/ntv.png";
import mobile from "../assets/images/mobile.png";
import all from "../assets/images/all.png";
import profiles from "../assets/images/profiles.png";

let ContentData = [
   {
      id: 1,
      styles: 'order-first',
      title: 'Enjoy on your TV.',
      desc: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      altdesc: 'Watch on TV',
      image: ntv,
   },
   {
      id: 2,
      styles: 'order-first md:order-last',
      title: 'Download your shows to watch offline.',
      desc: 'Save your favourites easily and always have something to watch.',
      altdesc: 'Offline Download Support',
      image: mobile,
   },
   {
      id: 3,
      styles: 'order-first',
      title: 'Watch everywhere.',
      desc: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      altdesc: 'Any Platform',
      image: all,
   },
   {
      id: 4,
      styles: 'order-first md:order-last',
      title: 'Create profiles for children.',
      desc: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
      altdesc: 'Create profiles for children.',
      image: profiles,
   },
]

export default ContentData;