import React from 'react';
import {useState} from 'react'

function Navbar() {
  const [text1] = useState('Beden kitle endeksi hesaplama sonucunda çıkan değer ile kişinin zayıf, normal ağırlıkta, hafif şişman ya da obez olması gibi bir sınıflama yapılır. Fakat bu değer ile vücut yağ oranı ölçülmez. ');
  const [text2] = useState('BKİ hesaplaması için kişinin uygun şekilde tartılan ağırlığı boyunun karesine bölünür. Hesaplama sırasında ağırlık kg cinsinden, boy ise metre cinsinden olmalıdır. Ağırlık tartılması için en doğru vakit kişinin uyandıktan sonra açken ve tuvalet ihtiyacını giderdikten sonra yaptığı tartımdır.')
  const [text3] = useState('BKİ 20-25 ise kişi normal ağırlıktadır. 25-30 ise bu kişinin fazla kilolu olduğunu gösterir. BKİ değeri 30 ve üzerinde ise vücut ağırlığı ve vücut yağı fazladır, kişi obez olarak değerlendirilir.');

  

  return (
    <div className='navigation-bar'>
      <div className='contents'>
        <div className="tooltip">Nedir?
          <span className="tooltiptext">
            <p>{text1}</p>   
          </span>
        </div>

        <div className="tooltip">Nasıl Hesaplanır?
        <span className="tooltiptext">
            <p>{text2}</p>   
          </span>
        </div>

        <div className="tooltip">Sonuçlar
        <span className="tooltiptext">
            <p>{text3}</p>   
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
